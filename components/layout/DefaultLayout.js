import {ThemeProvider, Toolbar} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import NavBar from "./NavBar";
import TemporaryDrawer from "./TemporaryDrawer";
import PermanentDrawer from "./PermanentDrawer";
import CustomTheme from "../theme/CustomTheme";

export default function DefaultLayout({children}) {
  const [sidebar, setSidebar] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setSidebar(open);
  };

  return (
    <ThemeProvider theme={CustomTheme}>
      <div style={{display: 'flex'}}>
        <NavBar toggleDrawer={toggleDrawer} sidebar={sidebar} />
        <PermanentDrawer />
        <TemporaryDrawer toggleDrawer={toggleDrawer} sidebar={sidebar} />

        <main style={{
          flexGrow: 1,
          padding: '24px'
        }}>
          <Toolbar/>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}