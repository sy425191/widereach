import { Timeline } from "@xzdarcy/react-timeline-editor";
import { useContext, useEffect, useState } from "react";
import { EditorContext } from "../../context/editorContext";

export const TimelineEditor = () => {
  const editorContext = useContext(EditorContext);

  const [actions, setActions] = useState([]);

  useEffect(() => {
    const actions = editorContext.subtitle.map((subtitle, index) => {
      return {
        id: `action${index}`,
        start: (subtitle.offset / 10000000).toFixed(2),
        end: ((subtitle.offset + subtitle.duration) / 10000000).toFixed(2),
        minStart: (subtitle.offset / 10000000 - 0.5).toFixed(2),
        maxEnd: (
          (subtitle.offset + subtitle.duration) / 10000000 +
          0.5
        ).toFixed(2),
        effectId: "effect0",
        text: subtitle.text,
      };
    });
    setActions(actions);
  }, [editorContext.subtitle]);

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
        top: 0,
        left: 0,
        backgroundColor: "#0F172A",
      }}
      ref={editorContext.timeLineState}
      autoScroll={true}
      minScaleCount={5}
      maxScaleCount={60}
      scale={1}
      onChange={(data) => {
        editorContext.setSubtitle(data[0].actions);
      }}
      reRender={true}
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
              cursor: "pointer",
            }}
          >
            {action.text}
          </div>
        );
      }}
    />
  );
};
