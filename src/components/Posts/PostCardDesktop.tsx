import React from "react";
import { styled } from "../../stitches.config";
import { UnstyledLink } from "../Link/UnstyledLink";
import { Text } from "../Text";
import { H2 } from "../Heading";
import Clamp from "react-multiline-clamp";

const Wrapper = styled(UnstyledLink, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  minWidth: "640px",
  textDecoration: "none",
});

const PostImage = styled("img", {
  display: "flex",
  width: "auto",
  height: "145px",
  margin: "$1",
  borderRadius: "15px",
});

const TextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexGrow: 1,
  margin: "$1",
  height: "145px",
});

const PostTitle = styled(H2, {});

const PostExcerpt = styled(Text, {
  display: "flex",
  fontSize: "$2",
  paddingBottom: "5px",
  color: "$textLight",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  margin: 0,
  
  "&:hover@": {
    cursor: "pointer"
  }
});

const DateCategory = styled("div", {
  fontSize: "$1",
  color: "$textLight",
});

export const PostCardDesktop = ({ image, title, slug, date, category, categorySlug, excerpt }) => {
  return (
    <Wrapper to={`/${slug}`}>
      <TextWrapper>
        <PostTitle>{title}</PostTitle>
        <Clamp withTooltip={false} lines={4}>
          <PostExcerpt>{excerpt}</PostExcerpt>
        </Clamp>
        <DateCategory>
          {date} • <UnstyledLink to={`/${categorySlug}`}>{category}</UnstyledLink>
        </DateCategory>
      </TextWrapper>
      <PostImage src={image} />
    </Wrapper>
  );
};
