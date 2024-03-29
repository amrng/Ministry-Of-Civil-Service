import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "16px",
    minWidth: 120,
    color: "#013756",
    backgroundColor: "#F9F6F0",
    "&hover": {
      backgroundColor: alpha("#CEA672", 0.1),
    },
    marginTop: "10px",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#CEA672",
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.light,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function SortBy() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        sx={{
          borderRadius: "16px",
          color: "#013756",
          border: "1px solid #013756",
          padding: "8px 14px",
          backgroundColor: alpha("#CEA672", 0.1),
          "&:hover": {
            backgroundColor: alpha("#CEA672", 0.15),
            border: "1px solid #013756",
          },
        }}
        id="sortByButton"
        aria-controls={open ? "sortBy" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}>
        Sort By
      </Button>
      <StyledMenu
        id="sortBy"
        MenuListProps={{
          "aria-labelledby": "sortByButton",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          Oldest
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Newest
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
