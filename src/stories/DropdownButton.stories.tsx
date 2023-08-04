import { Story } from '@storybook/react';
import { DropdownItem } from '../components/Dropdown';
import {
  DropdownButton,
  DropdownButtonProps,
} from '../components/DropdownButton';

export default {
  title: 'DropdownButton',
  component: DropdownButton,
};

export const Default: Story<DropdownButtonProps> = (args) => {
  return (
    <DropdownButton {...args}>
      <DropdownItem textValue="Edit organization details">
        Edit organization details
      </DropdownItem>
      <DropdownItem textValue="Edit organization details">
        Edit organization details
      </DropdownItem>
      <DropdownItem textValue="Edit organization details">
        Edit organization details
      </DropdownItem>
      <DropdownItem textValue="Edit organization details">
        Edit organization details
      </DropdownItem>
    </DropdownButton>
  );
};
Default.args = {
  text: 'Dropdown button',
};
