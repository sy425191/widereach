import VideoCardSeach from "../components/dashboard/myVideos/videoCard";

const MyVideosPage = () => {
  return (
    <div className="w-full h-full relative overflow-x-hidden">
      <div className="flex justify-center gap-x-0 shadow-b-3xl">
        <input
          type="text"
          className="w-1/2 px-6 py-3 text-sm bg-transparent outline-none border-2 border-purple-600 rounded-l-xl text-slate-200 placeholder:text-purple-800"
          placeholder="Video Name..."
        />
        <button className="flex justify-center items-center bg-purple-600 px-4 rounded-r-xl">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="mt-8">
        <div className="text-lg text-slate-400 font-bold">Recent Videos</div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <VideoCardSeach />
          <VideoCardSeach />
          <VideoCardSeach />
          <VideoCardSeach />
          <VideoCardSeach />
          <VideoCardSeach />
          <VideoCardSeach />
          <VideoCardSeach />
          <VideoCardSeach />
        </div>
      </div>
    </div>
  );
};

export default MyVideosPage;
