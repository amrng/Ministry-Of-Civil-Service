import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import News from "../pages/News";
import PublicActivity from "../pages/PublicActivity";
import About from "../pages/About";
import NewsDetails from "../pages/NewsDetails";
import AdminLayout from "./Layouts/AdminLayout";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "news", element: <News /> },
      { path: "news/:title", element: <NewsDetails /> },
      { path: "activities", element: <PublicActivity /> },
      { path: "about", element: <About /> },
      { path: "**", element: <NotFound /> },
    ],
  },

  { path: "/admin/control/login", element: <Login /> },
  {
    path: "/admin/control",
    element: (
      <ProtectedRoutes>
        <AdminLayout />
      </ProtectedRoutes>
    ),
    children: [
      { path: "all-news", element: <News /> },
      { path: "all-activities", element: <PublicActivity /> },
      { path: "**", element: <NotFound /> },
    ],
  },
]);

export default router;
