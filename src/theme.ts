import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: blue.A700,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
