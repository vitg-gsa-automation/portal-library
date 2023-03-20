import { Story } from '@storybook/react';
import { Item } from '../types/form';
import { Select, SelectProps } from '../components';

const items: Item[] = [
  {
    label: 'Item 1',
    value: 1,
  },
  {
    label: 'Item 2',
    value: 2,
  },
  {
    label: 'Item 3',
    value: 3,
  },
];

export default {
  title: 'Select',
  component: Select,
};

export const Default: Story<SelectProps> = (args) => {
  return <Select {...args} />;
};
Default.args = {
  placeholder: 'Select ATO Package',
  items,
  // onSelectChange:{(item) => setPkgOption(item)}
  // selectedItem={pkgOption}
};
