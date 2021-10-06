import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography} from "@mui/material";
import React, {useState} from "react";
import {OverviewData} from "../../components/data/OverviewData";

export default function Overview() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title="Personal Information" titleTypographyProps={{variant: 'h6', fontWeight: 400}}
                        subheader="Personal Details" subheaderTypographyProps={{variant: 'subheading'}}/>
            <Divider/>
            <CardContent sx={{p:0}}>
              {OverviewData.personal.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid container spacing={1} sx={{
                      p:2
                    }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="text.secondary">
                          {item.key}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2">
                          {item.value}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                  </React.Fragment>
                )
              })}
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Save</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title="Family Information" titleTypographyProps={{variant: 'h6', fontWeight: 400}}
                        subheader="Family Details" subheaderTypographyProps={{variant: 'subheading'}}/>
            <Divider/>
            <CardContent sx={{p:0}}>
              {OverviewData.family.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid container spacing={1} sx={{
                      p:2
                    }}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" color="text.secondary">
                          {item.key}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2">
                          {item.value}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                  </React.Fragment>
                )
              })}
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Save</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </main>
  )
}