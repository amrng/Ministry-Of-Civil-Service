import { NavLink } from "react-router-dom";
import GovLogo from "./Logos/GovLogo";
import MinstryLogo from "./Logos/MinistryLogo";
import MinstryText from "./Logos/MinistryText";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Header() {
  // const [openLang, setOpenLang] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // <nav className="shadow-lg">
    //   <div className="py-3">

    //     {/* Government Logo */}
    //     <div className="hidden sm:flex w-fit">
    //       <div>
    //         <Link to={"/"}>
    //           <GovLogo width="70px" />
    //         </Link>
    //       </div>
    //     </div>

    //     {/* Links */}
    //     <div className="hidden sm:flex gap-6 md:gap-14 h-full">
    //       <div className="text-lg text-black hover:text-[#CEA672] font-medium">
    //         <NavLink className="py-4" to={"/news"}>
    //           News
    //         </NavLink>
    //       </div>
    //       <div className="text-lg text-black hover:text-[#CEA672] font-medium">
    //         <NavLink className="py-4" to={"/activities"}>
    //           Activities
    //         </NavLink>
    //       </div>
    //       <div className="text-lg text-black hover:text-[#CEA672] font-medium">
    //         <NavLink className="py-4" to={"/about"}>
    //           About
    //         </NavLink>
    //       </div>
    //     </div>

    //     {/* Ministry Logo */}
    //     <div>
    //       <Link to={"/"}>
    //         <div>
    //           <MinstryText width="150px" />
    //           <MinstryLogo width="70px" />
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
    <AppBar position="static" elevation={5}>
      <Toolbar disableGutters variant="dense" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Box>
              <GovLogo width="80px" />
            </Box>

            <Stack
              display={"flex"}
              alignItems={"center"}
              direction={"row"}
              justifyContent={"center"}
              gap={4}>
              <Typography
                variant="h5"
                noWrap
                component="p"
                sx={{
                  ml: 5,
                  flexGrow: 1,
                  fontWeight: 400,
                  color: "red",
                }}>
                <NavLink to={"/news"}>News</NavLink>
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="p"
                sx={{
                  ml: 5,
                  flexGrow: 1,
                  fontWeight: 400,
                  color: "red",
                }}>
                <NavLink to={"/activities"}>Activities</NavLink>
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="p"
                sx={{
                  ml: 5,
                  flexGrow: 1,
                  fontWeight: 400,
                  color: "red",
                }}>
                <NavLink to={"/about"}>About</NavLink>
              </Typography>
            </Stack>

            <Box>
              <Button
                variant="outlined"
                color="primary"
                aria-label="Select language"
                aria-controls="menu-appbar"
                onMouseOver={handleOpenNavMenu}>
                Select Language
              </Button>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}>
                <MenuItem>
                  <Typography textAlign="center">English</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Arabic</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Russian</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">French</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Stack
              display={"flex"}
              alignItems={"center"}
              direction={"row"}
              justifyContent={"center"}
              gap={1}>
              <MinstryText width="80px" />
              <MinstryLogo width="80px" />
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
