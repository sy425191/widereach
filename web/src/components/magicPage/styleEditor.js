import { TwitterPicker } from "react-color";
import { BackgroundColors, TextColors } from "./colorConstants";

const StyleEditor = (
    {
        editorPage,
        setEditorPage,
        fontBold,
        setFontBold,
        textColor,
        setTextColor,
        bgColor,
        setBgColor,
        textSize,
        setTextSize,
    }
) => {
  return (
    <div className="w-full flex justify-between items-start px-2 py-1 text-slate-300 bg-slate-900 min-h-16 rounded-xl">
      <div className="w-36 h-full flex flex-col items-start space-y-3 py-3 border-r-2 border-slate-800">
        <div
          className={`text-sm px-2 py-1 rounded cursor-pointer ${
            editorPage === 0 && "text-slate-950 bg-slate-300"
          }`}
          onClick={() => setEditorPage(0)}
        >
          Font Weight
        </div>
        <div
          className={`text-sm px-2 py-1 rounded cursor-pointer ${
            editorPage === 1 && "text-slate-950 bg-slate-300"
          }`}
          onClick={() => setEditorPage(1)}
        >
          Text Color
        </div>
        <div
          className={`text-sm px-2 py-1 rounded cursor-pointer ${
            editorPage === 2 && "text-slate-950 bg-slate-300"
          }`}
          onClick={() => setEditorPage(2)}
        >
          Background Color
        </div>
        <div
          className={`text-sm px-2 py-1 rounded cursor-pointer ${
            editorPage === 3 && "text-slate-950 bg-slate-300"
          }`}
          onClick={() => setEditorPage(3)}
        >
          Font Size
        </div>
      </div>

      <div className="flex-1">
        {editorPage === 0 && (
          <div className="flex flex-col">
            <div className="h-full flex justify-center items-center space-x-6 pt-12">
              <div
                className={`px-3 py-2 rounded cursor-pointer ${
                  fontBold === "400" && "bg-slate-300 text-slate-950"
                }`}
                onClick={() => setFontBold("400")}
              >
                Normal
              </div>
              <div
                className={`px-3 py-2 rounded cursor-pointer font-semibold ${
                  fontBold === "600" && "bg-slate-300 text-slate-950"
                }`}
                onClick={() => setFontBold("600")}
              >
                Semi-Bold
              </div>
              <div
                className={`px-3 py-2 rounded cursor-pointer font-bold ${
                  fontBold === "700" && "bg-slate-300 text-slate-950 "
                }`}
                onClick={() => setFontBold("700")}
              >
                Bold
              </div>
            </div>
          </div>
        )}

        {editorPage === 1 && (
          <div className="h-full flex flex-col items-center space-y-3 py-3">
            <div
              className="w-48 h-10 rounded cursor-pointer"
              style={{ backgroundColor: textColor }}
            ></div>
            <TwitterPicker
              color={textColor}
              style={{ background: "transparent!important" }}
              onChangeComplete={(color) => setTextColor(color.hex)}
              colors={TextColors}
            />
          </div>
        )}

        {editorPage === 2 && (
          <div className="h-full flex flex-col items-center space-y-3 py-3">
            <div
              className="w-48 h-10 rounded cursor-pointer"
              style={{ backgroundColor: bgColor }}
            >
              {bgColor === "transparent" && (
                <div className="w-full text-center text-slate-300">
                  Transparent
                </div>
              )}
            </div>
            <TwitterPicker
              color={bgColor}
              style={{ background: "transparent!important" }}
              onChangeComplete={(color) => setBgColor(color.hex)}
              colors={BackgroundColors}
            />
          </div>
        )}

        {editorPage === 3 && (
          <div className="flex justify-center items-center space-x-3">
            <div
              className={`px-3 py-2 rounded cursor-pointer text-[18px] ${
                textSize === "18" && "bg-slate-300 text-slate-950"
              }`}
              onClick={() => setTextSize("18")}
            >
              Small
            </div>
            <div
              className={`px-3 py-2 rounded cursor-pointer text-[24px] ${
                textSize === "24" && "bg-slate-300 text-slate-950"
              }`}
              onClick={() => setTextSize("24")}
            >
              Medium
            </div>
            <div
              className={`px-3 py-2 rounded cursor-pointer text-[32px] ${
                textSize === "32" && "bg-slate-300 text-slate-950"
              }`}
              onClick={() => setTextSize("32")}
            >
              Large
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleEditor;