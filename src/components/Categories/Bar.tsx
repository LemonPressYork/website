import React from "react";
import { styled } from "../../stitches.config";

import { TextLink } from "../Link";

import { getCategories } from "./getCategories";

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
  const categories = getCategories();

  return (
    <Wrapper>
      {categories.map(({ node: { name, slug, id } }) => (
        <CategoryLink to={`/${slug}`} key={id}>
          {name}
        </CategoryLink>
      ))}
    </Wrapper>
  );
};
