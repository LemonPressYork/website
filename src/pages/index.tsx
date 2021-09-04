import React from "react";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { FeaturedPost } from "../components/FeaturedPost";
import { CategoryGrid } from "../components/CategoryPost";

const Home = () => {
  return (
    <Layout>
      <FeaturedPost />
      <Container>
        <CategoryGrid css={{ gridColumn: "1/8" }} />
      </Container>
    </Layout>
  );
};

export default Home;
