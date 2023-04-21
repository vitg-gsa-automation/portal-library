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
export const External: Story<LinkProps> = (args) => {
  return <Link {...args} />;
};
External.args = {
  children: 'Primary link',
  size: 'l',
  external: true,
  href: 'https://google.com',
};
export const Internal: Story<LinkProps> = (args) => {
  return <Link {...args} />;
};
Internal.args = {
  children: 'Internal link',
  to: '#',
};
