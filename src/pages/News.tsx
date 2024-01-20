import { Divider } from "@mui/material";
import NewsOptions from "../components/Features/NewsOptions";
import ShowNews from "../components/ShowNews";

interface Iprops {
  isAdmin: boolean;
}

export default function News({ isAdmin }: Iprops) {
  return (
    <div className="w-full z-0">
      <NewsOptions isAdmin={isAdmin} />
      <Divider sx={{ margin: "30px 0 50px 0" }} />
      <ShowNews isAdmin={isAdmin} />
    </div>
  );
}
