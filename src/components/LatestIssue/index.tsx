import React from "react";
import { styled } from "../../stitches.config";
import { PrintIssueCard } from "../PrintIssues/PrintIssueCard";
import { getLatestIssue } from "./getLatestIssue";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { breakpoints } from "../../utils/breakpoints";

const Wrapper = styled("div", {
  width: "300px",
});

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const LatestIssue = ({ css }) => {
  const { title, epoch, documentId, docname } = getLatestIssue();

  const date = new Date(epoch);

  return (
    <Wrapper style={css}>
      <PrintIssueCard
        title={title}
        date={`${monthNames[date.getMonth()]} ${date.getFullYear()}`}
        link={`https://issuu.com/thelemonpress/docs/${docname}`}
        image={`https://image.issuu.com/${documentId}/jpg/page_1_thumb_large.jpg`}></PrintIssueCard>
    </Wrapper>
  );
};
