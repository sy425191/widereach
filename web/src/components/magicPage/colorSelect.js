import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";

const ColorSelect = ({ color, setColor, colorsList }) => {
  const [openColorSelector, setOpenColorSelector] = useState(false);

  const colorRef = useRef();

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (colorRef.current) {
        if (!colorRef.current.contains(event.target)) {
          setOpenColorSelector(false);
        }
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="w-8 h-8 rounded cursor-pointer flex justify-center items-center border-4 border-slate-500"
        style={{ backgroundColor: color }}
        onClick={(e) => setOpenColorSelector(true)}
      ></div>

      {openColorSelector && (
        <div className="absolute top-10 h-[100%]" ref={colorRef}>
          <SketchPicker
            colors={colorsList}
            width="200px"
            onChangeComplete={(color) => {
              setColor(color.hex);
            }}
          />
        </div>
      )}
    </div>
  );
};

export { ColorSelect };
