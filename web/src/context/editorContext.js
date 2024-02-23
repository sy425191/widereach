import { createContext, useRef, useState } from "react";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const timeLineState = useRef();
  const videoPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(0); // in seconds
  const [overLayText, setOverLayText] = useState("");
  const [overlayTextTop, setOverlayTextTop] = useState("80%");

  const [subtitle, setSubtitle] = useState([]);

  const [textColor, setTextColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("transparent");
  const [strokeColor, setStrokeColor] = useState("none");
  const [textSize, setTextSize] = useState("20"); // in px
  const [fontBold, setFontBold] = useState("bold"); // 400, 600, 700, 800
  const [fontFamily, setFontFamily] = useState("Arial");
  const [border, setBorder] = useState("none"); // 1px solid #000

  const [overLaySelected, setOverLaySelected] = useState(false);

  const [actions, setActions] = useState([]);

  const playVideo = () => {
    videoPlayerRef.current?.play();
  };

  const pauseVideo = () => {
    videoPlayerRef.current?.pause();
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
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorContext, EditorProvider };
