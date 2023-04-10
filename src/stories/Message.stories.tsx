import { Story } from '@storybook/react';
import { Message, MessageProps } from '../components';

export default {
  title: 'Message',
  component: Message,
};

export const Default: Story<MessageProps> = (args) => {
  return <Message {...args} />;
};
Default.args = {
  type: 'info',
  text: 'No Savings Plans coverage data was returned for this time period. Please adjust the time period or filters if this seems incorrect.',
  icon: 'info',
};
