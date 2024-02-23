import { useState } from "react";

const AccordianBuilder = ({ content }) => {
  const [accordianIdx, setAccordianIdx] = useState(-1);
  return (
    <div className="w-full">
      {content?.map((val, idx) => {
        return (
          <div className={`border border-2 border-t-0 border-slate-800 text-slate-300 px-3 py-4 select-none ${idx === 0 && 'rounded-t-lg border-t-2'}`}>
            <div
              className="flex justify-between text-slate-400 px-2 cursor-pointer"
              onClick={() => {
                if (accordianIdx === idx) {
                  setAccordianIdx(-1);
                } else {
                  setAccordianIdx(idx);
                }
              }}
            >
              <div className="font-semibold">{val?.heading}</div>
              <div className={idx === accordianIdx ? 'rotate-180' : ''}>
                <i className="fa fa-arrow-down"></i>
              </div>
            </div>

            <div
              className={`bg-slate-900 p-2 mt-4 mb-2 rounded transition duration-300 cursor-auto ${
                accordianIdx !== idx && "hidden"
              }`}
            >
              {val?.paragraph}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordianBuilder;
