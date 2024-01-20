import { Options } from "../../Shared/Styles/AppStyles";
import CreatePost from "./CreatePost";
import Searcher from "./Search";
import SortBy from "./SortBy";

interface Iprops {
  isAdmin: boolean;
}

export default function PostOptions({ isAdmin }: Iprops) {
  return (
    <Options>
      <Searcher />
      <SortBy />
      {isAdmin ? <CreatePost /> : null}
    </Options>
  );
}
