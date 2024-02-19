import "../css/dashboard.css";
import DashboardSidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="h-full w-60">
        <DashboardSidebar />
      </div>
      <div className="h-full w-full flex-1 overflow-y-auto p-3">
        <Outlet />
      </div> 
    </div>
  );
};

export default Dashboard;
