import { Timeline } from "@xzdarcy/react-timeline-editor";
import { useContext, useEffect, useState } from "react";
import { EditorContext } from "../../context/editorContext";

export const TimelineEditor = () => {
  const editorContext = useContext(EditorContext);

  const editorData = [
    {
      id: "1",
      actions: editorContext.actions,
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
        const newSubtitle = data[0].actions.map((action) => {
          return {
            text: action.text,
            offset: action.start * 10000000,
            duration: (action.end - action.start) * 10000000,
          };
        });
        editorContext.setSubtitle(newSubtitle);
        console.log(data[0].actions);
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
