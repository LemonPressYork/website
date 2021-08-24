import React from "react";
import { styled } from "../../stitches.config";

import { TextLink } from "../Link";

type Category = {
  id: string;
  name: string;
};

const categories: Category[] = [
  { name: "Campus", id: "campus" },
  { name: "News & Politics", id: "news-and-politics" },
  { name: "Lifestyle", id: "lifestyle" },
  { name: "Science & Tech", id: "science-and-tech" },
  { name: "Art", id: "art" },
  { name: "Features", id: "features" },
  { name: "Sports", id: "sports" },
];

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
