export interface BarChartProps {
  /** width: represents the width expressed in percentage of the bar (default: 100)*/
  width?: number;
  /** percentage: represents the filled part of the bar (expressed in decimals) e.g. 10 */
  percentage: number;
  /** (optional) backgroundColor: background color of filled part */
  backgroundColor?: string;
}
