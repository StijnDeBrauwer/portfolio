import React, { FC, useEffect, useRef, useState } from 'react';

import { Colors } from 'src/assets';

import { StyledBarChart } from './barChart.style';
import { BarChartProps } from './barChart.type';

const BarChart: FC<BarChartProps> = ({
  width = 100,
  percentage,
  backgroundColor = Colors.accent,
}: BarChartProps) => {
  const [value, setValue] = useState(0);
  const currentPercentage = useRef<number>(1);
  const step = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPercentage.current >= percentage) {
        clearInterval(interval);

        return;
      }

      currentPercentage.current += step;

      setValue(currentPercentage.current);
    }, 1);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [value, currentPercentage, percentage]);

  return (
    <StyledBarChart width={width} backgroundColor={backgroundColor}>
      <div style={{ width: `${value}%` }} className="progress" />
    </StyledBarChart>
  );
};

export default BarChart;
