import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled, css } from "../../stitches.config";

import { Text } from "../Text";
import { UnstyledLink } from "../Link/UnstyledLink";
import { H2 } from "../Heading";

const Wrapper = styled("div", {
  position: "relative",

  backgroundColor: "$text",

  minHeight: 250,
});

const CategoryBubble = styled(UnstyledLink, {
  padding: "5px $1",

  display: "block",

  width: "min-content",

  color: "$text",
  backgroundColor: "white",
  fontWeight: "$bold",
  fontSize: "$1",

  textAlign: "center",
  textTransform: "uppercase",

  borderRadius: "9999px",

  transition: "background-color $ease, color $ease",

  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});

const Title = styled(H2, {
  color: "$background",
  fontSize: "$3",
});

const backgroundImage = css({ objectFit: "cover", height: "100%" });

const Body = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  position: "absolute",
  top: 0,
  left: 0,

  padding: "$1",

  width: "calc(100% - 2 * $space$1)",
  height: "calc(100% - 2 * $space$1)",

  background: "hsla(0, 0%, 0%, 0.5)",

  transition: "background $ease",

  "&:hover": {
    background: "hsla(0, 0%, 0%, 0.75)",
  },
});

export const CategoryPost = ({ title, to, category, image }) => {
  return (
    <Wrapper>
      <UnstyledLink to={`/${to}`}>
        <GatsbyImage image={image} alt="" className={backgroundImage()} />
        <Body>
          <Title>{title}</Title>
          <UnstyledLink to="">
            <CategoryBubble to={category.link}>{category.name}</CategoryBubble>
          </UnstyledLink>
        </Body>
      </UnstyledLink>
    </Wrapper>
  );
};
