import { ResponsivePie, PieSvgProps } from '@nivo/pie';

export interface PieChartData {
  id: any;
  label: string;
  value: number;
  color: string;
}

export interface PieChartProps
  extends Omit<PieSvgProps<PieChartData>, 'height' | 'width'> {
  height: number;
  width?: number;
}
export function PieChart({ height, width, ...props }: PieChartProps) {
  return (
    <div
      style={{
        height: height || '100%',
        minHeight: 0,
        width: width || '100%',
        minWidth: 0,
      }}
    >
      <ResponsivePie
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={4}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        colors={(pie) => pie.data.color}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 10,
            itemWidth: 75,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 15,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
        {...props}
      />
    </div>
  );
}
