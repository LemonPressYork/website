import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  columnGap: "$2",

  margin: "0 $1",
  maxWidth: "min(95%, 1280px)",

  "@mdUp": {
    margin: "0 auto",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
});
