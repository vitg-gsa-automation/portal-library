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
      id: 'dashboard',
      type: 'link',
      text: 'Navigation link',
      icon: 'dashboard',
      href: '/dashboard',
    },
    {
      id: 'home',
      type: 'link',
      text: 'Navigation link',
      icon: 'home',
      href: '/home',
    },
    {
      id: 'add',
      type: 'section',
      text: 'Navigation link',
      icon: 'add',
      href: '/add',
    },
    {
      id: 'settings',
      type: 'link',
      text: 'Navigation link',
      icon: 'settings',
      href: '/settings',
    },
  ],
};
