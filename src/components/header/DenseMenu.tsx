import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Link</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Link</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Link</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>{/* <Check /> */}</ListItemIcon>
          Link
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Link</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Link</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Link</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
