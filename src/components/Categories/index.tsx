import React from "react";
import { styled } from "../../stitches.config";

import { TextLink } from "../Link";

import { categories } from "./data";

const Bar = styled("div", {
  background: "$accentDark",

  gridColumn: "1/-1",

  display: "flex",
  justifyContent: "space-evenly",
});

const CategoryLink = styled(TextLink, {
  color: "#FFFFFF",
  textDecoration: "none",

  padding: "$1",
});

export const Categories = () => {
  return (
    <Bar>
      {categories.map(({ name, id }) => (
        <CategoryLink to={id}>{name}</CategoryLink>
      ))}
    </Bar>
  );
};
