import { createContext, useRef, useState } from "react";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const timeLineState = useRef();
  const videoPlayerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(0); // in seconds
  const [overLayText, setOverLayText] = useState("");
  const [overlayTextTop, setOverlayTextTop] = useState("80%");

  const [subtitle, setSubtitle] = useState([]);

  const [textColor, setTextColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("transparent");
  const [outLineColor, setOutLineColor] = useState("none");
  const [textSize, setTextSize] = useState("18"); // in px
  const [fontBold, setFontBold] = useState("400"); // 400, 600, 700, 800
  const [fontFamily, setFontFamily] = useState("Arial");
  const [border, setBorder] = useState("none"); // 1px solid #000

  const [overLaySelected, setOverLaySelected] = useState(false);

  let interval;

  const playVideo = () => {
    console.log("playVideo");
    videoPlayerRef.current?.play();

    // play the timeline

    const ctx = canvasRef.current?.getContext("2d");

    interval = setInterval(() => {
      timeLineState.current?.setTime(videoPlayerRef.current?.currentTime);
      if (canvasRef.current){
        ctx.drawImage(
          videoPlayerRef.current,
          0,
          0,
          canvasRef.current?.width || 0,
          canvasRef.current?.height || 0
        );
      } else {
        clearInterval(interval);
      }
    }, 1000 / 60);
  };

  const pauseVideo = () => {
    console.log("pauseVideo");
    videoPlayerRef.current?.pause();
    clearInterval(interval);
  };

  return (
    <EditorContext.Provider
      value={{
        timeLineState,
        videoPlayerRef,
        canvasRef,
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
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
