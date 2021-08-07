import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  color: {
    accent: "#FFFEA1",
    accentDark: "#CBC94C",
    background: "#FFFFFF",
    text: "#292929",
    textLight: "#757575",
  },
  spacing: {
    1: "15px",
    2: "30px",
  },
  fontSize: {
    1: "14px",
    2: "18px",
    3: "24px",
    4: "48px",
  },
  fontFamily: {
    sans: "Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  },
};

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  html: {
    fontSize: theme.fontSize[2],
  },

  body: {
    color: theme.color.textLight,
    fontFamily: theme.fontFamily.sans,
  },
}));
