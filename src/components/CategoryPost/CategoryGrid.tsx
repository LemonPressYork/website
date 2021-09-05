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
            slug
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
            slug,
            categories: { nodes },
            featuredImage,
          },
        }) => (
          <CategoryPost
            title={title}
            to={slug}
            category={{ name: nodes[0].name, link: nodes[0].link }}
            image={getImage(featuredImage?.node.localFile)}
          />
        ),
      )}
    </Grid>
  );
};
