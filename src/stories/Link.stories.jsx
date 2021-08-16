import React from "react";

import { Text } from "../components/Text";
import { TextLink } from "../components/Link";

export default {
  title: "Components/TextLink",
  component: TextLink,
  argTypes: {
    content: {
      defaultValue: "Link",
      control: "text",
    },
    to: {
      defaultValue: "https://example.com",
      control: "text",
    },
  },
};

export const externalLink = (args) => (
  <Text>
    <TextLink to={args.to}>{args.content}</TextLink>
  </Text>
);

export const internalLink = (args) => (
  <Text>
    <TextLink to="/index">{args.content}</TextLink>
  </Text>
);
