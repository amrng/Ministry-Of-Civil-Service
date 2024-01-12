import { Box, Button, List, styled } from "@mui/material";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#013756",
  color: "white",
  height: "70px",
}));

export const Logo = styled(Box)(() => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 3,
}));

export const Routes = styled(List)(() => ({
  flexGrow: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 20,
}));

export const Language = styled(List)(() => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 20,
}));

export const BottomBar = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#013756",
  color: "white",
  height: "50px",
  padding: "10px 0px",
}));

export const LogoutButton = styled(Button)(() => ({
  color: "#013756",
  backgroundColor: "#F4EEE3",
  ":hover": {
    backgroundColor: "#CEA672",
    color: "#F4EEE3",
  },
  borderRadius: "16px",
  padding: "6px 15px",
  fontSize: 16,
}));

export const Options = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 10,
}));

export const AppButton = styled(Button)(() => ({
  color: "#013756",
  backgroundColor: "#F4EEE3",
  ":hover": {
    boxShadow: "0px 0px 10px 2px #013756",
  },
  borderRadius: "16px",
  padding: "6px 15px",
  fontSize: 16,
}));

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
