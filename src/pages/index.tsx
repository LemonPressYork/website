import { Link } from "gatsby";
import React from "react";
import { Container } from "../components/Container";

import { Layout } from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div>
          <p>Hello!</p>
          <Link to="/archive">See our other posts.</Link>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
