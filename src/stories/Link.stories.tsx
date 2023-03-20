import { Story } from '@storybook/react';
import { Link, LinkProps } from '../components/Link';

export default {
  title: 'Link',
  component: Link,
};

export const Default: Story<LinkProps> = (args) => {
  return <Link {...args} />;
};
Default.args = {
  children: 'Primary link',
  to: '#',
};
export const Large: Story<LinkProps> = (args) => {
  return <Link {...args} />;
};
Large.args = {
  children: 'Primary link',
  to: '#',
  size: 'l',
};
