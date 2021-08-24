import React from 'react';
import { Button } from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = () => <Button />;

export const Primary = Template.bind({});
