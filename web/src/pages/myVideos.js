const MyVideosPage = () => {
  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <div className="flex justify-center gap-x-0">
        <input
          type="text"
          className="w-96 px-4 py-3 text-sm bg-transparent outline-none border-2 border-slate-600 rounded-l-xl"
          placeholder="Video Name..."
        />
        <button className="flex justify-center items-center bg-slate-600 px-4 rounded-r-xl">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default MyVideosPage;
