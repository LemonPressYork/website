import React from "react";
import { Link, graphql } from "gatsby";
import parse from "html-react-parser";

import { Bio } from "../components/bio";
import { Layout } from "../components/layout";
import { SEO } from "../components/SEO";

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
      <Bio />
      <ol>
        {posts.map((post) => {
          const title = post.title;

          return (
            <li key={post.uri}>
              <article>
                <header>
                  <h2>
                    <Link to={post.uri}>
                      <span>{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section>{parse(post.excerpt)}</section>
              </article>
            </li>
          );
        })}
      </ol>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
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
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`;
