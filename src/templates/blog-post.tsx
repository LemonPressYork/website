import React from "react";
import { styled } from "../stitches.config";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import { Bio } from "../components/Bio";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Container } from "../components/Container";
import { H1, H2 } from "../components/Heading";
import { TextLink } from "../components/Link";

import { calculateReadTime, cleanHTML, parseHTML } from "../utils";

const Article = styled("article", {
  gridColumn: "3 / -3",

  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

const BlogPostNav = styled("nav", {
  gridColumn: "1 / -1",

  ul: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "$1",

    listStyle: "none",
    padding: 0,

    "@mdUp": {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
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

          <footer>
            <Bio author={post.author.node} />
          </footer>
        </Article>

        <BlogPostNav>
          <ul>
            <li>
              {previous && (
                <TextLink to={`/post${previous.uri}`} rel="prev">
                  ← {parse(previous.title)}
                </TextLink>
              )}
            </li>

            <li>
              {next && (
                <TextLink to={`/post${next.uri}`} rel="next">
                  {parse(next.title)} →
                </TextLink>
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

      author {
        node {
          id
          avatar {
            url
          }
          description
          firstName
          lastName
        }
      }

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
