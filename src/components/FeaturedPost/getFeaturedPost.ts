import { graphql, useStaticQuery } from "gatsby";

type FeaturedPost = {
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: { node: { id; sourceUrl; localFile } };
};

export const getFeaturedPost = (): FeaturedPost => {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query postData {
      allWpPost(filter: { id: { eq: "cG9zdDo0Nw==" } }) {
        edges {
          node {
            title
            excerpt
            slug
            featuredImage {
              node {
                id
                sourceUrl
                localFile {
                  id
                  childImageSharp {
                    gatsbyImageData(
                      layout: FULL_WIDTH
                      height: 480
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

  const { node } = posts[0];

  return node;
};
