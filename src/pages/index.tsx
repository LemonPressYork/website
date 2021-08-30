import { Link } from "gatsby";
import React from "react";
import { Container } from "../components/Container";

import { Layout } from "../components/Layout";
import { H1, H2, H3 } from "../components/Heading";
import { Text } from "../components/Text";
import { TextLink } from "../components/Link/TextLink";
import { PostCard } from "../components/Posts";
import { PostDetails } from "../components/Posts/PostDetails";
import { FeaturedPost } from "../components/FeaturedPost";
import { LatestPost } from "../components/LatestIssue";

const Home = () => {
  return (
    <Layout>
      <FeaturedPost />
      <LatestPost />
      <Container>
        <div>
          <Text>
            Hello, world! This is some text here. It can be <b>bold</b>, <i>italic</i>, even{" "}
            <b>
              <i>both!</i>
            </b>
          </Text>
          <Text color="light">And here is some light text, which is a different variant.</Text>
          <Link to="/archive">See our other posts.</Link>
          <H1>These</H1>
          <H2>Are</H2>
          <H3>Headings</H3>
          <Text>
            This is an external <TextLink to="https://google.com">link.</TextLink>
          </Text>
          <Text>
            This is an internal <TextLink to="/404">link.</TextLink>
          </Text>
          <PostCard
            image="https://miro.medium.com/fit/c/262/262/0*z8Y-S5VRjD2B2dPx.jpg"
            title="First Post"
            slug="first-post"
            date="28 Aug"
            category="Test"
            categorySlug="test"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <PostDetails
            name="Harry Wickham"
            date="12 June"
            image="https://miro.medium.com/fit/c/262/262/0*z8Y-S5VRjD2B2dPx.jpg"
            length="12"
            nameslug="harry-wickham"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
