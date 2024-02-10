import { useEffect, useState } from "react";

const VideoPlayer = ({
  video,
  handleUpdate,
  videoPlayerRef,
  overLayText,
  bgColor,
  textColor,
  textSize,
  fontBold,
  overlayTextTop,
  setOverlayTextTop,
}) => {
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (videoPlayerRef.current) {
      setVideoSize({
        width: videoPlayerRef.current.clientWidth,
        height: videoPlayerRef.current.clientHeight,
      });
    }

    return () => {
      setVideoSize({ width: 0, height: 0 });
    };
  }, [videoPlayerRef]);

  return (
    <div className="w-full h-full flex flex-col relative items-center justify-center">
      <video
        ref={videoPlayerRef}
        className="border-4 rounded-t-lg border-slate-300 absolute"
        onTimeUpdate={handleUpdate}
        style={{
          width: "auto",
          height: "100%",
          objectFit: "contain",
        }}
        onResize={(e) => {
          setVideoSize({
            width: e.target.clientWidth,
            height: e.target.clientHeight,
          });
        }}
      >
        <source src={URL.createObjectURL(video)} type="video/mp4" />
        <source src={URL.createObjectURL(video)} type="video/ogg" />
      </video>
      <div
        className="mx-1 absolute flex justify-center overflow-hidden"
        style={{
          width: videoSize.width,
          height: videoSize.height,
        }}
      >
        <div
          id="overlay-text"
          className={`absolute transform px-2 text-center rounded-lg cursor-pointer border-dotted border-2 ${
            overLayText ? "block" : "hidden"
          }`}
          draggable="true"
          onDragEnd={(e) => setOverlayTextTop(e.clientY)}
          style={{
            color: textColor,
            backgroundColor: bgColor,
            fontSize: `${textSize}px`,
            fontWeight: fontBold,
            width: "fit-content",
            maxWidth: videoSize.width - 20,
            top: overlayTextTop,
            margin: "auto",
          }}
        >
          {overLayText}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
