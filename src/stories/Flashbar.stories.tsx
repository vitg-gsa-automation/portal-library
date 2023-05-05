import { Story } from '@storybook/react';
import { Button, Flashbar, FlashbarProps } from '../components';

export default {
  title: 'Flashbar',
  component: Flashbar,
};

export const Default: Story<FlashbarProps> = (args) => {
  return <Flashbar {...args} />;
};
Default.args = {
  items: [
    {
      id: 1,
      type: 'info',
      header: 'Known issues/limitations',
      content:
        'No Savings Plans coverage data was returned for this time period. Please adjust the time period or filters if this seems incorrect.',
      dismissable: true,
      onDismiss: (i) => console.log(i),
    },
    {
      id: 1,
      type: 'success',
      header: 'Resource created',
      dismissable: true,
      onDismiss: (i) => console.log(i),
    },
    {
      id: 1,
      type: 'warning',
      header: 'Known issues/limitations',
      content:
        'No Savings Plans coverage data was returned for this time period. Please adjust the time period or filters if this seems incorrect.',
      dismissable: true,
      onDismiss: (i) => console.log(i),
    },
    {
      id: 1,
      type: 'error',
      header: 'Error',
      content:
        'No Savings Plans coverage data was returned for this time period. Please adjust the time period or filters if this seems incorrect.',
      dismissable: true,
      onDismiss: (i) => console.log(i),
    },
    {
      id: 1,
      type: 'info',
      content: 'Running validations',
      loading: true,
      dismissable: true,
      onDismiss: (i) => console.log(i),
    },
  ],
};
