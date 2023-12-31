import CreateNews from "./CreateNews";
import Searcher from "./Search";
import SortBy from "./SortBy";

export default function NewsOptions() {
  return (
    <div className="flex justify-center md:justify-evenly flex-wrap items-center pb-5 border-b-2 mb-10">
      <div>
        <Searcher />
      </div>

      <div>
        <SortBy />
      </div>

      <div>
        <CreateNews />
      </div>
    </div>
  );
}
