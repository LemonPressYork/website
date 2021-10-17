import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { attributesToProps, domToReact } from "html-react-parser";
import { styled, css } from "../../stitches.config";

import { Text } from "../Text";
import { Container } from "../Container";
import { H1 } from "../Heading";

import { UnstyledLink } from "../Link/";
import { removeExcerptLink, parseHTML } from "../../utils";

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
  position: "relative",
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
  gap: "$1",

  minHeight: 350,
});

const featuredImageCSS = css({
  maxHeight: 480,
  minHeight: 300,

  position: "absolute",
  height: "100%",
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

export const CategoryFeature = ({ title, excerpt, slug, featuredImage }) => {
  const displayImage = () => {
    if (featuredImage === null) {
      return (
        <StaticImage
          src="../../media/replacement-image.jpg"
          alt="Preview image for article"
          className={featuredImageCSS()}
        />
      );
    }
    return (
      <GatsbyImage
        image={getImage(featuredImage.node.localFile)}
        alt=""
        className={featuredImageCSS()}
      />
    );
  };

  return (
    <Wrapper style={{ gridColumn: "1/-1" }}>
      <UnstyledLink to={`/post/${slug}`}>
        {displayImage()}
        <Body>
          <Content>
            <Title>{title}</Title>
            {parseHTML(removeExcerptLink(excerpt), {
              replace: (domNode) => {
                if (domNode.attribs && domNode.name === "p") {
                  const props = attributesToProps(domNode.attribs);
                  return (
                    <Excerpt color="white" {...props}>
                      {domToReact(domNode.children)}
                    </Excerpt>
                  );
                }
              },
            })}
          </Content>
        </Body>
      </UnstyledLink>
    </Wrapper>
  );
};
