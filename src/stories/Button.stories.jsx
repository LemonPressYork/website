import React from 'react';
import Button from '../components/button';


export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = () => <Button  />;

export const Primary = Template.bind();
