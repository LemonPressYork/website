import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { globalStyles } from "../../stitches.config";

import { Container } from "../Container";
import { Footer } from "../Footer";
import { TextLink } from "../Link"
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const footerMessage = [
  "Lovingly crafted",
  "Handmade",
  "Forged in fire",
  "Meticulously designed",
  "Carefully created"
]

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
        <Navbar />
      </header>

      <main>{children}</main>

      <Container>
        <Footer>
          © {new Date().getFullYear()}, {footerMessage[Math.floor(Math.random() * footerMessage.length)]} by <TextLink to="https://yordev.com">Yordevs</TextLink>
        </Footer>
      </Container>
    </div>
  );
};
