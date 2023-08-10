type PercentageLabelProps = {
  x: number;
  y: number;
  value: number;
};

export function PercentageLabel({ x, y, value }: PercentageLabelProps) {
  return (
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
}
