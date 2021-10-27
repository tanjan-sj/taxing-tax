import {createTheme} from "@mui/material/styles";
import {green, orange} from "@mui/material/colors";

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: green[600]
    },
  }
});

export default CustomTheme;