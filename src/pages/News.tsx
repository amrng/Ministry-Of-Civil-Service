import NewsOptions from "../components/Features/NewsOptions";
import ShowNews from "../components/ShowNews";

export default function News() {
  return (
    <div className="w-full z-0">
      <NewsOptions />
      <ShowNews isAdmin={true} />
    </div>
  );
}
