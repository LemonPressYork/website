import { Link } from "gatsby";
import React from "react";
import { Container } from "../components/Container";

import { Layout } from "../components/Layout";
import { Text } from "../components/Text";

const Home = () => {
  return (
    <Layout>
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
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
