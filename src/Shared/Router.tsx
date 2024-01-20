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
import EditPost from "../pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "news", element: <News isAdmin={false} /> },
      { path: "news/:title/:id", element: <NewsDetails /> },
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
      { path: "all-news", element: <News isAdmin={true} /> },
      { path: "all-activities", element: <PublicActivity /> },
      { path: "edit-news/:postId", element: <EditPost /> },
      { path: "**", element: <NotFound /> },
    ],
  },
]);

export default router;
