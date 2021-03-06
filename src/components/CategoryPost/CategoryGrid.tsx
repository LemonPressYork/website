import React from "react";
import { getImage } from "gatsby-plugin-image";
import { styled } from "../../stitches.config";

import { CategoryPost } from "./CategoryPost";
import { getCategoryPosts } from "./getCategoryPosts";

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridColumnGap: "$1",
  gridRowGap: "$1",

  margin: "calc(2 * $1) 0",

  "@mdUp": {
    gridTemplateColumns: "repeat( 2, minmax(250px, 1fr) )",
  },
});

interface Props {
  css: { [key: string]: string };
}

export const CategoryGrid = ({ css }: Props): JSX.Element => {
  const posts = getCategoryPosts();

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
            key={slug}
            category={{ name: nodes[0].name, slug: nodes[0].slug }}
            image={getImage(featuredImage?.node.localFile)}
          />
        ),
      )}
    </Grid>
  );
};
