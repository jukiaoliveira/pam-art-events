import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF85C1", 
    },
    secondary: {
      main: "##efc9b6", 
    },
    text: {
      primary: "#000000", 
      secondary: "#4A4A4A",
    },
    background: {
      default: "#FFFFFF", 
      paper: "#FBE8E5",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 700, 
      color: "#000000", 
    },
    subtitle1: {
      color: "#4A4A4A", 
    },
  },
});

export default theme;