import { Divider } from "@mui/material";
import NewsOptions from "../components/Features/NewsOptions";
import ShowNews from "../components/ShowNews";

export default function News() {
  return (
    <div className="w-full z-0">
      <NewsOptions />
      <Divider sx={{ margin: "30px 0 50px 0" }} />
      <ShowNews isAdmin={true} />
    </div>
  );
}
