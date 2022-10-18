import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'


// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
