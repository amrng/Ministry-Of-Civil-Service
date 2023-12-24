import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Iprops {
  children: ReactNode;
}

export default function ProtectedRoutes({ children }: Iprops) {
  const navigate = useNavigate();

  const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  const token = getCookie("admin-token");

  if (token) {
    return <>{children}</>;
  } else {
    navigate("/admin/control/login");
  }
}
