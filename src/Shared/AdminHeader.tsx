import { NavLink, useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const navigate = useNavigate();
  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const logOut = () => {
    deleteCookie("admin-token");
    navigate("/admin/control/login");
  };

  return (
    <nav
      className="shadow-lg w-full text-white bg-slate-800 p-4 sm:space-x-8 space-x-6 flex flex-wrap justify-evenly items-center
     rounded-b-xl">
      <div className="text-lg hover:text-[#CEA672] font-medium">
        <NavLink className="py-2" to={"create-news"}>
          All News
        </NavLink>
      </div>
      <div className="text-lg hover:text-[#CEA672] font-medium">
        <NavLink className="py-2" to={"all-news"}>
          Create New
        </NavLink>
      </div>
      <div className="text-lg hover:text-[#CEA672] font-medium">
        <NavLink className="py-2" to={"kofta-news"}>
          Kofta
        </NavLink>
      </div>
      <div className="text-lg hover:text-[#CEA672] font-medium">
        <NavLink className="py-2" to={"login"}>
          Login
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
