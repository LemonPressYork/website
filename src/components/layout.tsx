import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { globalStyles } from "../stitches.config";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  globalStyles();

  return (
    <div>
      <header>
        <Link to="/">{title}</Link>
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a> And{" "}
        <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  );
};
