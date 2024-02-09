import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import { AudioTranscription } from "./services/subtitle.service.js";
import { extractAudio, getVideoMetadata } from "@remotion/renderer";
import { resolve } from "node:path";
import { unlink } from "node:fs";
import Ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import { TextTranslation } from "./services/translation.service.js";

Ffmpeg.setFfmpegPath(ffmpegStatic);

const app = express();
const upload = multer({
  dest: "uploads/",
});
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api", upload.single("file"), async (req, res) => {
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

  // delete the video file after extracting audio
  // unlink(videoSource, (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  // });

  // convert the audio to .wav format if it is not using fluent-ffmpeg
  if (videoMetadata.audioFileExtension !== "wav") {
    Ffmpeg(audioOutput)
      .toFormat("wav")
      .on("end", async () => {
        const subtitle = await AudioTranscription(
          audioOutputRelative + ".wav",
          language
        );

        unlink(audioOutput, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
        console.log(shouldTranslate);
        if (shouldTranslate !== "false") {
          // translate the subtitle
          await TextTranslation(subtitle, language, translateTo, res);
        } else {
          console.log("No translation requested");
          res.json(subtitle);
        }
      })
      .save(audioOutput + ".wav");
  }
});

app.post("/api/render:videofile", async (req, res) => {
  const videoSource = req.params.videofile;
});

export { app };
