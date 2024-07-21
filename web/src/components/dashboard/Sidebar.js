import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-2 py-4">
      <div className="w-full relative">
        <div className="text-slate-200 bg-slate-900 rounded px-1 py-2 flex justify-between items-center">
          <div className="size-8 rounded">
            <img src="widereach-nobg.png" alt="Widereach Logo" />
          </div>
          <div className="flex-1 px-3">
            <div className="text-sm font-semibold">Widereach</div>
            <div className="text-xs text-slate-300">Creator Dashboard</div>
          </div>
          <div
            className={`size-8 rounded duration-200 flex justify-center items-center cursor-pointer hover:bg-slate-700 ${
              isDropDownOpen ? "rotate-180 bg-slate-700" : ""
            }`}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>

        <div
          className="absolute flex flex-col bg-slate-800 top-12 right-0 w-full bg-slate-900 rounded shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform scale-0 origin-top"
          style={{ transform: isDropDownOpen ? "scale(1)" : "scale(0)" }}
        >
          <Link
            to="/dashboard/plan"
            className="w-full bg-slate-800 px-3 py-2 rounded text-sm text-slate-300"
          >
            Plan & Billing
          </Link>
          <Link
            to="/dashboard/settings"
            className="w-full bg-slate-800 px-3 py-2 rounded text-sm text-slate-300"
          >
            Settings
          </Link>
          <Link
            to="/dashboard/help"
            className="w-full bg-slate-800 px-3 py-2 rounded text-sm text-slate-300"
          >
            Help
          </Link>
          <Link
            to="/"
            className="w-full bg-slate-800 px-3 py-2 rounded text-sm text-slate-300"
          >
            Logout
          </Link>
        </div>

        <div className="flex flex-col w-full mt-4 space-y-2">
          <NavLink
            end
            to={"/dashboard"}
            className={({ isActive }) =>
              "flex justify-between items-center px-1 py-4 mt-3 rounded cursor-pointer " +
              (isActive ? "bg-slate-600" : "bg-slate-900")
            }
          >
            <div className="size-8 flex justify-center items-center rounded">
              <i className="fa fa-plus"></i>
            </div>
            <div className="flex-1 px-3 text-sm font-semibold text-slate-200">
              Magic Center
            </div>
          </NavLink>

          <NavLink
            to={"/dashboard/videos"}
            className={({ isActive }) =>
              "flex justify-between items-center px-1 py-2 rounded cursor-pointer " +
              (isActive ? "bg-slate-600" : "bg-slate-900")
            }
          >
            <div className="size-8 flex justify-center items-center rounded">
              <i className="fa fa-cube"></i>
            </div>
            <div className="flex-1 px-3 text-sm font-semibold text-slate-300">
              Your Videos
            </div>
          </NavLink>
          <NavLink
            to={"/dashboard/plan"}
            className={({ isActive }) =>
              "flex justify-between items-center px-1 py-2 rounded cursor-pointer " +
              (isActive ? "bg-slate-600" : "bg-slate-900")
            }
          >
            <div className="size-8 flex justify-center items-center rounded">
              <i className="fa fa-credit-card"></i>
            </div>
            <div className="flex-1 px-3 text-sm font-semibold text-slate-300">
              Plan & Billing
            </div>
          </NavLink>
        </div>
      </div>

      <div className="w-full h-28 bg-slate-900 text-slate-300 rounded flex flex-col justify-evenly items-center gap-y-2">
        <div className="flex-1">

        </div>
        <div className="w-full h-12 border-2 border-slate-800/50 flex items-center justify-between rounded">
          <img
            src="widereach-nobg.png"
            alt="Widereach Logo"
            className="size-8 rounded-full"
          />
          <div className="flex-1 px-3">
            <div className="text-sm font-semibold">Saurabh Yadav</div>
            <div className="text-xs">Free Plan</div>
          </div>
          <div className="size-8 rounded-full cursor-pointer flex justify-center items-center">
            <i className="fa fa-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
