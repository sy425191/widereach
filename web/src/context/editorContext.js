import { createContext, useRef, useState } from "react";
import etro from "etro";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const timeLineState = useRef();
  const videoPlayerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(0); // in seconds
  const [overLayText, setOverLayText] = useState("");
  const [overlayTextTop, setOverlayTextTop] = useState("80%");

  const [subtitle, setSubtitle] = useState([]);

  const [textColor, setTextColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("transparent");
  const [textSize, setTextSize] = useState("20"); // in px
  const [fontBold, setFontBold] = useState("bold"); // 400, 600, 700, 800
  const [fontFamily, setFontFamily] = useState("Arial");
  const [border, setBorder] = useState("none"); // 1px solid #000

  const [overLaySelected, setOverLaySelected] = useState(false);

  const [actions, setActions] = useState([]);

  const [perSecondLength, setPerSecondLength] = useState(300);
  const timelinePointerRef = useRef();
  const timeLineWindowRef = useRef();

  const [intervalID, setIntervalID] = useState(0);

  const startTimeLine = function () {
    const tempInterval = setInterval(() => {
      if (timelinePointerRef.current) {
        timelinePointerRef.current.style.left =
          videoPlayerRef.current.currentTime * perSecondLength + "px";

        if (
          videoPlayerRef.current.currentTime * perSecondLength + 50 >
          timeLineWindowRef.current.scrollLeft +
            timeLineWindowRef.current.offsetWidth
        ) {
          timeLineWindowRef.current.scrollLeft =
            videoPlayerRef.current.currentTime * perSecondLength +
            50 -
            timeLineWindowRef.current.offsetWidth;
        } else if (
          videoPlayerRef.current.currentTime * perSecondLength <
          timeLineWindowRef.current.offsetWidth
        ) {
          timeLineWindowRef.current.scrollLeft = 0;
        }
      }
    }, 1000 / 60);
    setIntervalID(tempInterval);
  };

  const stopTimeLine = function () {
    clearInterval(intervalID);
  };

  const playVideo = () => {
    videoPlayerRef.current?.play();
    startTimeLine();
  };

  const pauseVideo = () => {
    videoPlayerRef.current?.pause();
    stopTimeLine();
  };

  const downloadVideo = () => {
    const canvas = document.createElement("canvas");

    const htmlVideo = document.createElement("video");
    htmlVideo.src = URL.createObjectURL(selectedVideo);

    const movie = new etro.Movie({
      canvas,
    });
    movie.width = videoPlayerRef.current.videoWidth;
    movie.height = videoPlayerRef.current.videoHeight;
    const BaseVideolayer = new etro.layer.Video({
      startTime: 0,
      source: htmlVideo,
    });

    movie.layers.push(BaseVideolayer);

    subtitle.forEach((sub) => {
      const textLayer = new etro.layer.Text({
        text: sub.text.replace(/<\/?b>/g, ""),
        startTime: sub.start / 1000,
        duration: (sub.end - sub.start) / 1000,
        font: "70px sans-serif",
        textX: videoPlayerRef.current.videoWidth / 2,
        textY: videoPlayerRef.current.videoHeight - 100,
        textAlign: "center",
      });
      movie.layers.push(textLayer);
    });

    movie
      .record({
        frameRate: 30,
      })
      .then((blob) => {
        // download the video blob
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "etro.mp4";
        a.click();
        URL.revokeObjectURL(url);
      });
  };

  return (
    <EditorContext.Provider
      value={{
        timeLineState,
        videoPlayerRef,
        isPlaying,
        setIsPlaying,
        time,
        setTime,
        playVideo,
        pauseVideo,
        overLayText,
        setOverLayText,
        overlayTextTop,
        setOverlayTextTop,
        subtitle,
        setSubtitle,
        textColor,
        setTextColor,
        bgColor,
        setBgColor,
        textSize,
        setTextSize,
        fontBold,
        setFontBold,
        fontFamily,
        setFontFamily,
        border,
        setBorder,
        overLaySelected,
        setOverLaySelected,
        actions,
        setActions,
        timelinePointerRef,
        timeLineWindowRef,
        perSecondLength,
        downloadVideo,
        selectedVideo,
        setSelectedVideo,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
