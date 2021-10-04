import {Box, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import * as React from "react";

export default function TemporaryDrawer({toggleDrawer, sidebar}) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={sidebar}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}>
      <Toolbar/>
      <Box sx={{
        width: 256, overflow: 'auto'
      }}
           onClick={toggleDrawer(false)}
           onKeyDown={toggleDrawer(false)}>
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
    </SwipeableDrawer>
  )
}