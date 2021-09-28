import React from "react";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { FeaturedPost } from "../components/FeaturedPost";
import { CategoryGrid } from "../components/CategoryPost";
import { LatestIssue } from "../components/LatestIssue";
import LatestArticleList from "../components/LatestArticlesList";

const Home = () => {
  return (
    <Layout>
      <FeaturedPost />
      <Container>
        <CategoryGrid css={{ gridColumn: "1/8" }} />
        <LatestArticleList css={{ gridColumn: "8/-1" }} />
        <LatestIssue css={{ gridColumn: "10/-1" }} />
      </Container>
    </Layout>
  );
};

export default Home;
