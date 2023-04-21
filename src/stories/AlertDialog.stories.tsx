import { Story } from '@storybook/react';
import { AlertDialog, AlertDialogProps, Button } from '../components';
import { CardContent } from '../layouts';

export default {
  title: 'AlertDialog',
  component: AlertDialog,
};

export const Default: Story<AlertDialogProps> = (args) => {
  return <AlertDialog {...args} />;
};

Default.args = {
  title: 'Deactivate organization',
  visuallyHiddenDescription:
    'Are you sure you want to put this organization in an inactive state? This action cannot be undone.',
  trigger: <Button text="Deactivate organization" color="secondary" />,
  action: <Button text="Yes, deactivate" />,
  children: (
    <CardContent disableTopPadding>
      Are you sure you want to put this organization in an inactive state? This
      action cannot be undone.
    </CardContent>
  ),
};
