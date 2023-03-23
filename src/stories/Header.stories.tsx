import { Story } from '@storybook/react';
import React from 'react';
import { Button } from '../components';
import { Header, HeaderProps } from '../layouts/Header';

export default {
  title: 'Header',
  component: Header,
};

export const Default: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};
Default.args = {
  title: 'Create system',
  description: 'This is a description to create a system',
  status: undefined,
  actions: undefined,
};

export const WithActions: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};
WithActions.args = {
  title: 'Create system',
  status: undefined,
  actions: (
    <React.Fragment>
      <Button text="Edit" color="secondary" />
      <Button text="Create resource" />
    </React.Fragment>
  ),
};
