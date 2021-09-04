import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { styled } from "../../stitches.config";

import { CategoryPost } from "./CategoryPost";

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
  gridColumnGap: "$1",
  gridRowGap: "$1",
});

export const CategoryGrid = ({ css }) => {
  const {
    allWpPost: { posts },
  } = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }, limit: 4) {
        posts: edges {
          node {
            title
            categories {
              nodes {
                name
                link
              }
            }
            featuredImage {
              node {
                id
                localFile {
                  childImageSharp {
                    id
                    gatsbyImageData(
                      layout: CONSTRAINED
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Grid css={css}>
      {posts.map(
        ({
          node: {
            title,
            categories: { nodes },
            featuredImage,
          },
        }) => (
          <CategoryPost
            title={title}
            to={nodes[0].link}
            category={nodes[0].name}
            image={getImage(featuredImage?.node.localFile)}
          />
        ),
      )}
    </Grid>
  );
};
