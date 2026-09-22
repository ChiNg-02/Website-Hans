export interface Achievement {
  issuer: string;
  description: string;
  /** Path to a photo of the certificate/award. Falls back to a placeholder when omitted. */
  image?: string;
}

export const achievements: Achievement[] = [
  {
    issuer: "Ban Chấp hành Trung ương Đoàn TNCS Hồ Chí Minh",
    description: "Đã có thành tích xuất sắc trong công tác phòng, chống dịch bệnh COVID-19.",
    image: "/achievements/1/01.jpg",
  },
  {
    issuer: "Hội Liên hiệp Thanh niên Việt Nam tỉnh Đồng Nai - Ủy ban Hội huyện Long Thành",
    description: "Đạt thành tích xuất sắc trong công tác tình nguyện huyện Long Thành năm 2020.",
    image: "/achievements/2/02.jpg",
  },
  {
    issuer: "Ban Chấp hành Đoàn TNCS Hồ Chí Minh tỉnh Đồng Nai",
    description:
      "Đã có thành tích xuất sắc trong công tác tham gia phòng, chống dịch COVID-19 trên địa bàn tỉnh Đồng Nai.",
    image: "/achievements/3/03.jpg",
  },
  {
    issuer: "Chủ tịch Ủy ban nhân dân huyện Long Thành, tỉnh Đồng Nai",
    description:
      "Đạt thành tích tiêu biểu trong công tác Hội và phong trào thanh niên huyện Long Thành, giai đoạn 2019 - 2024.",
    image: "/achievements/4/04.jpg",
  },
  {
    issuer: "Hội Liên hiệp Thanh niên Việt Nam huyện Nhơn Trạch",
    description: "Thành tích xuất sắc trong phong trào thanh niên tình nguyện huyện Nhơn Trạch năm 2019.",
    image: "/achievements/5/05.jpg",
  },
  {
    issuer: "Chủ tịch Ủy ban nhân dân tỉnh Đồng Nai",
    description: "Đã có thành tích xuất sắc trong phong trào \"Người tốt, việc tốt\" năm 2022.",
    image: "/achievements/6/06.jpg",
  },
  {
    issuer: "Ban Chấp hành Đoàn TNCS Hồ Chí Minh tỉnh Đồng Nai",
    description: "Thành tích xuất sắc trong phong trào tình nguyện tỉnh Đồng Nai năm 2023.",
    image: "/achievements/7/07.jpg",
  },
  {
    issuer: "Hội Liên hiệp Thanh niên tỉnh Đồng Nai – Ủy ban Hội huyện Long Thành",
    description: "Đội hình có nhiều thành tích xuất sắc trong công tác Tình nguyện vì cộng đồng năm 2022.",
    image: "/achievements/8/08.jpg",
  },
  {
    issuer: "Ban Chấp hành Đoàn TNCS Hồ Chí Minh tỉnh Đồng Nai",
    description: "Đạt Giải thưởng tình nguyện cấp tỉnh năm 2024.",
    image: "/achievements/9/09.jpg",
  },
  {
    issuer: "Chủ tịch Ủy ban nhân dân huyện Long Thành, tỉnh Đồng Nai",
    description: "Thành tích tiêu biểu trong công tác Hội và phong trào thanh niên huyện Long Thành hè 2024.",
    image: "/achievements/10/10.jpg",
  },
  {
    issuer: "Ủy ban Trung ương Hội Liên hiệp Thanh niên Việt Nam",
    description: "Thành tích xuất sắc trong hoạt động tình nguyện vì cộng đồng năm 2024.",
    image: "/achievements/11/11.jpg",
  },
];
