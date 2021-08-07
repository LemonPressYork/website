import { Link } from "gatsby";
import React from "react";

import { Layout } from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <p>Hello!</p>
      <Link to="/archive">See our other posts.</Link>
    </Layout>
  );
};

export default Home;
