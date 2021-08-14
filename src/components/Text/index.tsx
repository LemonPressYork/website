import { styled } from "../../stitches.config";

export const Text = styled("p", {
  fontFamily: "$sans",
  fontSize: "$2",
  fontWeight: "$normal",

  color: "$text",

  marginBottom: "$1",

  variants: {
    color: {
      normal: {
        color: "$text",
      },
      light: {
        color: "$textLight",
      },
    },
  },
});
