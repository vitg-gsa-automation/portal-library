import { Story } from '@storybook/react';
import {
  StatusIndicator,
  StatusIndicatorProps,
  StatusIndicatorType,
} from '../components/StatusIndicator';

export default {
  title: 'StatusIndicator',
  component: StatusIndicator,
};

export const Default: Story<StatusIndicatorProps> = (args) => {
  return <StatusIndicator {...args} />;
};

Default.args = {
  type: StatusIndicatorType.Success,
  children: 'approved',
};
