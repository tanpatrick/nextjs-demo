import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

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
