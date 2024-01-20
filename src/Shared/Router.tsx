import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Post from "../pages/Posts";
import PublicActivity from "../pages/PublicActivity";
import About from "../pages/About";
import PostDetails from "../pages/PostDetails";
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
      { path: "news", element: <Post isAdmin={false} /> },
      { path: "news/:categorty/:title/:id", element: <PostDetails /> },
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
      { path: "all-news", element: <Post isAdmin={true} /> },
      { path: "all-activities", element: <PublicActivity /> },
      { path: "edit-news/:postId", element: <EditPost /> },
      { path: "**", element: <NotFound /> },
    ],
  },
]);

export default router;
