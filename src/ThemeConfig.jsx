import { createTheme } from "@mui/material/styles";

const ThemeConfig = createTheme({
  palette: {
    primary: {
      main: "#8685EF",
      contrastText: "#403F70",
    },
    secondary: {
      main: "#403F70",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 520,
      md: 800,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default ThemeConfig;
