import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { styled } from "../../stitches.config";

import { CategoryPost } from "./CategoryPost";

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gridRowGap: "$1",
  gridColumnGap: "$1",
});

export const CategoryGrid = () => {
  return <Grid></Grid>;
};
