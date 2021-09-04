import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled, css } from "../../stitches.config";

import { Text } from "../Text";
import { UnstyledLink } from "../Link/UnstyledLink";
import { H2 } from "../Heading";

const Wrapper = styled("div", {
  position: "relative",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  backgroundColor: "$text",

  padding: "$1",

  maxHeight: 250,
});

const CategoryBubble = styled(Text, {
  padding: "5px $1",

  color: "$text",
  backgroundColor: "white",
  fontWeight: "$bold",
  fontSize: "$1",

  textAlign: "center",
  textTransform: "uppercase",

  borderRadius: "9999px",
});

const Title = styled(H2, {
  color: "$background",
  fontSize: "$3",
});

const backgroundImage = css({
  position: "absolute",
  top: 0,
  left: 0,
});

export const CategoryPost = ({ title, category, image }) => {
  return (
    <Wrapper>
      <GatsbyImage image={image} alt="" className={backgroundImage()} />
      <Title>{title}</Title>
      <UnstyledLink to="">
        <CategoryBubble>{category}</CategoryBubble>
      </UnstyledLink>
    </Wrapper>
  );
};
