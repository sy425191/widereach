const FileSelectAdd = () => {
  return (
    <div className="w-20 h-28 text-4xl text-slate-400 bg-slate-900/80 z-20 flex justify-center items-center border-2 border-slate-400 rounded-lg group-hover:scale-110 group-hover:text-purple-800 group-hover:border-purple-800 duration-200">
      <i className="fa fa-plus"></i>
    </div>
  );
};

const FileSelectPlay = () => {
  return (
    <div className="w-20 h-28 -rotate-12 text-4xl text-slate-400 bg-slate-900/80 flex justify-center items-center border-2 border-slate-400 rounded-lg group-hover:-rotate-6 group-hover:translate-x-4 group-hover:text-purple-800 group-hover:border-purple-800 duration-300">
      <i className="fa fa-play"></i>
    </div>
  );
};

const FileSelectPause = () => {
  return (
    <div className="w-20 h-28 rotate-12 text-4xl text-slate-400 bg-slate-900/80 z-20 flex justify-center items-center border-2 border-slate-400 rounded-lg group-hover:rotate-6 group-hover:-translate-x-4 group-hover:text-purple-800 group-hover:border-purple-800 duration-500">
      <i className="fa fa-pause"></i>
    </div>
  );
};

export { FileSelectAdd, FileSelectPlay, FileSelectPause };
