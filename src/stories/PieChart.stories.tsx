import { Story } from '@storybook/react';
import { Card, CardContent, Header } from '../layouts';
import { PieChart, PieChartProps } from '../components/PieChart';

export default {
  title: 'PieChart',
  component: PieChart,
};

const data = [
  {
    id: 'OK',
    label: 'OK',
    value: 78,
    color: '#8CC37E',
  },
  {
    id: 'Concerns',
    label: 'Concerns',
    value: 8,
    color: '#C25C5C',
  },
];

export const Default: Story<PieChartProps> = (args) => {
  return (
    <Card header={<Header variant="h2" title="Report overview" />}>
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
