export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export const homeStats: StatItem[] = [
  { label: "Dự án đã triển khai", value: "48" },
  { label: "Tình nguyện viên đồng hành", value: "1.200", suffix: "+" },
  { label: "Trẻ em & hoàn cảnh được hỗ trợ", value: "15.000", suffix: "+" },
  { label: "Tỉnh thành đã đặt chân tới", value: "22" },
];
