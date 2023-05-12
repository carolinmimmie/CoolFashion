import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DenseMenu from "./DenseMenu";
import { TextFormat } from "@material-ui/icons";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [isHovering, setIsHovering] = React.useState<Boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsHovering(false);
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  return (
    <div>
      <Button
        sx={{ color: "white", textTransform: "none", fontSize: "16px" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Produkter
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
        <MenuItem onMouseOver={handleMouseOver}>Link</MenuItem>
        {isHovering && (
          <div>
            <DenseMenu></DenseMenu>
          </div>
        )}
      </Menu>
    </div>
  );
}
