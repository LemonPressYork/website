import { graphql, useStaticQuery } from "gatsby";

type Post = {
  node: {
    title: string;
    excerpt: string;
    slug: string;
    featuredImage: { node: { id; sourceUrl; localFile } };
    categories: { nodes };
  };
};

export const getCategoryPosts = (): Post[] => {
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

  return posts;
};
