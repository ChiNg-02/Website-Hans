export interface Achievement {
  year: string;
  title: string;
  issuer: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "Bằng khen \"Tổ chức thanh niên tiêu biểu\"",
    issuer: "Trung ương Đoàn TNCS Hồ Chí Minh",
    description:
      "Ghi nhận đóng góp của HANS trong công tác thiện nguyện vì cộng đồng giai đoạn 2023 - 2025.",
  },
  {
    year: "2024",
    title: "Giải thưởng \"Tình nguyện Quốc gia\"",
    issuer: "Trung ương Hội Liên hiệp Thanh niên Việt Nam",
    description: "Vinh danh dự án Mùa Đông Không Lạnh vì tác động cộng đồng nổi bật.",
  },
  {
    year: "2023",
    title: "Chứng nhận \"Đơn vị đồng hành vì trẻ em vùng cao\"",
    issuer: "Quỹ Bảo trợ Trẻ em Việt Nam",
    description: "Ghi nhận 3 năm liên tục triển khai chương trình Trung Thu Vùng Cao.",
  },
  {
    year: "2022",
    title: "Top 10 CLB - Đội - Nhóm tình nguyện tiêu biểu",
    issuer: "Thành Đoàn TP. Hồ Chí Minh",
    description: "Bình chọn dựa trên số lượng dự án và mức độ lan tỏa trong cộng đồng sinh viên.",
  },
];
