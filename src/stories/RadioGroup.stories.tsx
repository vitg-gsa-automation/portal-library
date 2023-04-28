import { Story } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup, RadioGroupProps } from '../components/RadioGroup';

export default {
  title: 'RadioGroup',
  component: RadioGroup,
};

export const Default: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = useState('r1');
  console.log(value);
  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      items={[
        {
          id: 1,
          value: 'r1',
          label: 'Radio 1',
        },
        {
          id: 2,
          value: 'r2',
          label: 'Radio 2',
        },
        {
          id: 3,
          value: 'r3',
          label: 'Radio 3',
        },
      ]}
    />
  );
};

Default.args = {};
