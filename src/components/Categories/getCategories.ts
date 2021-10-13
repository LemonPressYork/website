import { graphql, useStaticQuery } from "gatsby";

type Category = {
  id: string;
  name: string;
  slug: string;
};

export const getCategories = (): { node: Category }[] => {
  const {
    allWpCategory: { categories },
  } = useStaticQuery(graphql`
    {
      allWpCategory(filter: { name: { ne: "Uncategorized" } }) {
        categories: edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `);

  return categories;
};
