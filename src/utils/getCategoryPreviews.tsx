import { graphql, useStaticQuery } from "gatsby";

export const getCategoryPreviews = () => {
  const {
    allWpCategory: { categories },
  } = useStaticQuery(graphql`
    query MyQuery {
      allWpCategory(filter: { name: { ne: "Uncategorized" } }) {
        categories: edges {
          node {
            slug
            name
            posts {
              nodes {
                slug
                title
                excerpt
                content
                author {
                  node {
                    name
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
      }
    }
  `);

  return {
    first: categories.slice(0, 1)[0],
    remaining: categories.slice(1),
  };
};
