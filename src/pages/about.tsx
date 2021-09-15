import React from "react";
import { Container } from "../components/Container";
import { H1 } from "../components/Heading";
import { Layout } from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <Container>
        <H1 style={{ gridColumn: "1/13" }}>About The Lemon Press</H1>
        <p style={{ gridColumn: "1/8", display: "flex", alignItems: "center" }}>
          The Lemon Press is one of only a handful of university satire publications in the U.K.,
          and has a history of excellence. Nationally recognised, The Lemon Press is one of York's
          most established and most awarded print media organisations. The print edition is produced
          once a term, with an additional freshers' edition, and online content is produced on a
          constant basis. Online, The Lemon Press has a national reach, with videos reaching almost
          400,000 people. The Lemon Press has recently branched out onto new platforms, including a
          TikTok and Instagram, and our Multi-Media wing was recently responsible for a Call-To-Arms
          for supporters of exiled YUSU President Chris Small, which played before a screening of
          Cats at the student cinema.
        </p>
        <div style={{ gridColumn: "8/13" }}>
          <img
            src="https://image.freepik.com/free-photo/group-coworkers-office-talking_23-2148985522.jpg"
            style={{ width: "100%" }}
          />
          <p>
            <i>Pretty much a standard lemon press meeting</i>
          </p>
        </div>
        <div style={{ gridColumn: "1/5" }}>
          <img
            src="https://www.publicdomainpictures.net/pictures/220000/nahled/beautiful-bar-in-amsterdam.jpg"
            style={{ width: "100%" }}
          />
          <p>
            <i>D Bar on a cool winters night</i>
          </p>
        </div>
        <p style={{ gridColumn: "6/13", display: "flex", alignItems: "center" }}>
          Being part of The Lemon Press is collaborative, it's a great way to get involved with
          Student Politics, and other Media Societies. We report on the YUSU Elections each year,
          and our radio show is looking for new presenters. We hold joint socials with York Vision,
          and have screenings in the Student Cinema.
        </p>
        <p style={{ gridColumn: "1/8", display: "flex", alignItems: "center" }}>
          Whether you want to write satire, make videos, learn photoshop skills, use editing
          software, gain leadership experience, or just be a member of a lighthearted society of
          like-minded individuals, The Lemon Press is for you. Whatever your interests may be, there
          is a way to satirise them!
          <br />
          <br />
          At the heart of The Lemon Press is one core mission: to see life for what it truly is – a
          joke.
        </p>
        <div style={{ gridColumn: "8/13" }}>
          <img
            src="https://pbs.twimg.com/media/E4KRC3bXEAEHB-6?format=jpg&name=large"
            style={{ width: "100%" }}
          />
          <p>
            <i>
              Printed Lemon Press magazines can usually be found scattered around campus, if you're
              struggling to find one make sure to check the bins (recycling of course)
            </i>
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
