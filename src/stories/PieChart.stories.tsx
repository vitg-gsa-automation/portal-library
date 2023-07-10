import { Story } from '@storybook/react';
import { Card, CardContent, Header } from '../layouts';
import { PieChart, PieChartProps } from '../components/PieChart';

export default {
  title: 'PieChart',
  component: PieChart,
};

const data = [
  {
    id: 'Error',
    label: 'Error',
    value: 11,
    color: '#ca4040',
  },
  {
    id: 'Fatal',
    label: 'Fatal',
    value: 0,
    color: '#ca4040',
  },
  {
    id: 'Information',
    label: 'Information',
    value: 6,
    color: '#3c97ff',
  },
  {
    id: 'Warning',
    label: 'Warning',
    value: 12,
    color: '#f58047',
  },
];

export const Default: Story<PieChartProps> = (args) => {
  return (
    <Card header={<Header variant="h2" title="Summary" />}>
      <CardContent disableTopPadding>
        <PieChart {...args} />
      </CardContent>
    </Card>
  );
};

Default.args = {
  height: 270,
  innerRadius: 0.5,
  padAngle: 2,
  data,
};
