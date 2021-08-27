import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { styled, css } from "../../stitches.config";

import { Text } from "../Text";
import { Container } from "../Container";
import { H1 } from "../Heading";

import { cleanHTML } from "../../utils/";
import { UnstyledLink } from "../Link/UnstyledLink";

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

const Content = styled(Container, {
  gridTemplateColumns: "1fr",
  alignItems: "end",
  height: "100%",

  [`& ${UnstyledLink}`]: {
    position: "static",

    "&:before": {
      content: "",
      display: "block",
      position: "absolute",
      zIndex: 0,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
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

const Title = styled(H1, {
  color: "#FFFFFF",
  textShadow: "$1",

  textDecoration: "none",
  transition: "transform $ease",

  "&:hover, &:active": {},
});

const Excerpt = styled(Text, {
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
      allWpPost(filter: { id: { eq: "cG9zdDoxMw==" } }) {
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
            <UnstyledLink to={`/${slug}`}>
              <Title>{title}</Title>
            </UnstyledLink>
            <Excerpt>{cleanHTML(excerpt)}</Excerpt>
          </div>
        </Content>
      </Body>
    </Wrapper>
  );
};
