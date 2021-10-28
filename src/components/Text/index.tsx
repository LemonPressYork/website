import { styled } from "../../stitches.config";

export const Text = styled("p", {
  fontFamily: "$sans",
  fontSize: "$2",
  fontWeight: "$normal",

  margin: 0,
  marginBottom: "$1",

  lineHeight: 1.4,

  variants: {
    color: {
      normal: {
        color: "$text",
      },
      light: {
        color: "$textLight",
      },
      white: {
        color: "#FFFFFF",
      },
    },
  },

  defaultVariants: {
    color: "light",
  },
});
