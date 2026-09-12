export interface StatItem {
  icon: string;
  label: string;
  value: string;
  prefix?: string;
}

/** The reporting period these numbers cover — shown alongside the stats section. */
export const homeStatsPeriod = "Từ tháng 07-2019 đến 12-2025";

export const homeStats: StatItem[] = [
  { icon: "🍱", value: "19.210", label: "suất ăn 0đ" },
  { icon: "❤️‍🩹", value: "23", label: "trường hợp được hỗ trợ" },
  { icon: "🧧", value: "550", label: "phần Tết cho hoàn cảnh khó khăn" },
  { icon: "🎁", value: "3.845", label: "phần quà cho trẻ em vùng cao" },
  { icon: "🛝", value: "4", label: "khu vui chơi cho trẻ em vùng cao" },
  { icon: "☀️", value: "90", label: "đèn năng lượng mặt trời cho vùng cao", prefix: "Lắp" },
  { icon: "🛒", value: "6.786", label: "lượt đi chợ 0đ" },
  { icon: "😷", value: "10.000", label: "phần thực phẩm hỗ trợ COVID-19", prefix: "Hơn" },
];
