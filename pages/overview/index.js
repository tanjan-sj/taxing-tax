import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography} from "@mui/material";
import React, {useState} from "react";

export default function Overview() {
  const data = [
    {
      key: 'Full Name',
      value: 'John Doe'
    },
    {
      key: 'Birth Date',
      value: '01/01/2021'
    },
    {
      key: 'Marital Status',
      value: 'Unmarried'
    },
    {
      key: 'Gender',
      value: 'Male'
    },
    {
      key: 'Residency',
      value: 'Resident'
    },
    {
      key: 'NID Number',
      value: '012345678987654321'
    }
  ];
  return (
    <main>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title="Personal Information" titleTypographyProps={{variant: 'h6', fontWeight: 400}}
                        subheader="Personal Details" subheaderTypographyProps={{variant: 'subheading'}}/>
            <Divider/>
            <CardContent sx={{p:0}}>
              {data.map((item, index) => {
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