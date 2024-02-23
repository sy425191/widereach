import { useContext, useEffect, useState } from "react";
import { EditorContext } from "../../context/editorContext";
import { VideoPlayerContext } from "../../context/videoPlayerContext";

const VideoPlayer = ({ video }) => {
  const editorContext = useContext(EditorContext);
  const playerContext = useContext(VideoPlayerContext);

  return (
    <>
      <video
        ref={editorContext.videoPlayerRef}
        className="absolute z-10"
        onTimeUpdate={playerContext.handleTimeUpdate}
        style={{
          width: "auto",
          height: "100%",
          objectFit: "contain",
        }}
        loop
      >
        <source src={URL.createObjectURL(video)} type="video/mp4" />
      </video>

      {editorContext.overLaySelected && (
        <div
          className="mx-1 absolute flex justify-center overflow-hidden z-20 bg-pink-300/30"
          style={{
            width: editorContext.videoPlayerRef.current?.clientWidth || 0,
            height: editorContext.videoPlayerRef.current?.clientHeight || 0,
          }}
        >
          {/* vertical and horizonal lines */}
          <div className="absolute w-0.5 h-full bg-rose-50" />
          <div
            className="absolute w-full h-0.5 bg-rose-50"
            style={{
              top: editorContext.overlayTextTop + "px",
            }}
          />
        </div>
      )}

      <div
        className="mx-1 absolute flex justify-center overflow-hidden z-30"
        style={{
          width: editorContext.videoPlayerRef.current?.clientWidth || 0,
          height: editorContext.videoPlayerRef.current?.clientHeight || 0,
        }}
      >
        <div
          id="overlay-text"
          className={`absolute transform px-2 text-center rounded-lg user-select-none ${
            editorContext.overLayText ? "block" : "block"
          }
          ${editorContext.overLaySelected ? "cursor-move" : "cursor-pointer"}
          `}
          draggable={editorContext.overLaySelected ? true : false}
          onDragEnd={(e) => editorContext.setOverlayTextTop(e.clientY)}
          style={{
            color: editorContext.textColor,
            fontSize: `${editorContext.textSize}px`,
            fontWeight: editorContext.fontBold,
            width: "fit-content",
            maxWidth: "90%",
            top: editorContext.overlayTextTop,
            margin: "auto",
            border: editorContext.border,
            fontFamily: editorContext.fontFamily.value,
            backgroundColor: editorContext.overLaySelected
              ? "rgba(0,0,0,0.5)"
              : editorContext.bgColor,
          }}
          onClick={(e) => {
            editorContext.setOverLaySelected(!editorContext.overLaySelected);
          }}
        >
          {editorContext.overLayText} ok
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
