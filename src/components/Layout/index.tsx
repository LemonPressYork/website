import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { globalStyles, styled } from "../../stitches.config";

import { Container } from "../Container";
import { Footer } from "../Footer";
import { TextLink } from "../Link";
import { Navbar } from "../Navbar";
import { Categories } from "../Categories";
import { MobileToggle } from "../Categories/MobileToggle";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface LayoutProps {
  children: React.ReactNode;
}

const footerMessage = [
  "Lovingly crafted",
  "Handmade",
  "Forged in fire",
  "Meticulously designed",
  "Carefully created",
];

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

  const SocialLogoHolder = styled("div", {
    float: "right",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "200px",
  });

  globalStyles();

  return (
    <div>
      <header>
        <Navbar />
        <Categories />
      </header>

      <main>{children}</main>

      <Container>
        <Footer>
          © {new Date().getFullYear()},{" "}
          {footerMessage[Math.floor(Math.random() * footerMessage.length)]} by{" "}
          <TextLink to="https://yordevs.com">Yordevs</TextLink>
          <SocialLogoHolder>
            <TextLink to="https://www.facebook.com/thelemonpress">
              <FaFacebookF />
            </TextLink>
            <TextLink to="https://www.twitter.com/thelemonpress">
              <FaTwitter />
            </TextLink>
            <TextLink to="https://www.instagram.com/thelemonpressyork">
              <FaInstagram />
            </TextLink>
          </SocialLogoHolder>
        </Footer>
      </Container>
    </div>
  );
};
