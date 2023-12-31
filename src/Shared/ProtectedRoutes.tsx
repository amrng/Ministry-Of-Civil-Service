import { ReactNode } from "react";
import { getCookie } from "./Functions/cookies";

interface Iprops {
  children: ReactNode;
}

export default function ProtectedRoutes({ children }: Iprops) {
  const token = getCookie("admin-token");

  if (token) {
    return <>{children}</>;
  } else {
    console.log(token);
    window.location.href = "/admin/control/login";
  }
}
