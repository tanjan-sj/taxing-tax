import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import * as React from "react";

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
        <List>
          <ListItem button key="Features">
            <ListItemIcon>
              <AppsIcon/>
            </ListItemIcon>
            <ListItemText primary="Features"/>
          </ListItem>
          <ListItem button key="Enterprise">
            <ListItemIcon>
              <BusinessCenterIcon/>
            </ListItemIcon>
            <ListItemText primary="Enterprise"/>
          </ListItem>
          <ListItem button key="Support">
            <ListItemIcon>
              <LiveHelpIcon/>
            </ListItemIcon>
            <ListItemText primary="Support"/>
          </ListItem>
          <ListItem button key="ICO">
            <ListItemIcon>
              <AttachMoneyIcon/>
            </ListItemIcon>
            <ListItemText primary="ICO"/>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
