import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import News from "../pages/News";
import PublicActivity from "../pages/PublicActivity";
import About from "../pages/About";
import NewsDetails from "../pages/NewsDetails";
import AdminLayout from "../components/Layouts/AdminLayout";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "news", element: <News /> },
      { path: "news/:title", element: <NewsDetails /> },
      { path: "activities", element: <PublicActivity /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "/admin/control/login", element: <Login /> },
  {
    path: "/admin/control",
    element: <AdminLayout />,
    children: [
      { path: "create-news", element: <div>Create control</div> },
      { path: "all-news", element: <div>All control</div> },
      { path: "kofta-news", element: <div>Kofta control</div> },
    ],
  },
]);

export default router;
