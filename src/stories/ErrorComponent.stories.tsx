import { Story } from '@storybook/react';
import { NoMatch, NoMatchProps } from '../components/NoMatch';
import { Link } from '../components/Link';
import {
  ErrorComponent,
  ErrorComponentProps,
} from '../components/ErrorComponent';
import { Button } from '../components/Button';

export default {
  title: 'ErrorComponent',
  component: ErrorComponent,
};

export const Default: Story<ErrorComponentProps> = (args) => {
  return (
    <ErrorComponent
      actions={<Button text="Refresh page" color="secondary" />}
      {...args}
    />
  );
};
Default.args = {};
