import React from "react";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { FeaturedPost } from "../components/FeaturedPost";
import { CategoryGrid } from "../components/CategoryPost";
import { LatestIssue } from "../components/LatestIssue";
import LatestArticleList from "../components/LatestArticlesList";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { breakpoints } from "../utils";

const Home = () => {
  const isDesktop = useMediaQuery(breakpoints.landingMid);

  if (isDesktop) {
    return (
      <Layout>
        <FeaturedPost />
        <Container>
          <CategoryGrid css={{ gridColumn: "1/8", gridRow: "1/4" }} />
          <LatestArticleList css={{ gridColumn: "8/-1", gridRow: "1/8" }} />
          <LatestIssue css={{ gridColumn: "10/-1" }} />
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <FeaturedPost />
        <Container>
          <CategoryGrid css={{ gridColumn: "1/-1" }} />
          <LatestArticleList css={{ gridColumn: "1/-1" }} />
          <LatestIssue
            css={{ gridColumn: "1/-1", width: "100%", display: "flex", justifyContent: "center" }}
          />
        </Container>
      </Layout>
    );
  }
};

export default Home;
