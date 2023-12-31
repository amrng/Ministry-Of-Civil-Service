import { Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader";

export default function AdminLayout() {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <AdminHeader />
      </div>
      <div className="mt-32 mb-24 mx-10 lg:mx-52 md:mx-28 z-50">
        <Outlet />
      </div>
    </div>
  );
}
