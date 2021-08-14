import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  columnGap: "$2",

  maxWidth: 1280,
  margin: "0 auto",
});
