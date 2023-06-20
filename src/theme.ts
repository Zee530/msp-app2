import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      "html, body": {
        bg: "black",
        color: "white",
      },
    }),
  },
});

export default theme;
