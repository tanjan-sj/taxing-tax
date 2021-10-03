import {Container, Grid} from "@mui/material";
import TextFieldWrapper from "../components/utils/TextFieldWrapper";

export default function overview() {
  return (
    <main>
      <section>
        <Container maxWidth="lg">
          <Grid container alignItems="start" spacing={2}>
            <TextFieldWrapper type="outlined" />
            <TextFieldWrapper type="standard" />
            <TextFieldWrapper type="filled" />
            <TextFieldWrapper />
          </Grid>
        </Container>
      </section>
    </main>
  )
}