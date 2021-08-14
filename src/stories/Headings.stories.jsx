import React from "react";

import { H1, H2, H3 } from "../components/Heading";

export default {
  title: "Typography/Headings",
  argTypes: {
    content: {
      defaultValue: "Heading goes here!",
      control: "text",
    },
  },
};

export const Heading1 = (args) => <H1>{args.content}</H1>;

export const Heading2 = (args) => <H2>{args.content}</H2>;

export const Heading3 = (args) => <H3>{args.content}</H3>;
