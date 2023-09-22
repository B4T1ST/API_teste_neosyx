import React, { FC, useState, useMemo } from 'react';

import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Text } from '@visx/text';

type DataPoint = {
    atividade: string;
    pontos: number;
};

const initialData: DataPoint[] = [
    {atividade: 'Front',  pontos: 10 },
    {atividade: 'Back',  pontos: 20 },
    {atividade: 'analista', pontos: 30 },
    {atividade: 'dba', pontos: 40 },
    {atividade: 'cientista de dados', pontos: 50 },
];

const ChartPage: FC = () => {
  const [data, setData] = useState<DataPoint[]>(initialData);

  const width = 800;
  const height = 500;
  const margin = { top: 20, bottom: 40, left: 60, right: 20 };

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(d => d.atividade),
        padding: 0.4,
      }),
    [xMax, data],
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(d => d.pontos))],
      }),
    [yMax, data],
  );

  return (
    <div>
      <h1>Gráfico para nivel de atividade</h1>
      {/* Campos de entrada para os valores */}
      
      {/* Renderização do gráfico */}
      {width >= 10 && (
        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            {data.map(d => {
              const label = d.atividade;
              const barWidth = 10;
              const barHeight = yMax - (yScale(d.pontos) ?? 0);
              const barX = xScale(label);
              const barY = yMax - barHeight;
              return (
                <Bar
                  key={`bar-${label}`}
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill="rgba(18, 75, 148, 255)"
                />
              );
            })}
            {/* Resto das legendas e renderização do gráfico */}
            {xScale.domain().map((label, index) => {
              const barX = xScale(label)?.valueOf() || 0 + xScale.bandwidth() / 2;
              const barY = yMax + 10; // Espaçamento entre a legenda e o eixo x
              return (
                <Text
                  key={`label-${label}`}
                  x={barX}
                  y={barY}
                  dy=".33em"
                  fontSize={10}
                  textAnchor="middle"
                  fill="#333"
                >
                  {label}
                </Text>
              );
            })}
            {/* Legendas no eixo y */}
            {yScale.ticks().map((tickValue, index) => {
              const tickX = -10; // Espaçamento entre a legenda e o eixo y
              const tickY = yScale(tickValue);
              return (
                <Text
                  key={`tick-${tickValue}`}
                  x={tickX}
                  y={tickY}
                  dy=".33em"
                  fontSize={10}
                  textAnchor="end"
                  fill="#333"
                >
                  {tickValue}
                </Text>
              );
            })}
          </Group>
        </svg>
      )}
    </div>
  );
};

export default ChartPage;