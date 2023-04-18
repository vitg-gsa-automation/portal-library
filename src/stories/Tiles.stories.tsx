import { Story } from '@storybook/react';
import { RadioGroup, RadioItem, RadioItemProps } from '../components';
import { Tiles, TilesProps } from '../components/Tiles';
import { useState } from 'react';

export default {
  title: 'Tiles',
  component: Tiles,
};

export const Default: Story<TilesProps> = (args) => {
  const [value, setValue] = useState('1');
  return (
    <Tiles
      onChange={(value) => setValue(value)}
      value={value}
      items={[
        {
          value: '1',
          label: 'API access',
          description: 'This is a description',
        },
        {
          value: '2',
          label: 'Portal access',
          description: 'This is a description',
        },
        {
          value: '3',
          label: 'Both',
          description: 'This is a description',
        },
      ]}
    />
  );
};

Default.args = {};
