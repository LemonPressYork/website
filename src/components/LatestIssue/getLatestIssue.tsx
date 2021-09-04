import { graphql, useStaticQuery } from "gatsby";

type LatestIssue = {
  title: string;
  epoch: string;
  documentId: string;
  docname: string;
};

export const getLatestIssue = (): LatestIssue => {
  const {
    allIssues: { edges: issues },
  } = useStaticQuery(graphql`
    query LatestIssue {
      allIssues(limit: 1) {
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
  `);

  const { node } = issues[0];

  return node;
};
