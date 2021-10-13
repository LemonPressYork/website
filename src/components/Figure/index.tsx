import { styled } from "../../stitches.config";

export const Figure = styled("figure", {
  width: "100%",

  margin: "$1 0",

  img: {
    width: "100%",
    height: "100%",
  },

  figcaption: {
    fontStyle: "italic",
    textAlign: "center",
    marginTop: "$1",
  },
});
