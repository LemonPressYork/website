import React from "react";
import { styled } from "../../stitches.config";

import { TextLink } from "../Link";

import { categories } from "./data";

const Wrapper = styled("div", {
  background: "$accentDark",

  gridColumn: "1/-1",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

  "@smUp": {
    display: "flex",
    flexDirection: "row",
  },
});

const CategoryLink = styled(TextLink, {
  color: "#FFFFFF",
  textDecoration: "none",

  padding: "$1",
});

export const Bar = () => {
  return (
    <Wrapper>
      {categories.map(({ name, id }) => (
        <CategoryLink to={`/${id}`}>{name}</CategoryLink>
      ))}
    </Wrapper>
  );
};
