import { Story } from '@storybook/react';
import { Item } from '../types/form';
import { Select } from '../components/Select';
import { SelectProps } from '../components/Select/interfaces';
import { OptionDefinition } from '../internal/components/Option';
import { useState } from '@storybook/addons';

const items: OptionDefinition[] = [
  {
    label: 'VITGSSP1.xml',
    value: '1',
    icon: 'description',
    description: 'System Security Plan',
    tags: ['SSP', 'OSCAL XML'],
    labelTag: '09/13/23',
  },
  {
    label: 'AwesomeCloudSSP1.xml',
    value: '1',
    icon: 'description',
    description: 'System Security Plan',
    tags: ['SSP', 'OSCAL XML'],
    labelTag: '10/09/23',
  },
  {
    label: 'VITG_sar.json',
    value: '1',
    icon: 'description',
    description: 'Security Assessment Report',
    tags: ['SAR', 'OSCAL JSON'],
    labelTag: '09/13/23',
  },
];

export default {
  title: 'Select',
  component: Select,
};

export const Default: Story<SelectProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<OptionDefinition>({});
  return (
    <Select
      {...args}
      selectedItem={selectedItem}
      onSelectChange={setSelectedItem}
    />
  );
};
Default.args = {
  placeholder: 'Select document',
  items: items,
};
