import { Story } from '@storybook/react';
import { Input, InputProps } from '../components/Input';

export default {
  title: 'Input',
  component: Input,
};

export const Default: Story<InputProps> = (args) => {
  return <Input {...args} />;
};
Default.args = {
  placeholder: 'placeholder',
  extended: false,
};
