import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "@mui/material";

export default function NavBar({toggleDrawer, sidebar}) {

  return (
    <AppBar position="fixed" sx={{
      zIndex: (theme => theme.zIndex.drawer + 1)
    }}>
      <Toolbar>
        <IconButton edge="start" sx={{
          mr: 2,
          display: {
            xs: 'inline-flex',
            md: 'none'
          }
        }} color="inherit" aria-label="menu" onClick={toggleDrawer(!sidebar)}>
          <MenuIcon/>
        </IconButton>
        <Link href="#" variant="h5" color="inherit" underline="none">
          {/*<img src="mui-assets/img/logo-pied-piper-white.png" alt="" width="120" />*/}
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            TPGen
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
