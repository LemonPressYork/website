import React from "react";
import { Link, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { H1, H2, H3 } from "../components/Heading";
import { Text } from "../components/Text";
import { TextLink } from "../components/Link/TextLink";
import { FeaturedPost } from "../components/FeaturedPost";
import { CategoryPost } from "../components/CategoryPost";

const Home = () => {
  return (
    <Layout>
      <FeaturedPost />
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
        </div>
        <CategoryPost title="Hello" category="Test" image={getImage} />
      </Container>
    </Layout>
  );
};

export default Home;
