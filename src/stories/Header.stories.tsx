import { Story } from '@storybook/react';
import React from 'react';
import { Button, Link } from '../components';
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
  info: (
    <Link to="#" variant="info">
      Info
    </Link>
  ),
  actions: undefined,
};

export const WithActions: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};
WithActions.args = {
  variant: 'h2',
  title: 'Create system',
  count: '(3)',
  description: 'This is a description to create a system',
  info: (
    <Link to="#" variant="info">
      Info
    </Link>
  ),
  actions: (
    <React.Fragment>
      <Button text="Edit" color="secondary" />
      <Button text="Create resource" />
    </React.Fragment>
  ),
};
