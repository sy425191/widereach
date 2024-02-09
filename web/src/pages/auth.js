import { Link, Outlet } from "react-router-dom";

const AuthScreen = () => {
  return (
    <div className="w-full h-screen flex py-3">
      <div className="h-full flex flex-col items-center space-y-4 w-1/3 border-r-2 border-slate-900">
        <div className="w-full px-2 mb-8">
          <Link
            to="/"
            className="size-8 bg-slate-700 flex justify-center items-center rounded cursor-pointer duration-300 hover:bg-slate-300 hover:text-slate-950"
          >
            <i className="fa fa-home"></i>
          </Link>
        </div>

        <Outlet />
        <div className="flex-1 flex flex-col justify-end text-xs text-slate-500">
          &copy; 2024-25 | All Rights Reserved | Privacy Policy
        </div>
      </div>
      <div className="flex-1 flex "></div>
    </div>
  );
};

export default AuthScreen;
