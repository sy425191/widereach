import { useEffect, useRef, useState } from "react";
import { GetSubtitle } from "../api/subtitleApi";
import { languageOptions } from "../utils/languageOptions.js";
import VideoPlayer from "../components/magicPage/videoPlayer.js";
import StyleEditor from "../components/magicPage/styleEditor.js";
import MultiStepForm from "../components/magicPage/mutliStepForm.js";
import { TimelineEditor } from "../components/magicPage/timeline-editor.js";
import TimelinePlayer from "../components/magicPage/timeLinePlayer.js";

const MagicCenter = () => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [overLayText, setOverLayText] = useState("");
  const [overlayTextTop, setOverlayTextTop] = useState("80%");

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [shouldTranslate, setShouldTranslate] = useState(false);
  const [translationLanguage, setTranslationLanguage] = useState(
    languageOptions[0]
  );
  const [subtitle, setSubtitle] = useState([]);
  const [multiSelectFormPage, setMultiSelectFormPage] = useState(0);

  const [editorPage, setEditorPage] = useState(0);
  const [textColor, setTextColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("transparent");
  const [textSize, setTextSize] = useState("18"); // in px
  const [fontBold, setFontBold] = useState("400"); // 400, 600, 700, 800

  const timeLineState = useRef();

  const videoPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState("00:00:00");

  const toggleVideoPlay = () => {
    // const isPlayingVideo =
    //   videoPlayerRef.current.currentTime > 0 &&
    //   !videoPlayerRef.current.paused &&
    //   !videoPlayerRef.current.ended &&
    //   videoPlayerRef.current.readyState > 2;

    // if (isPlayingVideo === false) {
    //   // videoPlayerRef.current.play();
    //   timeLineState.current.play();
    //   setIsPlaying(true);
    // } else {
    //   // videoPlayerRef.current.pause();
    //   timeLineState.current.pause();
    //   setIsPlaying(false);
    // }
  };

  const handleSubmit = () => {
    if (!selectedVideo) {
      alert("Please select a video file.");
      return;
    }
    const fileSize = selectedVideo.size / 1024 / 1024; // Convert to MB

    if (fileSize > 15) {
      alert("Please select a video file smaller than 15MB.");
      return;
    }

    setMultiSelectFormPage(3);
    setLoading(true);

    // Proceed with uploading the video
    GetSubtitle(
      selectedVideo,
      selectedLanguage.value,
      shouldTranslate,
      translationLanguage.value
    )
      .then((res) => {
        setSubtitle(res);
      })
      .catch((err) => {
        setSubtitle([]);
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const handleTimeUpdate = (event) => {
    const video = event.target;
    let currentTime = video.currentTime;
    setTime(new Date(currentTime * 1000).toISOString().substr(11, 8));
    // convert time to ticks
    currentTime = (currentTime + 0.2) * 10000000;
    const currentLine = subtitle?.find(
      (line) =>
        line.offset <= currentTime && line.offset + line.duration >= currentTime
    );

    if (currentLine) {
      setOverLayText((prev) => {
        if (prev !== currentLine.text) {
          return currentLine.text;
        }
        return prev;
      });
    } else {
      // setOverLayText("");
    }
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <MultiStepForm
        multiSelectFormPage={multiSelectFormPage}
        setMultiSelectFormPage={setMultiSelectFormPage}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        shouldTranslate={shouldTranslate}
        setShouldTranslate={setShouldTranslate}
        translationLanguage={translationLanguage}
        setTranslationLanguage={setTranslationLanguage}
        inputRef={inputRef}
        handleSubmit={handleSubmit}
      />

      {multiSelectFormPage === 3 && (
        <div
          className={`flex items-center w-full h-full ${
            selectedVideo ? "flex-col" : "hidden"
          }`}
        >
          <div className="flex-1 flex flex-row w-full justify-center items-center">
            <div className="w-1/3 h-full relative pb-4">
              <VideoPlayer
                video={selectedVideo}
                handleUpdate={handleTimeUpdate}
                videoPlayerRef={videoPlayerRef}
                overLayText={overLayText}
                bgColor={bgColor}
                textColor={textColor}
                textSize={textSize}
                fontBold={fontBold}
                overlayTextTop={overlayTextTop}
                setOverlayTextTop={setOverlayTextTop}
              />
            </div>
            <div className="flex-1 h-full overflow-y-auto pb-4">
              <div className="w-full h-full flex flex-row justify-between items-center">
                <div className="flex-1 bg-slate-500"> </div>
                <div className="w-16 rounded-lg bg-slate-800 h-full flex flex-col justify-start items-center gap-y-4 relative">
                  <div className="size-10 rounded bg-slate-500 mt-2"></div>
                  <div className="size-10 rounded bg-slate-500 mt-2"></div>
                  <div className="size-10 rounded bg-slate-500 mt-2"></div>
                </div>
              </div>

              <div className="hidden">
                <StyleEditor
                  textSize={textSize}
                  setTextSize={setTextSize}
                  setTextColor={setTextColor}
                  textColor={textColor}
                  bgColor={bgColor}
                  setBgColor={setBgColor}
                  editorPage={editorPage}
                  setEditorPage={setEditorPage}
                  fontBold={fontBold}
                  setFontBold={setFontBold}
                />
                <div className="flex flex-col px-3 py-3 mt-3  text-slate-300 bg-slate-900 min-h-40 rounded-xl">
                  <div className="text-sm">
                    <i className="fa fa-file-text-o mr-2"></i> Subtitle
                  </div>

                  {loading && (
                    <div className="w-full h-full flex justify-center items-center">
                      <i className="fa fa-spinner fa-spin text-2xl text-slate-300"></i>
                    </div>
                  )}

                  <div className="flex-1 my-2 flex flex-wrap">
                    {subtitle?.map((line, index) => (
                      <div
                        className="px-3 py-1 rounded cursor-pointer hover:bg-slate-600"
                        key={index}
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex relative w-full mt-4
            ${showEditor ? "h-28" : "h-12"}
          `}
          >
            <div
              className={`absolute flex-1 w-full h-28 flex pt-3 px-1 rounded-b-lg bg-slate-900 
              overflow-hidden transition-all duration-300 ease-in-out transform scale-0 origin-top
            `}
              style={{
                transform: showEditor ? "scale(1)" : "scale(0)",
              }}
            >
              <TimelineEditor
                key="timeline-editor"
                subtitles={subtitle}
                timeLineState={timeLineState}
              />
            </div>
            <div className="absolute w-full top-0 -mt-6 flex justify-center">
              <TimelinePlayer
                videoPlayerRef={videoPlayerRef}
                isPlaying={isPlaying}
                toggleVideoPlay={toggleVideoPlay}
                showEditor={showEditor}
                setShowEditor={setShowEditor}
                time={time}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagicCenter;
