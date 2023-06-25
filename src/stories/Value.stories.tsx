import { Story } from '@storybook/react';
import { Value, ValueProps } from '../components/Value';

export default {
  title: 'Value',
  component: Value,
};

export const Default: Story<ValueProps> = (args) => {
  return <Value {...args} />;
};
Default.args = {
  children: 'Value',
};
