import React from "react";

import { PrintIssueCard } from "../components/PrintIssues/PrintIssueCard";

export default {
  title: "Components/PrintIssueCard",
  argTypes: {
    image: {
      defaultValue:
        "https://image.issuu.com/191216222225-43b0edd974edf32300ab32fc2ade72c8/jpg/page_1_thumb_large.jpg",
      control: "text",
    },
    date: {
      defaultValue: "August 2019",
      control: "text",
    },
    title: {
      defaultValue: "Issue Name",
      control: "text",
    },
    link: {
      defaultValue: "https://google.com",
      control: "text",
    },
  },
};

export const IssueCard = (args) => (
  <PrintIssueCard
    title={args.title}
    date={args.date}
    image={args.image}
    link={args.link}></PrintIssueCard>
);
