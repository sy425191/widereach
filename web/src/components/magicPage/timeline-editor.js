import { useContext } from "react";
import { EditorContext } from "../../context/editorContext";

export const TimelineEditor = () => {
  const editorContext = useContext(EditorContext);

  const duration = editorContext.videoPlayerRef.current?.duration;

  return (
    <div
      className="flex-1 select-none flex flex-col justify-center pt-4 px-3 no-scrollbar bg-slate-900 overflow-x-auto"
      ref={editorContext.timeLineWindowRef}
    >
      <div
        className="relative text-xs text-slate-400 flex items-center h-12 bg-slate-700/60 rounded"
        style={{
          width: `${duration * editorContext.perSecondLength}px`,
        }}
      >
        <div className="absolute w-full h-0.5 bg-slate-600 -top-4 left-0">
          {[...Array((parseInt(duration) || 1) + 1)].map((x, i) => {
            return (
              <div key={i}>
                <div
                  className="absolute h-3 w-0.5 bg-slate-600"
                  style={{ left: i * editorContext.perSecondLength }}
                ></div>

                {[...Array(10)].map((xx, ii) => {
                  if (
                    i * editorContext.perSecondLength +
                      ii * (editorContext.perSecondLength / 10) >
                    duration * editorContext.perSecondLength
                  ) {
                    return <></>;
                  }
                  return (
                    <div
                      className="absolute h-2 w-0.5 bg-slate-600"
                      style={{
                        left:
                          i * editorContext.perSecondLength +
                          ii * (editorContext.perSecondLength / 10),
                      }}
                    ></div>
                  );
                })}

                <div
                  className="absolute text-xs text-slate-400 -top-4 "
                  style={{ left: i * editorContext.perSecondLength }}
                >
                  {i}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="absolute w-1 h-14 -top-2 bg-purple-800 cursor-col-resize z-30"
          ref={editorContext.timelinePointerRef}
        >
          <div className="size-3 rounded-full bg-purple-800 absolute -left-1 -top-1"></div>
        </div>
        Subtitle's here
      </div>
    </div>
  );
};
