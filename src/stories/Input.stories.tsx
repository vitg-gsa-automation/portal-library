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
  icon: '',
  iconFontSize: '',
  extended: false,
  hints: '',
  error: '',
};

export const WithHints: Story<InputProps> = (args) => {
  return <Input {...args} />;
};
WithHints.args = {
  placeholder: 'placeholder',
  hints: 'This is a hint that will tell the user about what information to put',
};

export const Error: Story<InputProps> = (args) => {
  return <Input {...args} />;
};
Error.args = {
  placeholder: 'placeholder',
  icon: '',
  iconFontSize: '',
  extended: false,
  hints: '',
  error: 'This is a required field',
};
