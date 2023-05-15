import { Story } from '@storybook/react';
import { Alert, AlertProps, Button } from '../components';

export default {
  title: 'Alert',
  component: Alert,
};

export const Default: Story<AlertProps> = (args) => {
  return <Alert {...args} />;
};
Default.args = {
  type: 'error',
  header: 'Known issues/limitations',
  content:
    'No Savings Plans coverage data was returned for this time period. Please adjust the time period or filters if this seems incorrect.',
  dismissable: true,
  onDismiss: () => console.log('dismissed'),
};
export const WithAction: Story<AlertProps> = (args) => {
  return <Alert {...args} />;
};
WithAction.args = {
  type: 'info',
  header: 'Versioning is not enabled',
  content: 'Versioning is not enabled for documents in package.',
  action: <Button text="Enable versioning" color="secondary" />,
};
export const Dismissable: Story<AlertProps> = (args) => {
  return <Alert {...args} />;
};
Dismissable.args = {
  type: 'success',
  header: 'Versioning is not enabled',
  content: 'Versioning is not enabled for documents in package.',
  action: <Button text="Enable versioning" color="secondary" />,
  dismissable: true,
};
