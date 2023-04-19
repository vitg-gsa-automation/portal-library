import { Story } from '@storybook/react';
import { Input, InputGroup, InputGroupProps, Link, Tiles } from '../components';

export default {
  title: 'InputGroup',
  component: InputGroup,
};

export const Default: Story<InputGroupProps> = (args) => {
  return (
    <InputGroup {...args}>
      <Input id="input" placeholder="Enter email" />
    </InputGroup>
  );
};

Default.args = {
  htmlFor: 'input',
  label: 'Email address',
  info: (
    <Link to="#" variant="info">
      Info
    </Link>
  ),
  hint: '',
};
export const ChildrenTiles: Story<InputGroupProps> = (args) => {
  return <InputGroup {...args}></InputGroup>;
};

ChildrenTiles.args = {
  label: 'Registration type',
  hint: '',
  children: (
    <Tiles
      onChange={(value) => console.log(value)}
      value="1"
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
  ),
};
