import {
  PieChart,
  PieChartData,
  PieChartProps,
} from '../../internal/components/PieChart';
import { PercentageLabel } from './percentage-label';

export interface RadialProgressBarProps extends PieChartProps {
  percent?: number;
}
export function RadialProgressBar({
  percent = 0,
  height,
  width,
}: RadialProgressBarProps) {
  const calculateColor = (percentage: number): string => {
    if (percentage > 75) return '#037f0c';
    if (percentage > 50) return '#e47800';
    return '#CA4040';
  };

  const calculateData = (percentage: number): PieChartData[] => {
    const adjustedPercentage = Math.min(Math.max(percentage, 0), 100);
    const background = 100 - adjustedPercentage;
    return [
      {
        id: 'number',
        label: 'Number',
        value: adjustedPercentage,
        color: calculateColor(adjustedPercentage),
      },
      {
        id: 'background',
        label: 'Background',
        value: background,
        color: '#E6E6E6',
      },
    ];
  };

  const data = calculateData(percent);

  return (
    <PieChart
      data={data}
      height={height}
      width={width}
      innerRadius={0.8}
      padAngle={0}
      startAngle={-90}
      endAngle={90}
      animate={true}
      transitionMode="startAngle"
      motionConfig="slow"
      isInteractive={false}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      cornerRadius={0}
      borderWidth={0}
      layers={[
        'arcs',
        ({ centerX, centerY, dataWithArc }) => (
          <PercentageLabel
            x={centerX}
            y={centerY}
            value={dataWithArc[0].value}
          />
        ),
      ]}
    />
  );
}
