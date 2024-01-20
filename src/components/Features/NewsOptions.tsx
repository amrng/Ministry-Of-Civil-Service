import { Options } from "../../Shared/Styles/AppStyles";
import CreateNews from "./CreateNews";
import Searcher from "./Search";
import SortBy from "./SortBy";

interface Iprops {
  isAdmin: boolean;
}

export default function NewsOptions({ isAdmin }: Iprops) {
  return (
    <Options>
      <Searcher />
      <SortBy />
      {isAdmin ? <CreateNews /> : null}
    </Options>
  );
}
