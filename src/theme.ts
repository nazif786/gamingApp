import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: " #ebf7eb",
      100: " #cce6cc",
      200: "#acd3ac",
      300: " #8bc38b",
      400: "#6ab26a",
      500: "#529851",
      600: "#3f763f",
      700: "#1a331a",
      800: "#111",
      900: "#051205",
    },
  },
});

export default theme;
