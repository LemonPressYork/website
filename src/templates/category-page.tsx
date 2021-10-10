import React from "react";
import { styled } from "../stitches.config";
import { Layout } from "../components/Layout";
import { H1, H3 } from "../components/Heading";
import { Container } from "../components/Container";
import { UnstyledLink } from "../components/Link";

const BlogPostTemplate = ({ pageContext: { name, posts } }) => {
  console.log(posts);

  return (
    <Layout>
      <Container>
        <H1 style={{ gridColumn: "1/13" }}>{name}</H1>
        {posts.nodes.map((post) => {
          return (
            <UnstyledLink to={`/${post.slug}`}>
              <H3 style={{ gridColumn: "1/13" }}>{post.title}</H3>
            </UnstyledLink>
          );
        })}
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;
