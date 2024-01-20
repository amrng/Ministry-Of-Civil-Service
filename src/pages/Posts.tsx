import { Divider } from "@mui/material";
import PostOptions from "../components/Features/PostOptions";
import ShowPosts from "../components/ShowPosts";

interface Iprops {
  isAdmin: boolean;
}

export default function Post({ isAdmin }: Iprops) {
  return (
    <div className="w-full z-0">
      <PostOptions isAdmin={isAdmin} />
      <Divider sx={{ margin: "30px 0 50px 0" }} />
      <ShowPosts isAdmin={isAdmin} category={"news"} />
    </div>
  );
}
