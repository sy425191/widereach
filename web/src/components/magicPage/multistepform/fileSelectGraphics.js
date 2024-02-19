const FileSelectAdd = () => {
  return (
    <div className="w-24 h-28 text-5xl text-slate-500 bg-slate-900 z-20 flex justify-center items-center border-2 border-slate-400 rounded-lg group-hover:scale-110 group-hover:text-slate-300 group-hover:border-slate-300 duration-200">
      <i className="fa fa-plus-circle"></i>
    </div>
  );
};

const FileSelectPlay = () => {
  return (
    <div className="w-20 h-28 -rotate-12 text-4xl text-slate-600 bg-slate-900/80 flex justify-center items-center border-2 border-slate-400 rounded-lg -translate-x-3 group-hover:-rotate-6 group-hover:translate-x-6 group-hover:text-slate-300 group-hover:border-slate-300 duration-300">
      <i className="fa fa-play-circle"></i>
    </div>
  );
};

const FileSelectPause = () => {
  return (
    <div className="w-20 h-28 rotate-12 text-4xl text-slate-600 bg-slate-900/80 z-20 flex justify-center items-center border-2 border-slate-400 rounded-lg translate-x-3 group-hover:rotate-6 group-hover:-translate-x-6 group-hover:text-slate-300 group-hover:border-slate-300 duration-500">
      <i className="fa fa-pause-circle"></i>
    </div>
  );
};

export { FileSelectAdd, FileSelectPlay, FileSelectPause };
