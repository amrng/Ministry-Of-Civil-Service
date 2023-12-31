import ShowAsAdmin from "./ShowAsAdmin";
import ShowAsUser from "./ShowAsUser";

interface Iprops {
  isAdmin: boolean;
}

export default function ShowNews({ isAdmin }: Iprops) {
  if (isAdmin) {
    return <ShowAsAdmin />;
  }

  return <ShowAsUser />;
}
