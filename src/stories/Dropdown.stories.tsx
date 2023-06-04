import { Story } from '@storybook/react';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '../components/Dropdown';
import { ListItem } from '../components/ListItem';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const Default: Story = (args) => {
  return (
    <Dropdown modal={false}>
      <DropdownTrigger asChild>
        <button>Dropdown trigger</button>
      </DropdownTrigger>
      <DropdownContent side="bottom" align="end" loop>
        <DropdownItem textValue="Account">
          <ListItem>Account</ListItem>
        </DropdownItem>
        <DropdownItem textValue="Sign out">
          <ListItem>Sign out</ListItem>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

Default.args = {};
