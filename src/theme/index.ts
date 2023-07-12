import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    primary: "#3192d6",
    gold: "#FBC801",
    light: "#f7f7f7",
    dark: {
      blue: "#012F60",
      black: "#424746",
    },
  },
});

export default theme;
