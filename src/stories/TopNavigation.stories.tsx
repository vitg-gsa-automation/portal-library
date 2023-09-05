import { Story } from '@storybook/react';
import { Value, ValueProps } from '../components/Value';
import { TopNavigation, TopNavigationProps } from '../components/TopNavigation';

export default {
  title: 'TopNavigation',
  component: TopNavigation,
};

export const Default: Story<TopNavigationProps> = (args) => {
  return <TopNavigation {...args} />;
};
Default.args = {
  href: '#',
  menuDropdownUtility: {
    type: 'menu-dropdown',
    text: 'Customer Name',
    description: 'email@example.com',
    icon: 'user-profile',
    items: [
      {
        id: 'profile',
        text: 'Profile',
      },
      { id: 'preferences', text: 'Preferences' },
      { id: 'security', text: 'Security' },
      {
        id: 'support-group',
        text: 'Support',
        items: [
          {
            id: 'documentation',
            text: 'Documentation',
          },
          { id: 'support', text: 'Support' },
          {
            id: 'feedback',
            text: 'Feedback',
            href: '#',
            external: true,
          },
          {
            id: 'github',
            text: 'GitHub',
            href: 'https://github.com/vitg-gsa-automation',
            external: true,
          },
        ],
      },
      { id: 'signout', text: 'Sign out' },
    ],
  },
};
