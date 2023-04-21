import { Story } from '@storybook/react';
import { Button } from '../components';
import { SpaceBetween, SpaceBetweenProps } from '../layouts';

export default {
  title: 'SpaceBetween',
  component: SpaceBetween,
};

export const Default: Story<SpaceBetweenProps> = (args) => {
  return (
    <SpaceBetween {...args}>
      <Button text="Cancel" color="secondary" />
      <Button text="Save" />
    </SpaceBetween>
  );
};

Default.args = {
  direction: 'horizontal',
  size: 'xs',
};
