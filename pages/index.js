import Head from 'next/head'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import * as React from "react";
import {ShutterSpeed, Storage, VerifiedUser} from "@mui/icons-material";
import LandingLayout from "../components/layout/LandingLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <section>
          <Container maxWidth="lg">
            <Box py={8} textAlign="center">
              <Typography variant="h3" component="h2" gutterBottom={true}>The New Tax Paper Generator</Typography>
              <Typography variant="h5" color="textSecondary" paragraph={true}>
                Accessible, secure, easy. The TPGen is on it's way to revolutionize the way you generate tax
                papers and it's totally free!!!</Typography>
              <Box mt={4}>
                <Button variant="contained" color="primary">Sign up for free</Button>
              </Box>
            </Box>
            <Divider/>
          </Container>
        </section>
        <section>
          <Container maxWidth="lg">
            <Box pt={8} textAlign="center">
              <Typography variant="h4" component="h2" gutterBottom={true}>TPGen Setup</Typography>
              <Typography variant="subtitle1" color="textSecondary">We've designed a simple process for users
                to use TPGen. Here's how it works.</Typography>
            </Box>
          </Container>
          <Container maxWidth="lg">
            <Box pt={8} pb={10}>
              <Grid container spacing={6} sx={{
                marginBottom: 4
              }}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardActionArea href="#">
                      <CardMedia sx={{
                        height: '256px',
                      }}
                                 image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box display="flex" height="100%">
                    <Box my="auto">
                      <Typography variant="h2" component="h3">01</Typography>
                      <Typography variant="h4" component="h2" gutterBottom={true}>Move Data</Typography>
                      <Typography variant="body1" color="textSecondary" paragraph={true}>Using our Piper Assistant
                        application, you can move your data to be stored our decentralized network with simple drag &
                        drop.</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{
                marginBottom: 4
              }}>
                <Grid item xs={12} md={6} sx={{
                  order: {
                    md: 1
                  }
                }}>
                  <Card>
                    <CardActionArea href="#">
                      <CardMedia sx={{
                        height: '256px',
                      }}
                                 image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"/>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                  textAlign: {
                    md: 'right'
                  },
                  order: {
                    md: 0
                  },
                }}>
                  <Box display="flex" height="100%">
                    <Box my="auto">
                      <Typography variant="h2" component="h3">02</Typography>
                      <Typography variant="h4" component="h2" gutterBottom={true}>Integrate Software</Typography>
                      <Typography variant="body1" color="textSecondary" paragraph={true}>We want to make sure that you
                        can keep using the software that you use to manage your business.</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardActionArea href="#">
                      <CardMedia sx={{
                        height: '256px',
                      }}
                                 image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"/>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box display="flex" height="100%">
                    <Box my="auto">
                      <Typography variant="h2" component="h3">03</Typography>
                      <Typography variant="h4" component="h2" gutterBottom={true}>Ongoing Support</Typography>
                      <Typography variant="body1" color="textSecondary" paragraph={true}>As with all innovative
                        technologies, sometimes unpredictable things will happen, and you can always count on our
                        support to solve issues for you.</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider/>
          </Container>
        </section>
        <section>
          <Container maxWidth="lg">
            <Box py={6}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Storage color="primary" fontSize="large" sx={{
                    marginBottom: 1
                  }}/>
                  <Typography variant="h6" component="h3" gutterBottom={true}>Accessibility</Typography>
                  <Typography variant="body1" component="p">Ever worried that you won't be able to access your data in
                    some places? Nevermore. With PiperNet your connection has no borders.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <VerifiedUser color="primary" fontSize="large" sx={{
                    marginBottom: 1
                  }}/>
                  <Typography variant="h6" component="h3" gutterBottom={true}>Secure</Typography>
                  <Typography variant="body1" component="p">Have you ever heard about "not putting all of your eggs in
                    one basket"? Well, with PiperNet you can actually put all your eggs in millions of
                    baskets.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <ShutterSpeed color="primary" fontSize="large" sx={{
                    marginBottom: 1
                  }}/>
                  <Typography variant="h6" component="h3" gutterBottom={true}>Speed</Typography>
                  <Typography variant="body1" component="p">"Loading data" will soon be forgotten same way as floppy
                    discs. With PiperNet algorithm, every data could travel faster than it was ever
                    imaginable.</Typography>
                </Grid>
              </Grid>
            </Box>
            <Divider/>
          </Container>
        </section>
        <section>
          <Container maxWidth="lg">
            <Box pt={8} pb={10} textAlign="center">
              <Box mb={6}>
                <Typography variant="h4" component="h2" gutterBottom={true}>The Pipers</Typography>
                <Typography variant="subtitle1" color="textSecondary">We are the guys that made this whole thing
                  possible.</Typography>
              </Box>
              <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                  <Avatar alt="" sx={{
                    width: (theme) => theme.spacing(12),
                    height: (theme) => theme.spacing(12),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: 2
                  }}
                          src="https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&ah=256&q=80"/>
                  <Box mb={2}>
                    <Typography variant="h6" component="h4" gutterBottom={true}>Richard Hendricks</Typography>
                    <Typography variant="body1" color="primary" component="span">Chief Executive Officer</Typography>
                  </Box>
                  <Typography variant="body2" paragraph={true}>When I'm not obsessively stressing about the fate of Pied
                    Piper, I sometimes give lectures to school kids.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Avatar alt="" sx={{
                    width: (theme) => theme.spacing(12),
                    height: (theme) => theme.spacing(12),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: 2
                  }}
                          src="https://images.unsplash.com/photo-1561463385-0e5ea0ca925b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&ah=256&q=80"/>
                  <Box mb={2}>
                    <Typography variant="h6" component="h4" gutterBottom={true}>Dinesh Chugtai</Typography>
                    <Typography variant="body1" color="primary" component="span">Chief Technology Officer</Typography>
                  </Box>
                  <Typography variant="body2" paragraph={true}>I am the absolute best programmer at Pied Piper
                    (especially better than Gilfoyle).</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Avatar alt="" sx={{
                    width: (theme) => theme.spacing(12),
                    height: (theme) => theme.spacing(12),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: 2
                  }}
                          src="https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&ah=256&q=80"/>
                  <Box mb={2}>
                    <Typography variant="h6" component="h4" gutterBottom={true}>Bertram Gilfoyle</Typography>
                    <Typography variant="body1" color="primary" component="span">Chief Systems Architect</Typography>
                  </Box>
                  <Typography variant="body2" paragraph={true}>I work on Pied Piper only for the advanced technology!
                    The Team need me to put out their fires, so I stay.</Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <LandingLayout>
      {page}
    </LandingLayout>
  )
}
