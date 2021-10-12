import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography} from "@mui/material";
import {OverviewData} from "../../data/OverviewData";
import React from "react";

export default function DataDisplayCard({title, subtitle, data}) {
  return (
    <Card>
      <CardHeader title={title} titleTypographyProps={{variant: 'h6', fontWeight: 400}}
                  subheader={subtitle} subheaderTypographyProps={{variant: 'subheading'}}/>
      <Divider/>
      <CardContent sx={{p: 0}}>
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Grid container spacing={1} sx={{
                p: 2
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
              <Divider/>
            </React.Fragment>
          )
        })}
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  )
}