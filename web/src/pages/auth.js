import { Link, Outlet } from "react-router-dom";
import MouseShadowComponent from "../components/lib/mouseShadow";
import FeatureBox from "../components/auth/featureBox";

const AuthScreen = () => {
  return (
    <div className="w-full h-screen flex py-3 relative overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center space-y-4 w-3/4 border-r-2 border-slate-900">
        <Outlet />
      </div>
      <div className="flex-1 flex flex-col items-center justify-between px-2">
        <div className="select-none">
          <img
            className="w-full -z-10 invert rounded-full shadow-2xl h-32"
            src="/widereach-nobg.png"
            draggable="false"
            alt="WideReach World Map"
          />
        </div>

        <div className="mt-8 w-2/3 text-center flex flex-col justify-center items-center text-lg text-slate-300 font-bold uppercase">
          <span className="">The Only SaaS you need for excelling in </span>
          <span className="text-2xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            short videos
          </span>
        </div>

        <div className="w-full grid grid-cols-2 text-slate-300 gap-y-2 gap-x-2">
          <FeatureBox title={"Create"} />
          <FeatureBox title={"Edit"} />
          <FeatureBox title={"Upload"} />
          <FeatureBox title={"Share"} />
        </div>

        <div className="flex flex-col justify-end text-xs text-slate-500">
          &copy; 2024-25 | All Rights Reserved | Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
