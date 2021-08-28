import React from "react";
import { styled } from "../../stitches.config";
import { UnstyledLink } from "../Link/UnstyledLink";
import { Text } from "../Text";
import { H2 } from "../Heading";

const Wrapper = styled(UnstyledLink, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  minWidth: "360px",
  textDecoration: "none",
});

const PostImage = styled("img", {
  display: "flex",
  width: "auto",
  height: "100px",
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
  height: "100px",
});

const PostTitle = styled(H2, {});

const PostExcerpt = styled(Text, {
  display: "flex",
  fontSize: "$2",
  paddingBottom: "5px",
  color: "$text",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  margin: 0,
});

const DateCategory = styled("div", {
  fontSize: "$1",
  color: "$textLight",
});

export const PostCardMobile = ({ image, title, date, category }) => {
  return (
    <Wrapper to={`/${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <TextWrapper>
        <PostTitle>{title}</PostTitle>
        <DateCategory>
          {date} • <UnstyledLink to={`/${category}`}>{category}</UnstyledLink>
        </DateCategory>
      </TextWrapper>
      <PostImage src={image} />
    </Wrapper>
  );
};
