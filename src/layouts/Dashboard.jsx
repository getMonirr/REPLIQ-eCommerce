import { FaHome } from "react-icons/fa";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-rq-primary text-white p-6 text-center text-3xl">
        Admin Dashboard
      </div>
      <div className="flex">
        <div className="min-h-[calc(100vh-90px)] w-[250px] flex items-center flex-col justify-between py-4 border-r-2 bg-slate-100">
          <div className="flex justify-center items-center min-h-[88px]">
            <h1 className="font-bold text-2xl">REPLIQ</h1>
          </div>
          <div className="divider"></div>
          <div>
            <Sidebar />
          </div>
          <div className="divider"></div>
          <div>
            <NavLink to="/">
              <button className="btn w-full justify-start">
                <FaHome size={25} />
                Go Home
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
