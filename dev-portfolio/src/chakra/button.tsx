import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "5px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "#7ac4c2",
      bg: "white",
      _hover: {
        bg: "#7ac4c2",
        color: "white",
      },
    },
    outline: {
      color: "#7ac4c2",
      border: "2px solid",
      borderColor: "#7ac4c2",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
