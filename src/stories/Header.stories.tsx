import { Story } from '@storybook/react';
import Header, { HeaderProps } from '../layouts/Header';

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
