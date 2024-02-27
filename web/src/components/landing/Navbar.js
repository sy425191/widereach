import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <div className="w-full flex justify-center pb-10">
      <div className="w-full flex gap-x-3 justify-between items-center sticky-top-0 rounded bg-slate-800 font-semibold text-slate-300 py-2">
        <div>
          <Link
            to="/"
            className="px-2 py-2 rounded duration-100 font-bold text-2xl flex gap-x-1
        tracking-wider mx-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent
        "
          >
            <img src="/widereach-nobg.png" alt="Widereach" className="h-8" />
            Widereach
          </Link>
        </div>
        <div className="flex md:gap-x-8 md:px-4">
          <Link
            to="about"
            className="px-2 py-2 rounded duration-100 hover:bg-slate-300 hover:text-slate-900"
          >
            About
          </Link>
          <Link
            to="#pricing"
            className="relative px-2 mr-5 py-2 rounded duration-100 hover:bg-slate-300 hover:text-slate-900"
          >
            API
            <div className="absolute -top-1 -right-1 text-xs font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Pro
            </div>
          </Link>
          <Link
            to="/auth"
            className="px-4 py-2 text-slate-100 rounded duration-100 bg-gradient-to-r from-amber-500 to-pink-500 hover:bg-slate-300 hover:text-slate-900"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
