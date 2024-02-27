import { useContext, useEffect, useRef, useState } from "react";
import { GetSubtitle } from "../api/subtitleApi";
import { languageOptions } from "../utils/languageOptions.js";
import VideoPlayer from "../components/magicPage/videoPlayer.js";
import StyleEditor from "../components/magicPage/styleEditor.js";
import MultiStepForm from "../components/magicPage/mutliStepForm.js";
import { TimelineEditor } from "../components/magicPage/timeline-editor.js";
import TimelinePlayer from "../components/magicPage/timeLinePlayer.js";
import { EditorContext } from "../context/editorContext.js";
import { VideoPlayerContext } from "../context/videoPlayerContext.js";

const MagicCenter = () => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const playerContext = useContext(VideoPlayerContext);
  const editorContext = useContext(EditorContext);

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [shouldTranslate, setShouldTranslate] = useState(false);
  const [translationLanguage, setTranslationLanguage] = useState(
    languageOptions[0]
  );

  const [multiSelectFormPage, setMultiSelectFormPage] = useState(0);

  const [editorPage, setEditorPage] = useState(0);

  const handleSubmit = () => {
    if (!selectedVideo) {
      alert("Please select a video file.");
      return;
    }
    const fileSize = selectedVideo.size / 1024 / 1024; // Convert to MB

    // if (fileSize > 15) {
    //   alert("Please select a video file smaller than 15MB.");
    //   return;
    // }

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
        editorContext.setSubtitle(res);
      })
      .catch((err) => {
        editorContext.setSubtitle([]);
        console.log(err);
      })
      .finally(() => setLoading(false));
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
          className={`flex items-center w-full h-full gap-y-4 ${
            selectedVideo ? "flex-col" : "hidden"
          }`}
        >
          <div
            className="flex-1 flex flex-row w-full justify-center items-center gap-x-4"
            style={{
              maxHeight: "calc(100vh - 11rem)",
            }}
          >
            <div className="flex-1 h-full relative bg-slate-900 rounded flex justify-center">
              <VideoPlayer video={selectedVideo} />
            </div>
            <div className="flex h-full">
              <StyleEditor />
            </div>
          </div>
          <div className="relative bottom-0 flex flex-col w-full h-32">
            <div className="w-full flex justify-center z-10">
              <TimelinePlayer />
            </div>
            <TimelineEditor key="timeline-editor" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MagicCenter;
