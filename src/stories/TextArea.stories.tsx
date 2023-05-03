import { Story } from '@storybook/react';
import { TextArea, TextAreaProps } from '../components/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
};

export const Default: Story<TextAreaProps> = (args) => {
  return <TextArea {...args} />;
};
Default.args = {
  placeholder: 'placeholder',
};
