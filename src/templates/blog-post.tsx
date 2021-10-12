import React from "react";
import { styled } from "../stitches.config";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import { Bio } from "../components/Bio";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Container } from "../components/Container";

import { calculateReadTime, cleanHTML } from "../utils";

const Article = styled("article", {
  gridColumn: "1 / -1",
});

const BlogPostNav = styled("nav", {
  gridColumn: "1 / -1",
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
            <h1>{parse(post.title)}</h1>
            <p>{post.date}</p>
            <p>{calculateReadTime(cleanHTML(post.content))} minute read.</p>

            {/* if we have a featured image for this post let's display it */}
            {featuredImage?.image && (
              <GatsbyImage
                image={featuredImage.image}
                alt={featuredImage.alt}
                style={{ marginBottom: 50 }}
              />
            )}
          </header>

          {!!post.content && <section>{parse(post.content)}</section>}

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
                <Link to={`/post${previous.uri}`} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={`/post${next.uri}`} rel="next">
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
