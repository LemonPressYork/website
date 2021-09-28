import React from "react";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { FeaturedPost } from "../components/FeaturedPost";
import { CategoryGrid } from "../components/CategoryPost";
import LatestIssueList from "../components/LatestArticlesList";
import { LatestIssue } from "../components/LatestIssue";

const Home = () => {
  return (
    <Layout>
      <FeaturedPost />
      <Container>
        <CategoryGrid css={{ gridColumn: "1/8" }} />
        <LatestIssueList css={{ gridColumn: "8/-1" }} />
        <LatestIssue css={{ gridColumn: "10/-1" }} />
      </Container>
    </Layout>
  );
};

export default Home;
