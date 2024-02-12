import { createContext, useContext } from "react";
import { EditorContext } from "./editorContext";

const VideoPlayerContext = createContext();

const VideoPlayerProvider = ({ children }) => {
  const editorContext = useContext(EditorContext);

  const handleTimeUpdate = (event) => {
    const video = editorContext.videoPlayerRef.current;
    let currentTime = video.currentTime;
    editorContext.setTime(currentTime);
    // convert time to ticks
    currentTime = (currentTime + 0.2) * 10000000;
    const currentLine = editorContext.subtitle?.find(
      (line) =>
        line.offset <= currentTime && line.offset + line.duration >= currentTime
    );

    if (currentLine) {
      console.log(currentLine.text);
      editorContext.setOverLayText((prev) => {
        if (prev !== currentLine.text) {
          return currentLine.text;
        }
        return prev;
      });
    } else {
      editorContext.setOverLayText("");
    }
  };

  return (
    <VideoPlayerContext.Provider
      value={{
        handleTimeUpdate,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};

export { VideoPlayerContext, VideoPlayerProvider };
