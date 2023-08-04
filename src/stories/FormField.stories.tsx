import { Story } from '@storybook/react';
import {
  FormField,
  FormFieldProps,
  Input,
  Link,
  Select,
  Tiles,
} from '../components';

export default {
  title: 'FormField',
  component: FormField,
};

export const Default: Story<FormFieldProps> = (args) => {
  return (
    <FormField {...args}>
      <Input id="input" placeholder="Enter email" />
    </FormField>
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
  description: 'This is a description.',
  error: 'This is an error message.',
  constraintText: 'Requirements and constraints for the field.',
};
export const WithSelect: Story<FormFieldProps> = (args) => {
  const items = [
    {
      label: 'aaron.nolan@volpegroup.com',
      value: 32,
    },
  ];
  return (
    <FormField {...args}>
      <Select
        placeholder="Enter email"
        items={items}
        onSelectChange={() => []}
      />
    </FormField>
  );
};

WithSelect.args = {
  htmlFor: 'input',
  label: 'Email address',
  info: (
    <Link to="#" variant="info">
      Info
    </Link>
  ),
  description: 'This is a description.',
  error: 'This is an error message.',
  constraintText: 'Requirements and constraints for the field.',
};
