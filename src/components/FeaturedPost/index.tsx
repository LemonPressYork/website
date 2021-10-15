import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { styled, css } from "../../stitches.config";

import { Text } from "../Text";
import { Container } from "../Container";
import { H1 } from "../Heading";

import { UnstyledLink } from "../Link/";
import { getFeaturedPost } from "./getFeaturedPost";
import { removeExcerptLink } from "../../utils";

const Wrapper = styled("div", {
  position: "relative",

  "&:after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "linear-gradient(hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 1))",
    opacity: 0.7,
    transition: "opacity $ease",
  },

  "&:hover:after": {
    opacity: 0.85,
  },
});

const Body = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,

  width: "100%",
  height: "calc(100% - 2 * $space$2)",

  padding: "$2 0",
});

const Title = styled(H1, {
  color: "#FFFFFF",
  textShadow: "$1",
  textDecoration: "none",

  margin: 0,
});

const Content = styled(Container, {
  position: "relative",
  zIndex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  height: "100%",
});

const featuredImageCSS = css({
  maxHeight: 480,
  minHeight: 300,
});

const Excerpt = styled(Text, {
  color: "#FFFFFF",
  fontWeight: "$semibold",
  fontSize: "$3",
  textShadow: "$1",

  margin: 0,

  display: "none",

  "@lgUp": {
    display: "block",
  },
});

export const FeaturedPost = (): JSX.Element => {
  const { title, excerpt, slug, featuredImage } = getFeaturedPost();

  const image = getImage(featuredImage.node.localFile);

  return (
    <Wrapper>
      <UnstyledLink to={`/post/${slug}`}>
        <GatsbyImage image={image} alt="" className={featuredImageCSS()} />
        <Body>
          <Content>
            <Title>{title}</Title>
            <Excerpt>{parse(removeExcerptLink(excerpt))}</Excerpt>
          </Content>
        </Body>
      </UnstyledLink>
    </Wrapper>
  );
};
