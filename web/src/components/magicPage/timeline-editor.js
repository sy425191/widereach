import { useContext } from "react";
import { EditorContext } from "../../context/editorContext";

export const TimelineEditor = () => {
  const editorContext = useContext(EditorContext);

  const perSecondLength = 400;
  const duration = editorContext.videoPlayerRef.current?.duration;

  return (
    <div className="flex-1 flex flex-col justify-center pt-4 px-3 no-scrollbar bg-slate-900 overflow-x-auto">
      <div
        className="relative h-12 bg-slate-700/60 rounded"
        style={{
          width: `${duration * perSecondLength}px`,
        }}
      >
        <div className="absolute w-full h-0.5 bg-slate-600 -top-4 left-0">
          {[...Array((parseInt(duration) || 1) + 1)].map((x, i) => {
            return (
              <div key={i}>
                <div
                  className="absolute h-3 w-0.5 bg-slate-600"
                  style={{ left: i * perSecondLength }}
                ></div>

                {[...Array(10)].map((xx, ii) => {
                  return (
                    <div
                      className="absolute h-2 w-0.5 bg-slate-600"
                      style={{
                        left: i * perSecondLength + ii * (perSecondLength / 10),
                      }}
                    ></div>
                  );
                })}

                <div
                  className="absolute text-xs text-slate-400 -top-4 "
                  style={{ left: i * perSecondLength }}
                >
                  {i}
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute w-1 h-14 -top-2 bg-purple-800 cursor-col-resize"></div>
        ok
      </div>
    </div>
  );
};
