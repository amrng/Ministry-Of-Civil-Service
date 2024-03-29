import { Outlet } from "react-router-dom";
import Header from "../../components/Appbar/UserHeader";

export default function Layout() {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="my-24 mx-10 lg:mx-52 md:mx-28">
        <Outlet />
      </div>
    </>
  );
}
