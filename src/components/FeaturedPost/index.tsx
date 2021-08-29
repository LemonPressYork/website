import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { styled, css } from "../../stitches.config";

import { Text } from "../Text";
import { Container } from "../Container";
import { H1 } from "../Heading";

import { TextLink, UnstyledLink } from "../Link/";

const Wrapper = styled("div", {
  position: "relative",
});

const Body = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,

  width: "100%",
  height: "calc(100% - 2* $space$2)",

  padding: "$2 0",
});

const Title = styled(H1, {
  color: "#FFFFFF",
  textShadow: "$1",

  textDecoration: "none",
});

const Content = styled(Container, {
  gridTemplateColumns: "1fr",
  alignItems: "end",
  height: "100%",

  transition: "transform $ease",

  "&:hover, &:focus-within": {
    transform: "translateY(-15px)",
  },

  [`${UnstyledLink}`]: {
    position: "relative",
    zIndex: 1,
  },

  [`& ${Title} ${UnstyledLink}`]: {
    position: "static",

    "&:before": {
      content: "",
      display: "block",
      position: "absolute",
      zIndex: 0,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      transition: "background $ease",
    },
  },
});

const featuredImageCSS = css({
  maxHeight: 480,
  minHeight: 300,

  "&:after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "linear-gradient(hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.7))",
  },
});

const Excerpt = styled(Text, {
  position: "relative",
  zIndex: 1,

  color: "#FFFFFF",
  fontWeight: "$semibold",
  fontSize: "$3",
  textShadow: "$1",
});

export const FeaturedPost = () => {
  const {
    allWpPost: {
      edges: [
        {
          node: { title, excerpt, slug, featuredImage },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query postData {
      allWpPost(filter: { id: { eq: "cG9zdDo0Nw==" } }) {
        edges {
          node {
            title
            excerpt
            slug
            featuredImage {
              node {
                id
                sourceUrl
                localFile {
                  id
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      height: 480
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const image = getImage(featuredImage.node.localFile);

  return (
    <Wrapper>
      <GatsbyImage image={image} alt="" className={featuredImageCSS()} />
      <Body>
        <Content>
          <div>
            <Title>
              <UnstyledLink to={`/${slug}`}>{title}</UnstyledLink>
            </Title>
            <Excerpt>{parse(excerpt)}</Excerpt>
          </div>
        </Content>
      </Body>
    </Wrapper>
  );
};
