import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import * as React from "react";
import SideNavList from "./SideNavList";

export default function PermanentDrawer() {
  return (
    <Drawer variant="permanent" sx={{
      width: '256px',
      flexShrink: 0,
      display: {
        xs: 'none',
        md: 'inline-flex'
      }
    }}>
      <Toolbar/>
      <Box sx={{
        width: 256, overflow: 'auto'
      }}>
        <SideNavList/>
      </Box>
    </Drawer>
  );
}
