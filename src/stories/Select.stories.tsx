import { Story } from '@storybook/react';
import { Item } from '../types/form';
import { Select, SelectProps } from '../components';

const items: Item[] = [
  {
    label: 'Mario',
    value: 1,
  },
  {
    label: 'Luigi',
    value: 2,
  },
  {
    label: 'Zelda',
    value: 3,
  },
  {
    label: 'Peach',
    value: 4,
  },
  {
    label: 'Toad',
    value: 5,
  },
  {
    label: 'Bowser',
    value: 6,
  },
  {
    label: 'Link',
    value: 7,
  },
  {
    label: 'Donkey Kong',
    value: 8,
  },
  {
    label: 'Wario',
    value: 9,
  },
  {
    label: 'Yoshi',
    value: 10,
  },
  {
    label: 'Pikachu',
    value: 11,
  },
  {
    label: 'Fox',
    value: 12,
  },
  {
    label: 'Ganon',
    value: 13,
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
  placeholder: 'Select characters',
  items: [],
};
