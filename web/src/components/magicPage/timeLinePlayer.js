import { useContext, useEffect, useState } from "react";
import { EditorContext } from "../../context/editorContext";

const TimelinePlayer = () => {
  const editorContext = useContext(EditorContext);

  useEffect(() => {
    if (editorContext.isPlaying) {
      editorContext.pauseVideo();
    } else {
      editorContext.playVideo();
    }
  }, [editorContext.isPlaying]);

  const handleKeyPress = (e) => {
    if (e.key === " ") {
      editorContext.setIsPlaying(!editorContext.isPlaying);
    }
  };

  useEffect(() => {
    // use spacebar to play/pause

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [editorContext.isPlaying]);

  useEffect(() => {
    if (!editorContext.timeLineState.current) return;
    const engine = editorContext.timeLineState.current;

    editorContext.videoPlayerRef.current.addEventListener("ended", () => {
      editorContext.pauseVideo();
    });

    return () => {
      if (!engine) return;
      engine.pause();
      engine.listener.offAll();
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-slate-800 rounded h-6 text-xs w-full">
      <div className="flex gap-x-2">
        <i
          className={`rounded-lg border-2 border-slate-500 cursor-pointer py-1 px-1.5 text-xs text-slate-500 hover:text-slate-400 ${
            !editorContext.isPlaying ? "fa fa-pause" : "fa fa-play"
          }`}
          onClick={() => {
            editorContext.setIsPlaying(!editorContext.isPlaying);
          }}
        ></i>

        <div className="flex items-center text-slate-500">
          {/* time */}
          <div className="px-1">
            {new Date(editorContext.time * 1000).toISOString().substr(11, 8)}
          </div>
          <div className="px-1">/</div>
          <div className="px-1">
            {editorContext.videoPlayerRef.current?.duration
              ? new Date(editorContext.videoPlayerRef.current?.duration * 1000)
                  .toISOString()
                  .substr(11, 8)
              : "00:00:00"}
          </div>
        </div>
      </div>

      <div
        className="rounded-lg border-2 border-slate-500 cursor-pointer py-1 px-1.5 text-xs text-slate-500 hover:text-slate-400
                transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Download <i className="fa fa-download"></i>
      </div>
    </div>
  );
};

export default TimelinePlayer;
