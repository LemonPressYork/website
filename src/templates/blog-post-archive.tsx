import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";
import { Bio } from "../components/Bio";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { Container } from "../components/Container";
import { TextLink, UnstyledLink } from "../components/Link";
import { styled } from "../stitches.config";
import { H1 } from "../components/Heading";

const List = styled("div", {});

const Seperator = styled("div", {
  width: "100%",
  height: "2px",
  backgroundColor: "black",
});

const AuthorLink = styled(UnstyledLink, {
  "&:hover, &:active": {
    color: "$text",
  },
});

const BlogIndex = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const posts = data.allWpPost.nodes;

  if (!posts.length) {
    return (
      <Layout>
        <SEO title="All posts" />
        <Bio />
        <p>No blog posts found. Add posts to your WordPress site and they'll appear here!</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="All posts" />
      <Container style={{ paddingTop: "50px" }}>
        <H1 style={{ gridColumn: "1/-1" }}>Article Archive</H1>
        <div
          style={{
            gridColumn: "1 / -1",
          }}>
          {posts.map((post) => {
            const title = post.title;

            return (
              <>
                <List key={`/post/${post.slug}`}>
                  <article>
                    <header>
                      <h2>
                        <TextLink to={`/post/${post.slug}`}>
                          <span>{parse(title)}</span>
                        </TextLink>
                      </h2>
                      <small>
                        {post.date} |{" "}
                        <b>
                          <AuthorLink to={`/author/${post.author.node.name}`}>
                            {" "}
                            {post.author.node.name}{" "}
                          </AuthorLink>
                        </b>
                      </small>
                    </header>
                    <section>{parse(post.excerpt)}</section>
                  </article>
                </List>
                <Seperator />
              </>
            );
          })}
        </div>

        {previousPagePath && (
          <>
            <TextLink to={previousPagePath}>Previous page</TextLink>
            <br />
          </>
        )}
        {nextPagePath && <TextLink to={nextPagePath}>Next page</TextLink>}
      </Container>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(sort: { fields: [date], order: DESC }, limit: $postsPerPage, skip: $offset) {
      nodes {
        excerpt
        uri
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        author {
          node {
            name
          }
        }
      }
    }
  }
`;
