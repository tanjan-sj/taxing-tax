import * as React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import {styled} from "@mui/material/styles";
import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import BaseTextField from "./BaseTextField";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function TextFieldWrapper({type}) {
  return (
    <React.Fragment>
      <Grid item alignSelf="center" xs={4} sm={2}>
        <Typography variant="subtitle1" component="div" sx={{flexGrow: 1}}>
          Name:
        </Typography>
      </Grid>
      <Grid container item xs={8} sm={4} spacing={1} alignItems="flex-start">
        <Grid item alignSelf="center" xs={8}>
          <BaseTextField type={type} />
        </Grid>
        <Grid item alignSelf="center" xs={4} >
          <LightTooltip title={
            <React.Fragment>
              <Typography color="inherit" >Name</Typography>
              <em>{"Enter your full name"}</em>
            </React.Fragment>
          }>
            <InfoRoundedIcon color="primary"/>
          </LightTooltip>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}