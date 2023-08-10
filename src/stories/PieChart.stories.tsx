import { Story } from '@storybook/react';
import { Card, CardContent, Header } from '../layouts';
import { PieChart, PieChartProps } from '../internal/components/PieChart';

export default {
  title: 'PieChart',
  component: PieChart,
};

const data = [
  {
    id: 'Error',
    label: 'Error',
    value: 48,
    color: '#CA4040',
  },
  {
    id: 'Fatal',
    label: 'Fatal',
    value: 52,
    color: '#E6E6E6',
  },
];

type PercentageLabelProps = {
  x: number;
  y: number;
  value: number;
};

const PercentageLabel = ({ x, y, value }: PercentageLabelProps) => (
  <text
    x={x}
    y={y - 20}
    textAnchor="middle"
    dominantBaseline="central"
    style={{
      fontSize: '28px',
      fontWeight: 'bold',
    }}
  >
    {value}%
  </text>
);

export const Default: Story<PieChartProps> = (args) => {
  return (
    <Card header={<Header variant="h2" title="Document compliance" />}>
      <CardContent disableTopPadding>
        <PieChart {...args} />
      </CardContent>
    </Card>
  );
};

Default.args = {
  height: 63,
  width: 125,
  innerRadius: 0.8,
  padAngle: 0,
  data,
  startAngle: -90,
  endAngle: 90,
  animate: false,
  isInteractive: false,
  enableArcLabels: false,
  enableArcLinkLabels: false,
  cornerRadius: 0,
  borderWidth: 0,
  layers: [
    'arcs',
    ({ centerX, centerY, dataWithArc }) => (
      <PercentageLabel x={centerX} y={centerY} value={dataWithArc[0].value} />
    ),
  ],
};
