import { NavLink, useNavigate } from "react-router-dom";
import { deleteCookie } from "./Functions/cookies";

export default function AdminHeader() {
  const navigate = useNavigate();

  const logOut = () => {
    deleteCookie("admin-token");
    navigate("/admin/control/login");
  };

  return (
    <nav
      className="shadow-lg w-full text-white bg-slate-800 p-4 sm:space-x-8 space-x-6 flex flex-wrap justify-evenly items-center
     rounded-b-xl">
      <div className="text-lg hover:text-[#CEA672] font-medium">
        <NavLink className="py-2" to={"all-news"}>
          All News
        </NavLink>
      </div>

      <div className="text-lg hover:text-[#CEA672] font-medium">
        <button onClick={() => logOut()} className="py-3">
          Logout
        </button>
      </div>
    </nav>
  );
}
