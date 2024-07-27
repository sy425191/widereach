import { useContext, useState } from "react";
import { EditorContext } from "../../context/editorContext";
import { BackgroundColors, TextColors } from "./colorConstants";
import Select from "react-select";
import MagicPageSelect from "../../utils/reactSelectStyle";
import { FontFamilies } from "../../utils/constants";
import { ColorSelect } from "./colorSelect";

const StyleEditor = () => {
  const [styleEditorTab, setStyleEditorTab] = useState(1);
  const editorContext = useContext(EditorContext);

  return (
    <div className="w-64 rounded bg-slate-900 h-full flex flex-col justify-start items-center gap-y-4">
      <div className="w-full rounded text-sm font-bold text-slate-200 bg-slate-800 flex pb-1 border-b-2 border-pink-800">
        <div
          className="px-3 py-1 cursor-pointer hover:underline"
          style={
            styleEditorTab === 1 ? { color: "#f0f0f0" } : { color: "#a0a0a0" }
          }
          onClick={() => setStyleEditorTab(1)}
        >
          Subtitle
        </div>
        <div
          className="px-3 py-1 cursor-pointer hover:underline"
          style={
            styleEditorTab === 0 ? { color: "#f0f0f0" } : { color: "#a0a0a0" }
          }
          onClick={() => setStyleEditorTab(0)}
        >
          Edit
        </div>
      </div>

      <div className="w-full max-h-full overflow-y-auto flex flex-col gap-y-2 px-2 pt-2">
        {styleEditorTab === 0 && (
          <div className="w-full flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-2 text-dm text-slate-300">
              <div className="text-slate-400 text-xs">Font</div>

              <div className="flex w-full gap-x-2">
                <ColorSelect
                  color={editorContext.textColor}
                  setColor={editorContext.setTextColor}
                  colorsList={TextColors}
                />
                <Select
                  className="flex-1"
                  value={editorContext.fontFamily}
                  styles={MagicPageSelect}
                  onChange={(option) => editorContext.setFontFamily(option)}
                  options={FontFamilies}
                  menuPortalTarget={document.body}
                />
              </div>

              <div className="flex items-center gap-x-2">
                <div
                  className={`px-2 py-1 bg-slate-800 text-slate-300 rounded cursor-pointer
                  ${
                    editorContext.textSize === 12
                      ? "bg-pink-800"
                      : "hover:bg-pink-800"
                  }`}
                  style={{ fontSize: "12px" }}
                  onClick={() => editorContext.setTextSize(12)}
                >
                  A
                </div>
                <div
                  className={`px-2 py-0.5 bg-slate-800 text-slate-300 rounded cursor-pointer
                  ${
                    editorContext.textSize === 16
                      ? "bg-pink-800"
                      : "hover:bg-pink-800"
                  }`}
                  style={{ fontSize: "16px" }}
                  onClick={() => editorContext.setTextSize(16)}
                >
                  A
                </div>

                <div
                  className={`px-2 bg-slate-800 text-slate-300 rounded cursor-pointer
                  ${
                    editorContext.textSize === 20
                      ? "bg-pink-800"
                      : "hover:bg-pink-800"
                  }`}
                  style={{ fontSize: "20px" }}
                  onClick={() => editorContext.setTextSize(20)}
                >
                  A
                </div>

                <div
                  className={`px-2 bg-slate-800 text-slate-300 rounded cursor-pointer 
                  ${
                    editorContext.textSize === 24
                      ? "bg-pink-800"
                      : "hover:bg-pink-800"
                  }`}
                  style={{ fontSize: "24px" }}
                  onClick={() => editorContext.setTextSize(24)}
                >
                  A
                </div>

                <div className="h-full border-l-2 border-slate-800"></div>

                <div
                  className={`px-2 bg-slate-800 text-slate-300 rounded cursor-pointer ${
                    editorContext.fontBold === "normal"
                      ? "bg-pink-800"
                      : "hover:bg-pink-800"
                  }`}
                  onClick={() => editorContext.setFontBold("normal")}
                >
                  B
                </div>

                <div
                  className={`px-2 bg-slate-800 text-slate-300 font-bold rounded cursor-pointer ${
                    editorContext.fontBold === "bold"
                      ? "bg-pink-800"
                      : "hover:bg-pink-800"
                  }`}
                  onClick={() => editorContext.setFontBold("bold")}
                >
                  B
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-dm text-slate-300">
              <div className="text-slate-400 text-xs">Border</div>

              <div className="flex items-center gap-x-2">
                {/* border size- select box */}
                <select
                  value={editorContext.border}
                  onChange={(e) => editorContext.setBorder(e.target.value)}
                  className="px-2 py-1 bg-slate-800 text-slate-300 rounded"
                >
                  <option value="none">None</option>
                  <option value="1px solid #000">1px</option>
                  <option value="2px solid #000">2px</option>
                  <option value="3px solid #000">3px</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 text-dm text-slate-300">
              <div className="text-slate-400 text-xs">Color</div>
              <div className="flex items-center gap-x-2">
                {/* Color boxes - Text, Background, Outline */}
                {BackgroundColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-slate-800 rounded cursor-pointer flex justify-center items-center border-2 border-slate-800"
                    style={{ backgroundColor: color }}
                    onClick={() => editorContext.setBgColor(color)}
                  >
                    B
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {styleEditorTab === 1 &&
            editorContext.subtitle?.map((sub, index) => (
              <div
                key={index}
                className="border-2 border-slate-800 px-1 text-slate-300 rounded-lg cursor-pointer hover:border-purple-800 hover:bg-purple-800 hover:shadow-md"
                onClick={() => {
                  if (!editorContext.videoPlayerRef.current) return;
                  if (editorContext.videoPlayerRef.current.isPlaying) {
                    editorContext.videoPlayerRef.current.pause();
                  }
                  editorContext.videoPlayerRef.current.currentTime =
                    sub.start / 1000;
                }}
              >
                <div className="text-sm">{sub.text.replace(/<\/?b>/g, "")}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StyleEditor;
