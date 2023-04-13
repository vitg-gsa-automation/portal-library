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
  ],
};
export const Loading: Story<FlashbarProps> = (args) => {
  return <Flashbar {...args} />;
};
Loading.args = {
  items: [
    {
      id: 1,
      type: 'info',
      content:
        'No Savings Plans coverage data was returned for this time period. Please adjust the time period or filters if this seems incorrect.',
      loading: true,
      dismissable: true,
      onDismiss: (i) => console.log(i),
    },
  ],
};
