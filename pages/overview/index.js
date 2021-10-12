import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography} from "@mui/material";
import React, {useState} from "react";
import {OverviewData} from "../../components/data/OverviewData";
import DataDisplayCard from "../../components/utils/cards/DataDisplayCard";

export default function Overview() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <DataDisplayCard title="Personal Information" subtitle="Personal Details" data={OverviewData.personal}/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <DataDisplayCard title="Family Information" subtitle="Family Details" data={OverviewData.family}/>
        </Grid>
      </Grid>
    </main>
  )
}