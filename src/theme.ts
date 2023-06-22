import { extendTheme } from "@chakra-ui/react";

  const theme = {
    styles: {
      global: () => ({
        "body": {
          bg: "black",
          color: "white",
        },
      }),
    },
  };

  const customButtonStyles = {
    components: {
      Button: {
        baseStyle: {
          color: 'white',
          bg: 'inherit'
        }
      }
    }
  }

const customTheme = extendTheme(theme, customButtonStyles)
  
export default customTheme
