import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { PrintIssueCard } from "../components/PrintIssues/PrintIssueCard";
import { styled } from "../stitches.config";
import { H1, H3 } from "../components/Heading";

const Wrapper = styled("div", {
  padding: "50px",
});

const IssuesHolder = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
});

const Subtitle = styled(H3, {
  fontWeight: "$semibold",
});

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PrintIssues = ({
  data: {
    allIssues: { edges },
  },
}) => {
  return (
    <Layout>
      <Wrapper>
        <H1>Print Issues</H1>
        <Subtitle>Checkout all our print issues... digitally</Subtitle>
        <IssuesHolder>
          {edges.map((issue) => {
            let date = new Date(issue.node.epoch);
            return (
              <PrintIssueCard
                title={issue.node.title}
                date={`${monthNames[date.getMonth()]} ${date.getFullYear()}`}
                link={`https://issuu.com/thelemonpress/docs/${issue.node.docname}`}
                image={`https://image.issuu.com/${issue.node.documentId}/jpg/page_1_thumb_large.jpg`}></PrintIssueCard>
            );
          })}
        </IssuesHolder>
      </Wrapper>
    </Layout>
  );
};

export default PrintIssues;

export const pageQuery = graphql`
  query {
    allIssues {
      edges {
        node {
          title
          epoch
          documentId
          docname
        }
      }
    }
  }
`;
