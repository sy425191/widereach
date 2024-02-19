import { Link } from "react-router-dom";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col space-y-3 relative h-64 w-64 text-slate-300">
      <div className="absolute rotate-12 w-full h-full bg-gradient-to-r from-pink-500 to-violet-500 rounded-t-lg"></div>
      <div className="absolute w-full h-full bg-slate-800 rounded-lg p-4 border-4 border-slate-300">
        <div className="flex justify-between items-center">
          <div
            className="text-lg font-bold
          bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          >
            WIDEREACH
          </div>
          <div className="size-8 bg-slate-900 flex justify-center items-center rounded">
            <i className="fa fa-microchip"></i>
          </div>
        </div>
        <div className="my-2 w-full h-0.5 bg-slate-700" />
        <div className="text-center text-3xl font-bold my-3">{title}</div>
        <div className="text-sm text-slate-400">{description}</div>
        <Link to={"/about"} className="flex w-full text-slate-300 bg-slate-700 hover:bg-slate-600 rounded-lg py-2 justify-center items-center space-x-3 mt-3">
          <div className="font-semibol">Read More</div>
          <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
