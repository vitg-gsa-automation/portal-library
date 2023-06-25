import { BarSvgProps, ResponsiveBar } from '@nivo/bar';

export interface BarChartProps
  extends Omit<BarSvgProps<any>, 'height' | 'width'> {
  height?: number;
}
export function BarChart({
  height,
  axisLeft,
  axisBottom,
  ...props
}: BarChartProps) {
  return (
    <div style={{ height, minHeight: 0, width: '100%', minWidth: 0 }}>
      <ResponsiveBar
        margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={(bar) => bar.data.color}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'severity',
          legendPosition: 'middle',
          legendOffset: 32,
          ...axisBottom,
        }}
        axisLeft={{
          tickValues: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'value',
          legendPosition: 'middle',
          legendOffset: -40,
          ...axisLeft,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'indexes',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 10,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        {...props}
      />
    </div>
  );
}
