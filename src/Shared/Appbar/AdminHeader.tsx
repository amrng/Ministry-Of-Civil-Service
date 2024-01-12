import { NavLink, useNavigate } from "react-router-dom";
import { deleteCookie } from "../../App/cookies";
import MinstryLogo from "../../assets/Logos/MinistryLogo";
import MinstryText from "../../assets/Logos/MinistryText";
import { Box, ListItem, useMediaQuery, useTheme } from "@mui/material";
import {
  AppBarContainer,
  BottomBar,
  Language,
  Logo,
  LogoutButton,
  Routes,
} from "../Styles/AppStyles";
import Lang from "../../components/Features/Lang";

export default function AdminHeader() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const logOut = () => {
    deleteCookie("admin-token");
    navigate("/admin/control/login");
  };

  if (matches)
    return (
      <>
        <AppBarContainer sx={{ height: "50px" }}>
          <Logo>
            <MinstryLogo width="40px" />
            <MinstryText width="140px" />
          </Logo>
        </AppBarContainer>
        <BottomBar>
          <Routes sx={{ fontSize: 14 }}>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={"all-news"}>News</NavLink>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={"all-activities"}>Activities</NavLink>
            </ListItem>
          </Routes>

          <Language>
            <Lang />
          </Language>

          <Box sx={{ flexGrow: 1 }}>
            <LogoutButton
              sx={{ padding: "2px 4px", fontSize: 14 }}
              onClick={() => logOut()}>
              Logout
            </LogoutButton>
          </Box>
        </BottomBar>
      </>
    );

  return (
    <AppBarContainer>
      <Logo>
        <MinstryLogo width="60px" />
        <MinstryText width="160px" />
      </Logo>

      <Routes>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <NavLink to={"all-news"}>News</NavLink>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          <NavLink to={"all-activities"}>Activities</NavLink>
        </ListItem>
      </Routes>

      <Language>
        <Lang />
      </Language>

      <Box sx={{ flexGrow: 1 }}>
        <LogoutButton onClick={() => logOut()}>Logout</LogoutButton>
      </Box>
    </AppBarContainer>
  );
}
