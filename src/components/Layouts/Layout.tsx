import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header";

export default function Layout() {
  return (
    <>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="mt-32 mb-24 mx-10 lg:mx-52 md:mx-28">
        <Outlet />
      </div>
    </>
  );
}
