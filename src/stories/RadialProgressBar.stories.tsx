import { Story } from '@storybook/react';
import {
  RadialProgressBar,
  RadialProgressBarProps,
} from '../components/RadialProgressBar';
import { Card, CardContent, Header } from '../layouts';

export default {
  title: 'RadialProgressBar',
  component: RadialProgressBar,
};

export const Default: Story<RadialProgressBarProps> = (args) => {
  return (
    <Card header={<Header variant="h2" title="Document compliance" />}>
      <CardContent disableTopPadding>
        <RadialProgressBar {...args} />
      </CardContent>
    </Card>
  );
};

Default.args = {
  percent: 50,
  width: 125,
  height: 63,
};
