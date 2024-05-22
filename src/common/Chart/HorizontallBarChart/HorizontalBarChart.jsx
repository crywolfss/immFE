import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  width: 400,
  height: 300,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: '1',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: '2',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: '3',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: '4',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: '5',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: '6',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: '7',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: '8',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: '9',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: '10',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBarChart() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
