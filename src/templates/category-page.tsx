import React, { useEffect, useState } from "react";
import { css, styled } from "../stitches.config";
import { Layout } from "../components/Layout";
import { H1, H2, H3 } from "../components/Heading";
import { Container } from "../components/Container";
import { UnstyledLink } from "../components/Link";
import { CategoryFeature } from "../components/CategoryFeature";
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image";

const PostListHolder = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fill, minmax(250px, 1fr) )",
  gridRowGap: "$2",
  gridColumnGap: "$1",
  marginTop: "$2",
  marginBottom: "$1",
});

const PostPreview = styled("div", {
  position: "relative",

  backgroundColor: "$text",

  minHeight: 250,
});

const PostInfo = styled("div", {
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

const PostTitle = styled(H2, {
  padding: "0.2em",
  lineHeight: "1.4",
  color: "#fff",
});

const PostAuthor = styled("p", {
  color: "rgba(255,255,255,0.8)",
  padding: "2px",
});

const backgroundImage = css({ objectFit: "cover", height: "100%", position: "float" });

const BlogPostTemplate = ({ pageContext: { name, posts } }) => {
  const displayListImage = (featuredImage) => {
    if (featuredImage === null) {
      return (
        <StaticImage
          src="../../media/replacement-image.jpg"
          alt="Preview image for article"
          className={backgroundImage()}
        />
      );
    }
    return (
      <GatsbyImage
        image={getImage(featuredImage.node.localFile)}
        alt=""
        className={backgroundImage()}
      />
    );
  };

  if (posts.nodes.length === 0) {
    return (
      <Layout>
        <Container>
          <H1 style={{ gridColumn: "1/13" }}>{name}</H1>
          <p style={{ gridColumn: "1/13" }}>
            There are no articles for this category yet, we really should right some
          </p>
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Container>
          <H1 style={{ gridColumn: "1/-1" }}>{name}</H1>
          <CategoryFeature
            slug={posts.nodes[0].slug}
            featuredImage={posts.nodes[0].featuredImage}
            title={posts.nodes[0].title}
            excerpt={posts.nodes[0].excerpt}
          />
          <PostListHolder style={{ gridColumn: "1/-1" }}>
            {posts.nodes.slice(1).map(({ slug, title, author, featuredImage }) => {
              return (
                <PostPreview>
                  <UnstyledLink to={`/${slug}`}>
                    {displayListImage(featuredImage)}
                    <PostInfo>
                      <PostTitle style={{ gridColumn: "1/13" }}>{title}</PostTitle>
                      <PostAuthor>{author.node.name}</PostAuthor>
                    </PostInfo>
                  </UnstyledLink>
                </PostPreview>
              );
            })}
          </PostListHolder>
        </Container>
      </Layout>
    );
  }
};

export default BlogPostTemplate;
