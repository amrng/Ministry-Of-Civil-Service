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

export const ImageBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  flexWrap: "wrap",
  gap: 2,
  transition: "0.3s all",
}));

export const ViewImages = styled(Box)(() => ({
  border: "1px solid #013756",
  width: "130px",
  borderRadius: "14px",
  ":hover": { opacity: 0.6, transition: "0.3s all" },
  position: "relative",
  transition: "0.3s all",
}));

export const RemoveImageButton = styled(Button)(() => ({
  position: "absolute",
  top: "0",
  right: "0",
  width: "100%",
  height: "100%",
  opacity: 0,
  ":hover": { opacity: 1, transition: "0.3s all" },
  transition: "0.3s all",
}));
