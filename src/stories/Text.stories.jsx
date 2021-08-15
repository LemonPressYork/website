import React from "react";

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
};

const Template = (args) => <Text {...args}>{args.content}</Text>;

export const Primary = Template.bind({});
