import Select from "react-select";
import { languageOptions } from "../../utils/languageOptions.js";
import MagicPageSelect from "../../utils/reactSelectStyle.js";

const MultiStepForm = ({
  multiSelectFormPage,
  setMultiSelectFormPage,
  selectedVideo,
  setSelectedVideo,
  selectedLanguage,
  setSelectedLanguage,
  shouldTranslate,
  setShouldTranslate,
  translationLanguage,
  setTranslationLanguage,
  inputRef,
  handleSubmit,
}) => {
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center space-y-4 ${
        multiSelectFormPage >= 3 && "hidden"
      }`}
    >
      <div className="flex flex-col justify-center items-center space-y-4 relative">
        <div
          className="absolute text-slate-300 bg-slate-900 font-semibold min-w-96 min-h-36 cursor-pointer flex justify-center items-center rounded
              transition-all duration-300 ease-in-out transform hover:scale-105
              overflow-hidden transition-all duration-300 ease-in-out transform scale-0 origin-top"
          style={{
            transform: multiSelectFormPage === 0 ? "scale(1)" : "scale(0)",
          }}
          onClick={() => inputRef.current.click()}
        >
          <input
            type="file"
            accept="video/*"
            className="hidden"
            ref={inputRef}
            onChange={(e) => {
              setSelectedVideo(e.target.files[0]);
            }}
          />
          {selectedVideo ? (
            <div className="">
              {selectedVideo.name.length > 20
                ? selectedVideo.name.slice(0, 20) + "..."
                : selectedVideo.name}
              <i className="fa fa-check ml-2"></i>
            </div>
          ) : (
            <div className="">
              Select Video
              <i className="fa fa-upload ml-2"></i>
            </div>
          )}
        </div>

        <div
          className="absolute text-slate-300 bg-slate-900 font-semibold min-w-96 h-36 flex flex-col justify-evenly items-center rounded
            overflow-hidden transition-all duration-300 ease-in-out transform scale-0 origin-top"
          style={{
            transform: multiSelectFormPage === 1 ? "scale(1)" : "scale(0)",
          }}
        >
          <div className="text-sm flex justify-center items-center">
            Select Language
          </div>
          <Select
            options={languageOptions}
            className="w-3/4 bg-slate-900"
            styles={MagicPageSelect}
            value={selectedLanguage}
            onChange={(option) => setSelectedLanguage(option)}
            menuPortalTarget={document.body}
          />

          <div className="flex items-center space-x-3 mt-3">
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={shouldTranslate}
              onChange={() => setShouldTranslate((prev) => !prev)}
            />
            <div
              className="text-slate-300 select-none cursor-pointer"
              onClick={() => setShouldTranslate((prev) => !prev)}
            >
              Auto Translate Subtitles
            </div>
          </div>
        </div>

        <div
          className="absolute text-slate-300 bg-slate-900 font-semibold min-w-96 h-36 flex flex-col justify-evenly items-center rounded
          overflow-hidden transition-all duration-300 ease-in-out transform scale-0 origin-top"
          style={{
            transform: multiSelectFormPage === 2 ? "scale(1)" : "scale(0)",
          }}
        >
          <div className="text-sm flex justify-center items-center">
            Select Translation Language
          </div>
          <Select
            options={languageOptions}
            className="w-3/4 bg-slate-900"
            styles={MagicPageSelect}
            value={translationLanguage}
            onChange={(option) => setTranslationLanguage(option)}
            menuPortalTarget={document.body}
          />
        </div>
      </div>

      <div className="absolute bottom-1/4 flex space-x-3 justify-end min-w-96">
        <button
          className={`px-3 py-2 bg-slate-700 text-slate-200 rounded cursor-pointer ${
            multiSelectFormPage === 0 && "bg-slate-900 text-slate-500"
          } `}
          onClick={() => {
            if (multiSelectFormPage === 0) return;
            if (multiSelectFormPage === 1) {
              setSelectedVideo(null);
            }
            if (multiSelectFormPage === 2) {
              setShouldTranslate(false);
            }
            setMultiSelectFormPage((prevValue) => prevValue - 1);
          }}
        >
          <i className="fa fa-chevron-up"></i>
        </button>
        <button
          className="px-3 py-2 bg-slate-700 text-slate-200 rounded cursor-pointer"
          onClick={() => {
            if (multiSelectFormPage === 0) {
              if (!selectedVideo) return;
              else setMultiSelectFormPage(1);
            } else if (multiSelectFormPage === 1) {
              if (shouldTranslate) setMultiSelectFormPage(2);
              else handleSubmit();
            } else if (multiSelectFormPage === 2) {
              handleSubmit();
            }
          }}
        >
          <i className="fa fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
