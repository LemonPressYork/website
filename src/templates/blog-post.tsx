import React from "react";
import { styled } from "../stitches.config";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import { Bio } from "../components/Bio";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Container } from "../components/Container";
import { H1, H2 } from "../components/Heading";

import { calculateReadTime, cleanHTML, parseHTML } from "../utils";

const Article = styled("article", {
  gridColumn: "3 / -3",
});

const BlogPostNav = styled("nav", {
  gridColumn: "1 / -1",
});

const PostDetails = styled(H2, {
  color: "$textLight",
  fontWeight: "$normal",
  fontStyle: "italic",
});

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    image: getImage(post.featuredImage),
    alt: post.featuredImage?.node?.alt || "",
  };

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />

      <Container>
        <Article>
          <header>
            <H1>{parseHTML(post.title)}</H1>
            <PostDetails>
              {post.date} • {calculateReadTime(cleanHTML(post.content))} minute read
            </PostDetails>

            <GatsbyImage
              image={getImage(post.featuredImage.node.localFile)}
              alt={featuredImage.alt}
            />
          </header>

          {post.content && <section>{parseHTML(post.content)}</section>}

          <hr />

          <footer>
            <Bio />
          </footer>
        </Article>

        <BlogPostNav>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0,
            }}>
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </BlogPostNav>
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`;
