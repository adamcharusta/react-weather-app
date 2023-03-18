export type ChartDataType = {
  name: string;
  value: number;
};

export type TabPanelDataType = {
  label: string;
  data: ChartDataType[];
};
