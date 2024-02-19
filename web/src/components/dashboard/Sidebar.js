import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center px-2 py-4">
      <div className="w-full relative">
        <div className="text-slate-200 bg-slate-900 rounded px-1 py-2 flex justify-between items-center">
          <div className="size-8 bg-slate-950 rounded"></div>
          <div className="flex-1 px-3">
            <div className="text-sm font-semibold">Saurabh's Organi..</div>
            <div className="text-xs text-slate-300">
              Digital Content Creato...
            </div>
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

        <div className="flex flex-col w-full mt-8 space-y-2">
          <NavLink
            end
            to={"/dashboard/calendar"}
            className={({ isActive }) =>
              "flex justify-between items-center px-1 py-2 rounded cursor-pointer " +
              (isActive ? "bg-slate-600" : "bg-slate-900")
            }
          >
            <div className="size-8 flex justify-center items-center rounded">
              <i className="fa fa-calendar"></i>
            </div>
            <div className="flex-1 px-3 text-sm font-semibold text-slate-300">
              Calendar
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

      <div className="w-full h-28 bg-slate-900 text-slate-300 rounded p-3 flex flex-col justify-evenly items-center gap-y-2">
        <div className="font-bold text-xl">Free Plan</div>
        <div className="text-xs">
          {" "}
          <span className="font-bold text-xl">5</span> Credit Left
        </div>
        <div className="bg-rose-950 px-3 py-1 rounded text-xs cursor-pointer">
          Upgrade
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
