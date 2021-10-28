import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { FeaturedPost } from "../components/FeaturedPost";
import { CategoryGrid } from "../components/CategoryPost";
import { LatestIssue } from "../components/LatestIssue";
import { getCategoryPreviews } from "../utils/getCategoryPreviews";
import { styled } from "../stitches.config";
import { H2 } from "../components/Heading";
import { UnstyledLink } from "../components/Link";
import { SEO } from "../components/SEO";
import LatestArticleList from "../components/LatestArticlesList";

import { breakpoints, calculateReadTime, parseHTML, removeExcerptLink } from "../utils";

import { useMediaQuery } from "../hooks/useMediaQuery";

const CategoryPreview = styled("div", {
  padding: "$1",
});

const PreviewWrapper = styled("div", {
  display: "grid",
  gridColumnGap: "$1",
  gridTemplateColumns: "auto 200px",
});

const CategoryName = styled(H2, {
  color: "$textLight",
  fontSize: "2em",
});

const Seperator = styled("div", {
  width: "100%",
  height: "2px",
  backgroundColor: "black",
  marginBottom: "$1",
});

const previewImageStyle = {
  minHeight: "150px",
  maxHeight: "150px",
  justifySelf: "center",
  alignSelf: "center",
};

const Home = (): JSX.Element => {
  const isDesktop = useMediaQuery(breakpoints.landingMid);
  const { first, remaining } = getCategoryPreviews();

  const displayImage = (featuredImage) => {
    if (featuredImage) {
      return (
        <GatsbyImage
          image={getImage(featuredImage.node.localFile)}
          alt=""
          style={previewImageStyle}
        />
      );
    }
  };

  if (isDesktop) {
    return (
      <Layout>
        <SEO title="Home" />
        <FeaturedPost />
        <Container>
          <CategoryGrid css={{ gridColumn: "1/8", gridRow: "1/4" }} />
          <LatestArticleList css={{ gridColumn: "8/-1", gridRow: "1/8" }} />
          <CategoryPreview css={{ gridColumn: "1/10" }}>
            <UnstyledLink to={`/category/${first.node.slug}`}>
              <CategoryName>{first.node.name}</CategoryName>
            </UnstyledLink>
            {first.node.posts.nodes.slice(0, 2).map(
              ({
                slug,
                title,
                content,
                excerpt,
                featuredImage,
                author: {
                  node: { name },
                },
              }) => {
                if (featuredImage) {
                  return (
                    <>
                      <PreviewWrapper>
                        <div>
                          <UnstyledLink to={`/post/${slug}`}>
                            <H2>{title}</H2>
                          </UnstyledLink>
                          <p>
                            <b>{name}</b> | {calculateReadTime(content)} minute read
                          </p>
                          {parseHTML(removeExcerptLink(excerpt))}
                        </div>
                        <UnstyledLink to={`/post/${slug}`}>
                          {displayImage(featuredImage)}
                        </UnstyledLink>
                      </PreviewWrapper>
                      <Seperator />
                    </>
                  );
                } else {
                  return (
                    <>
                      <div>
                        <UnstyledLink to={`/post/${slug}`}>
                          <H2>{title}</H2>
                        </UnstyledLink>
                        <p>
                          <b>{name}</b> | {calculateReadTime(content)} minute read
                        </p>
                        {parseHTML(removeExcerptLink(excerpt))}
                      </div>
                      <Seperator />
                    </>
                  );
                }
              },
            )}
          </CategoryPreview>
          <LatestIssue css={{ gridColumn: "10/-1" }} />
          {remaining.map(({ node }) => {
            if (node.posts.nodes.length > 0) {
              return (
                <CategoryPreview css={{ gridColumn: "1/-1" }}>
                  <UnstyledLink to={`/category/${node.slug}`}>
                    <CategoryName>{node.name}</CategoryName>
                  </UnstyledLink>
                  {node.posts.nodes.slice(0, 2).map(
                    ({
                      slug,
                      title,
                      content,
                      excerpt,
                      featuredImage,
                      author: {
                        node: { name },
                      },
                    }) => {
                      if (featuredImage) {
                        return (
                          <>
                            <PreviewWrapper>
                              <div>
                                <UnstyledLink to={`/post/${slug}`}>
                                  <H2>{title}</H2>
                                </UnstyledLink>
                                <p>
                                  <b>{name}</b> | {calculateReadTime(content)} minute read
                                </p>
                                {parseHTML(removeExcerptLink(excerpt))}
                              </div>
                              <UnstyledLink to={`/post/${slug}`}>
                                {displayImage(featuredImage)}
                              </UnstyledLink>
                            </PreviewWrapper>
                            <Seperator />
                          </>
                        );
                      } else {
                        return (
                          <>
                            <div>
                              <UnstyledLink to={`/post/${slug}`}>
                                <H2>{title}</H2>
                              </UnstyledLink>
                              <p>
                                <b>{name}</b> | {calculateReadTime(content)} minute read
                              </p>
                              {parseHTML(removeExcerptLink(excerpt))}
                            </div>
                            <Seperator />
                          </>
                        );
                      }
                    },
                  )}
                </CategoryPreview>
              );
            }
          })}
        </Container>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <SEO title="Home" />
        <FeaturedPost />
        <Container>
          <CategoryGrid css={{ gridColumn: "1/-1" }} />
          <LatestArticleList css={{ gridColumn: "1/-1" }} />
          <LatestIssue
            css={{ gridColumn: "1/-1", width: "100%", display: "flex", justifyContent: "center" }}
          />
          <CategoryPreview css={{ gridColumn: "1/-1" }}>
            <UnstyledLink to={`/category/${first.node.slug}`}>
              <CategoryName>{first.node.name}</CategoryName>
            </UnstyledLink>
            {first.node.posts.nodes.slice(0, 2).map(
              ({
                slug,
                title,
                content,
                excerpt,
                author: {
                  node: { name },
                },
              }) => {
                return (
                  <>
                    <UnstyledLink to={`/post/${slug}`}>
                      <H2>{title}</H2>
                    </UnstyledLink>
                    <p>
                      <b>{name}</b> | {calculateReadTime(content)} minute read
                    </p>
                    {parseHTML(removeExcerptLink(excerpt))}
                    <Seperator />
                  </>
                );
              },
            )}
          </CategoryPreview>
          {remaining.map(({ node }) => {
            if (node.posts.nodes.length > 0) {
              return (
                <CategoryPreview css={{ gridColumn: "1/-1" }}>
                  <UnstyledLink to={`/category/${node.slug}`}>
                    <CategoryName>{node.name}</CategoryName>
                  </UnstyledLink>
                  {node.posts.nodes.slice(0, 2).map(
                    ({
                      slug,
                      title,
                      content,
                      excerpt,
                      author: {
                        node: { name },
                      },
                    }) => {
                      return (
                        <>
                          <UnstyledLink to={`/post/${slug}`}>
                            <H2>{title}</H2>
                          </UnstyledLink>
                          <p>
                            <b>{name}</b> | {calculateReadTime(content)} minute read
                          </p>
                          {parseHTML(removeExcerptLink(excerpt))}
                          <Seperator />
                        </>
                      );
                    },
                  )}
                </CategoryPreview>
              );
            }
          })}
        </Container>
      </Layout>
    );
  }
};

export default Home;
