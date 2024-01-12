import { Outlet } from "react-router-dom";
import Header from "../Appbar/UserHeader";

export default function Layout() {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="my-32 mx-10 lg:mx-52 md:mx-28">
        <Outlet />
      </div>
    </>
  );
}
