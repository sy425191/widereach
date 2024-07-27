import { useContext, useRef } from "react";
import { EditorContext } from "../../context/editorContext";
import { VideoPlayerContext } from "../../context/videoPlayerContext";

const VideoPlayer = ({ video }) => {
  const editorContext = useContext(EditorContext);
  const playerContext = useContext(VideoPlayerContext);

  const overLayRef = useRef(null);

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
          className="mx-1 absolute flex justify-center overflow-hidden z-20 bg-slate-300/50"
          style={{
            width: editorContext.videoPlayerRef.current?.clientWidth || 0,
            height: editorContext.videoPlayerRef.current?.clientHeight || 0,
          }}
        >
          {/* vertical and horizonal lines */}
          <div className="absolute border-[1px] border-dashed h-full border-slate-950" />
          <div
            className="absolute w-full border-[1px] border-dashed border-slate-950"
            style={{
              top:
                parseInt(editorContext.overlayTextTop) +
                parseInt(overLayRef.current?.clientHeight / 2) +
                "px",
            }}
          />
        </div>
      )}

      <OverLayTextComponent overLayRef={overLayRef} />
    </>
  );
};

const OverLayTextComponent = ({ overLayRef }) => {
  const editorContext = useContext(EditorContext);
  return (
    <div
      className="mx-1 absolute flex justify-center overflow-hidden z-30"
      style={{
        width: editorContext.videoPlayerRef.current?.clientWidth || 0,
        height: editorContext.videoPlayerRef.current?.clientHeight || 0,
      }}
      key={new Date().getTime()}
    >
      <div
        id="overlay-text"
        className={`absolute transform px-2 text-center rounded-lg user-select-none ${
          editorContext.overLayText ? "block" : "block"
        }
          ${editorContext.overLaySelected ? "cursor-move" : "cursor-pointer"}
          transition-all duration-300 ease-in-out transform scale-100 origin-top
          `}
        draggable={editorContext.overLaySelected ? true : false}
        onDragEnd={(e) => {
          const finalTop = e.clientY - overLayRef.current.clientHeight;
          if (finalTop < 10) {
            editorContext.setOverlayTextTop("100");
          } else {
            editorContext.setOverlayTextTop(finalTop);
          }
        }}
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
          WebkitTextStroke: "0.5px red",
        }}
        ref={overLayRef}
        onClick={(e) => {
          editorContext.setOverLaySelected(!editorContext.overLaySelected);
        }}
        dangerouslySetInnerHTML={{ __html: editorContext.overLayText }}
      ></div>
    </div>
  );
};

export default VideoPlayer;
