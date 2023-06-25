import { Story } from '@storybook/react';
import { BarChart, BarChartProps } from '../components/BarChart';
import { Card, CardContent, Header } from '../layouts';

interface Data {
  error: number;
  fatal: number;
  information: number;
  warning: number;
}

export default {
  title: 'BarChart',
  component: BarChart,
};

const data = [
  {
    index: 'error',
    value: 134,
    color: '#ca4040',
  },
  {
    index: 'fatal',
    value: 45,
    color: '#ca4040',
  },
  {
    index: 'information',
    value: 21,
    color: 'purple',
  },
  {
    index: 'warning',
    value: 32,
    color: 'orange',
  },
  {
    index: 'more',
    value: 100,
    color: 'blue',
  },
  {
    index: 'moree',
    value: 215,
    color: 'green',
  },
];

export const Default: Story<BarChartProps> = (args) => {
  return (
    <Card header={<Header variant="h2" title="Summary" />}>
      <CardContent disableTopPadding>
        <BarChart
          keys={['value']}
          indexBy="index"
          ariaLabel="Severity map"
          axisLeft={{
            tickValues: 5,
          }}
          axisBottom={{
            tickSize: 0,
          }}
          gridYValues={[50, 100, 150, 200]}
          {...args}
        />
      </CardContent>
    </Card>
  );
};

Default.args = {
  height: 500,
  data,
};
