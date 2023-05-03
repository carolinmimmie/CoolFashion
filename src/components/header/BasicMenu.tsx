import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DenseMenu from "./DenseMenu";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  // const [hoverAnchorEl, setHoverAnchorEl] = React.useState<null | HTMLElement>(
  //   null
  // );

  const [isHovering, setIsHovering] = React.useState<Boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <Button
        sx={{ color: "white" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Link
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          Link
        </MenuItem>
        {isHovering && (
          <div>
            <DenseMenu
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
            ></DenseMenu>
          </div>
        )}
      </Menu>
    </div>
  );
}
