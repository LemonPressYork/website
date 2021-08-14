import React from "react";
import { Meta } from "@storybook/react";

import { Text } from "../components/Text";

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    content: {
      defaultValue: "Lorem ipsum sit dolor amet.",
      control: "text",
    },
    color: {
      defaultValue: "normal",
      options: ["normal", "light"],
      control: "select",
    },
  },
} as Meta;

const Template = (args) => <Text {...args}>{args.content}</Text>;

export const Primary = Template.bind({});
