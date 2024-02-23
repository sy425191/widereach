import { Link, Outlet } from "react-router-dom";
import MouseShadowComponent from "../components/lib/mouseShadow";

const AuthScreen = () => {
  return (
    <div className="w-full h-screen flex py-3 relative overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center space-y-4 w-3/4 border-r-2 border-slate-900">
        <Outlet />
      </div>
      <div className="flex-1 flex flex-col items-center justify-between px-2">
        <div className="mt-8 w-2/3 text-center flex flex-col justify-center items-center text-2xl text-slate-300 font-bold uppercase">
          <span className="">The Only SaaS you need for excelling in </span>
          <span className="text-4xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            short videos
          </span>
        </div>

        <div className="select-none">
          <img
            className="w-full -z-10 invert"
            src="/authbg.png"
            draggable="false"
            alt="WideReach World Map"
          />
        </div>

        <div className="flex flex-col justify-end text-xs text-slate-500">
          &copy; 2024-25 | All Rights Reserved | Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
