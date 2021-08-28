import React from "react";
import { styled } from "../../stitches.config";
import { UnstyledLink } from "../Link/UnstyledLink";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "200px",
});

const AuthorImage = styled("img", {
  display: "flex",
  width: "48px",
  height: "48px",
  borderRadius: "24px",
});

const TextWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  marginLeft: "$1",
});

const AuthorName = styled(UnstyledLink, {
  fontSize: "$1",
  paddingBottom: "5px",
  color: "$text",
});

const DateReadTime = styled("div", {
  fontSize: "$1",
  color: "$textLight",
});

export const PostDetails = ({ image, name, date, length }) => {
  return (
    <Wrapper>
      <AuthorImage src={image} />
      <TextWrapper>
        <AuthorName to={`/${name.replace(/\s+/g, "-").toLowerCase()}`}>{name}</AuthorName>
        <DateReadTime>
          {date} • {length} min read
        </DateReadTime>
      </TextWrapper>
    </Wrapper>
  );
};
