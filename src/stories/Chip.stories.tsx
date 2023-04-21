import { Story } from '@storybook/react';
import { Chip, ChipProps } from '../components/Chip';

export default {
  title: 'Chip',
  component: Chip,
};

export const Default: Story<ChipProps> = (args) => {
  return <Chip {...args} />;
};

Default.args = {
  color: 'green',
  children: 'OK',
};
