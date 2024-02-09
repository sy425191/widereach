import { Timeline } from "@xzdarcy/react-timeline-editor";
import { useEffect, useState } from "react";

export const TimelineEditor = ({ subtitles, timeLineState }) => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const actions = subtitles.map((subtitle, index) => {
      return {
        id: `action${index}`,
        start: (subtitle.offset / 10000000).toFixed(2),
        end: ((subtitle.offset + subtitle.duration) / 10000000).toFixed(2),
        minStart: ((subtitle.offset / 10000000)+0.5).toFixed(2),
        maxEnd: (((subtitle.offset + subtitle.duration) / 10000000)+0.5).toFixed(2),
        effectId: "effect0",
        text: subtitle.text,
      };
    });
    setActions(actions);
  }, [subtitles]);

  const editorData = [
    {
      id: "1",
      actions: actions,
    },
  ];

  return (
    <Timeline
      editorData={editorData}
      effects={{}}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#0F172A",
      }}
      ref={timeLineState}
      autoScroll={true}
      maxScaleCount={60}
      gridSnap={true}
      onChange={(data) => console.log(data)}
      getActionRender={(action, index) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "11px",
            }}
          >
            {action.text}
          </div>
        );
      }}
    />
  );
};
