import Router from "express";
import multer from "multer";
import { resolve } from "node:path";
import { unlink } from "node:fs";
import { TranscribeProject } from "../controllers/subtitle.controller.js";
import { extractAudio, getVideoMetadata } from "@remotion/renderer";
import { v2 as cloudinary } from "cloudinary";
import { Ffmpeg } from "../utils/ffmpeg.js";

const subtileRoute = Router();

const upload = multer({
  dest: "uploads/",
});

subtileRoute.post("", upload.single("file"), async (req, res) => {
  const videoSource = resolve(process.cwd(), "./" + req.file.path);
  const language = req.body.language;
  const shouldTranslate = req.body.shouldTranslate;
  const translateTo = req.body.translateTo;

  console.log(videoSource);

  const videoMetadata = await getVideoMetadata(videoSource);

  const audioOutputRelative =
    "uploads/temp-audio." + videoMetadata.audioFileExtension;
  const audioOutput = resolve(process.cwd(), "./" + audioOutputRelative);

  await extractAudio({
    videoSource,
    audioOutput,
  });

  // convert the audio to .wav format if it is not using fluent-ffmpeg
  if (videoMetadata.audioFileExtension !== "wav") {
    Ffmpeg(audioOutput)
      .toFormat("wav")
      .on("end", async () => {
        // upload the audio to cloudinary storage

        cloudinary.uploader.upload(
          audioOutputRelative + ".wav",
          { resource_type: "video" },
          async (error, result) => {
            if (error) {
              console.error(error);
              return;
            }

            const audioUrl = result.secure_url;
            console.log(audioUrl);

            const transcript = await TranscribeProject(audioUrl, language);

            const words = transcript.words;
            const auto_highlights_result = transcript.auto_highlights_result;

            unlink(audioOutput, (err) => {
              if (err) {
                console.error(err);
                return;
              }
            });
            res.status(200).json({
              transcript: words,
              auto_highlights_result: auto_highlights_result,
            });
          }
        );
      })
      .save(audioOutput + ".wav");
  }
});

export default subtileRoute;
