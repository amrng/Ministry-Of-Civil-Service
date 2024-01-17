import { NavLink } from "react-router-dom";
import MinstryLogo from "../../assets/Logos/MinistryLogo";
import MinstryText from "../../assets/Logos/MinistryText";
import { ListItem, useMediaQuery, useTheme } from "@mui/material";
import {
  AppBarContainer,
  BottomBar,
  Language,
  Logo,
  Routes,
} from "../../Shared/Styles/AppStyles";
import Lang from "../Features/Lang";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
              <NavLink to={"news"}>News</NavLink>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={"activities"}>Activities</NavLink>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={"about"}>About</NavLink>
            </ListItem>
          </Routes>

          <Language>
            <Lang />
          </Language>
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
        <ListItem>
          <NavLink to={"news"}>News</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"activities"}>Activities</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"about"}>About</NavLink>
        </ListItem>
      </Routes>

      <Language>
        <Lang />
      </Language>
    </AppBarContainer>
  );
}
