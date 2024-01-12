import { Options } from "../../Shared/Styles/AppStyles";
import CreateNews from "./CreateNews";
import Searcher from "./Search";
import SortBy from "./SortBy";

export default function NewsOptions() {
  return (
    <Options>
      <Searcher />
      <SortBy />
      <CreateNews />
    </Options>
  );
}
