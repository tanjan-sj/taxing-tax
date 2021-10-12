import {TextField} from "@mui/material";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

export default function BaseTextField({type}) {
  if (type === 'outlined') {
    return (
      <TextField size="small" id="name" placeholder="Name" variant="outlined" autoComplete="name" fullWidth/>
    )
  } else if (type === 'filled') {
    return (
      <TextField size="small" id="name" placeholder="Name" variant="filled" autoComplete="name" fullWidth/>
    )
  } else if (type === 'standard') {
    return (
      <TextField size="small" id="name" placeholder="Name" variant="standard" autoComplete="name" margin="dense" fullWidth/>
    )
  } else {
    return (
      <Paper
        component="form"
        elevation={3}
        sx={{ p: '8px 8px', display: 'flex', alignItems: 'center' }}
      >
        <InputBase
          sx={{ flex: 1 }}
          placeholder="Name"
          inputProps={{ 'aria-label': 'Name' }}
          autoComplete="name"
        />
      </Paper>
    )
  }
}