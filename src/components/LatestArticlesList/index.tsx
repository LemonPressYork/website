import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { css, styled } from "../../stitches.config";
import { calculateReadTime } from "../../utils";
import { getCategoryPosts } from "../CategoryPost/getCategoryPosts";
import { H2, H3 } from "../Heading";
import { UnstyledLink } from "../Link";

const Holder = styled("div", {
  padding: "$2",
});

const ArticleHolder = styled("div", {
  marginTop: "$1",
  marginBottom: "$1",
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  alignItems: "center",
});

const DetailsHoder = styled("div", {});

const image = css({});

const PostImage = ({ image }) => {
  if (image === undefined) {
    return (
      <StaticImage
        src="../../media/replacement-image.jpg"
        alt="Preview image for article"
        style={{ gridColumn: "6/-1" }}
      />
    );
  }

  return (
    <GatsbyImage image={image} alt="Preview image for article" style={{ gridColumn: "6/-1" }} />
  );
};

const LatestArticleList = ({ css }) => {
  const posts = getCategoryPosts();
  return (
    <Holder css={css}>
      <H2>Latest Articles</H2>
      {posts.map(({ node: { title, slug, content, featuredImage } }) => (
        <ArticleHolder>
          <DetailsHoder style={{ gridColumn: "1/6" }}>
            <H3>
              <UnstyledLink to={`/post/${slug}`}>{title}</UnstyledLink>
            </H3>
            <p>{calculateReadTime(content)} minute read</p>
          </DetailsHoder>
          <PostImage image={getImage(featuredImage?.node.localFile)} />
        </ArticleHolder>
      ))}
    </Holder>
  );
};

export default LatestArticleList;
