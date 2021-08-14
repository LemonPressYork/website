import { Link } from "gatsby";
import React from "react";
import { Container } from "../components/Container";

import { Layout } from "../components/Layout";
import { H1, H2, H3 } from "../components/Heading";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div>
          <p>Hello!</p>
          <Link to="/archive">See our other posts.</Link>
          <H1>These</H1>
          <H2>Are</H2>
          <H3>Headings</H3>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
