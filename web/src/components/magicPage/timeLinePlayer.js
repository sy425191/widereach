import { useEffect } from "react";

const TimelinePlayer = ({
  videoPlayerRef,
  isPlaying,
  toggleVideoPlay,
  showEditor,
  setShowEditor,
  time,
}) => {
  useEffect(() => {
    // spacebar to play/pause
    const handleSpace = (e) => {
      if (e.code === "Space") {
        toggleVideoPlay();
      }
    };

    videoPlayerRef.current.addEventListener("ended", toggleVideoPlay);

    window.addEventListener("keydown", handleSpace);

    return () => {
      window.removeEventListener("keydown", handleSpace);
    };
  }, []);

  return (
    <div className="flex justify-between items-center bg-slate-800 rounded h-6 text-xs w-full">
      <div className="flex gap-x-2">
        <i
          className={`rounded-lg border-2 border-slate-500 cursor-pointer py-1 px-1.5 text-xs text-slate-500 hover:text-slate-400 ${
            isPlaying ? "fa fa-pause" : "fa fa-play"
          }`}
          onClick={() => {
            toggleVideoPlay();
          }}
        ></i>

        <div className="flex items-center text-slate-500">
          {/* time */}
          <div className="px-1">{time}</div>
          <div className="px-1">/</div>
          <div className="px-1">
            {videoPlayerRef.current?.duration
              ? new Date(videoPlayerRef.current?.duration * 1000)
                  .toISOString()
                  .substr(11, 8)
              : "00:00:00"}
          </div>
        </div>
      </div>

      <div
        className="rounded-lg border-2 border-slate-500 cursor-pointer py-1 px-1.5 text-xs text-slate-500 hover:text-slate-400
                transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setShowEditor((prev) => !prev)}
      >
        {showEditor ? (
          <i className="fa fa-arrow-down"></i>
        ) : (
          <i className="fa fa-arrow-up"></i>
        )}
      </div>
    </div>
  );
};

export default TimelinePlayer;
