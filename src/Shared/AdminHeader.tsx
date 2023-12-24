import { NavLink } from "react-router-dom";

export default function AdminHeader() {
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
        <button className="py-3">Logout</button>
      </div>
    </nav>
  );
}
