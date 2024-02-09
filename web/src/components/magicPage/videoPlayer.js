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
}) => {
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
      >
        <source src={URL.createObjectURL(video)} type="video/mp4" />
        <source src={URL.createObjectURL(video)} type="video/ogg" />
      </video>
      <div
        className="mx-1 absolute"
        style={{
          width: videoPlayerRef.current?.clientWidth,
          height: videoPlayerRef.current?.clientHeight,
        }}
      >
        <div
          id="overlay-text"
          className={`absolute transform px-2 text-center rounded-lg cursor-pointer ${
            overLayText ? "block" : "hidden"
          }`}
          style={{
            color: textColor,
            backgroundColor: bgColor,
            fontSize: `${textSize}px`,
            fontWeight: fontBold,
            width: "fit-content",
            maxWidth: videoPlayerRef.current?.clientWidth,
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
