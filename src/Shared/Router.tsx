import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import News from "../pages/News";
import PublicActivity from "../pages/PublicActivity";
import About from "../pages/About";
import NewsDetails from "../pages/newsDetails";

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
]);

export default router;
