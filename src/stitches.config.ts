import { createCss } from "@stitches/react";

import { breakpoints } from "./utils/breakpoints";

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      accent: "#FFFEA1",
      accentDark: "#CBC94C",
      background: "#FFFFFF",
      text: "#292929",
      textLight: "#757575",
    },
    space: {
      1: "15px",
      2: "30px",
      3: "45px",
    },
    fonts: {
      sans: "Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    },
    fontSizes: {
      1: "14px",
      2: "18px",
      3: "24px",
      4: "48px",
    },
    fontWeights: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    transitions: {
      ease: "0.2s ease",
    },
    shadows: {
      1: "0 0 25px hsla(0, 0%, 0%, 0.75)",
    },
  },
  media: breakpoints,
});

export const globalStyles = global({
  html: {
    fontSize: "$2",
  },

  body: {
    color: "$textLight",
    fontFamily: "$sans",
    fontWeight: "$normal",
  },
});
