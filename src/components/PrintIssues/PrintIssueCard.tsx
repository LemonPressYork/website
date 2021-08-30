import React from "react";
import { styled } from "../../stitches.config";
import { TextLink, UnstyledLink } from "../Link";
import { Text } from "../Text";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px",
});

const Preview = styled("img", {
  minWidth: "200px",
  width: "100%",
  marginTop: "10px",
});

const Title = styled(TextLink, {
  textDecoration: "none",
  textAlign: "center",
  fontSize: "$3",
  fontWeight: "$bold",
  fontFamily: "$sans",
  color: "$text",
  marginTop: "10px",
  marginBottom: "5px",
});

const Date = styled(Text, {
  marginTop: "0px",
});

export const PrintIssueCard = ({ title, date, image, link }) => {
  return (
    <Wrapper>
      <UnstyledLink to={link}>
        <Preview src={image} />
      </UnstyledLink>
      <Title to={link}>{title}</Title>
      <Date>{date}</Date>
    </Wrapper>
  );
};
