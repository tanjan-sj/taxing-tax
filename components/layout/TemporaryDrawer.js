import {Box, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import * as React from "react";
import SideNavList from "./SideNavList";

export default function TemporaryDrawer({toggleDrawer, sidebar}) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={sidebar}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Toolbar/>
      <Box sx={{
        width: 256, overflow: 'auto'
      }}
           onClick={toggleDrawer(false)}
           onKeyDown={toggleDrawer(false)}>
        <SideNavList/>
      </Box>
    </SwipeableDrawer>
  )
}