import { Story } from '@storybook/react';
import { SideNavigation, SideNavigationProps } from '../layouts/SideNavigation';

export default {
  title: 'SideNavigation',
  component: SideNavigation,
};

export const Default: Story<SideNavigationProps> = (args) => {
  return <SideNavigation {...args} />;
};
Default.args = {
  header: { text: 'Service name', href: '#' },
  items: [
    {
      type: 'link',
      text: 'Navigation link',
      icon: 'dashboard',
      href: '/dashboard',
    },
    {
      type: 'link',
      text: 'Navigation link',
      icon: 'home',
      href: '/home',
    },
    {
      type: 'section',
      text: 'Navigation link',
      icon: 'add',
      href: '/add',
    },
    {
      type: 'link',
      text: 'Navigation link',
      icon: 'settings',
      href: '/settings',
    },
  ],
};
