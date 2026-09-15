import type { FeaturedProject, ProjectEdition } from "../types/featuredProject";

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "trung-thu-vung-cao",
    title: "Trung Thu Vùng Cao",
    tagline: "Tuổi thơ cho em, hạnh phúc cho ta",
    countLabel: "7 lần tổ chức",
    summary:
      "7 mùa trăng rằm được HANS mang đến với trẻ em vùng cao, từ Đắk Nông, Kon Tum, Đồng Nai đến Đắk Lắk và Gia Lai.",
    hasDetail: true,
    inDashboard: true,
    coverGradient: ["#ffd9d4", "#3fb96d"],
  },
  {
    slug: "hat-giong-vung-cao",
    title: "Hạt Giống Vùng Cao",
    tagline: "Hãy nỗ lực, vì em xứng đáng",
    countLabel: "5 lần tổ chức",
    summary:
      "5 hành trình gieo hạt giống tri thức và yêu thương đến học sinh vùng cao tại Khánh Hòa và Đắk Nông.",
    hasDetail: true,
    inDashboard: true,
    coverGradient: ["#c3edd3", "#3fb96d"],
  },
  {
    slug: "quay-mi-goi-2k",
    title: "Quầy Mì Gói 2K",
    countLabel: "Hoạt động thường xuyên",
    summary:
      "Quầy ăn tự phục vụ 2.000đ mỗi ngày tại Long Thành, đồng hành cùng người lao động, học sinh, sinh viên khó khăn.",
    hasDetail: true,
    inDashboard: false,
    coverGradient: ["#f2a294", "#66cc8c"],
  },
  {
    slug: "bep-an-thien-nguyen",
    title: "Bếp Ăn Thiện Nguyện",
    countLabel: "79 lần tổ chức",
    regions: ["Long Thành", "Biên Hòa", "Sài Gòn"],
    hasDetail: false,
    inDashboard: true,
    coverGradient: ["#97dfb2", "#66cc8c"],
  },
  {
    slug: "tet-yeu-thuong",
    title: "Tết Yêu Thương",
    countLabel: "4 lần tổ chức",
    regions: ["Long Thành", "Biên Hòa", "Sài Gòn"],
    hasDetail: false,
    inDashboard: true,
    coverGradient: ["#fce4df", "#de5a44"],
  },
  {
    slug: "truong-hop-kho-khan",
    title: "Trường Hợp Khó Khăn",
    countLabel: "23 trường hợp được hỗ trợ",
    summary: "Trợ giúp bệnh hiểm nghèo, tai nạn, hoàn cảnh khó khăn.",
    hasDetail: false,
    inDashboard: true,
    coverGradient: ["#c3edd3", "#f2a294"],
  },
  {
    slug: "ung-pho-covid19",
    title: "Hoạt Động Ứng Phó COVID-19",
    countLabel: "2 chương trình",
    subPrograms: ["Phiên chợ thực phẩm 0 đồng", "Chuyến xe yêu thương"],
    hasDetail: false,
    inDashboard: true,
    coverGradient: ["#97dfb2", "#3fb96d"],
  },
];

export function getFeaturedProjectBySlug(slug: string) {
  return featuredProjects.find((p) => p.slug === slug);
}

export function getDashboardHighlights() {
  return featuredProjects.filter((p) => p.inDashboard);
}

export const trungThuEditions: ProjectEdition[] = [
  { label: "Lần 1", date: "07/09/2019", location: "Xã Đắk Som, Huyện Đắk Glong", giftCount: "400 phần quà" },
  {
    label: "Lần 2",
    date: "26/09/2020",
    location: "Làng dân tộc, huyện Kon Rẫy, Kon Tum",
    giftCount: "250 phần quà",
  },
  {
    label: "Lần 3",
    date: "21/09/2021",
    location: "Phòng trọ, khu cách ly thị trấn Hiệp Phước, Nhơn Trạch, Đồng Nai",
    giftCount: "50 phần quà",
  },
  {
    label: "Lần 4",
    date: "10/09/2022",
    location: "Buôn Tleh, xã Dliê Ya, Huyện Krông Năng, Tỉnh Đắk Lắk",
    giftCount: "300 phần quà",
  },
  {
    label: "Lần 5",
    date: "16/09/2023",
    location: "Nleek Dăm - Thôn Đắk Sar, Xã Đắk Nuê, Huyện Lắk, Đắk Lắk",
    giftCount: "500 phần quà",
  },
  {
    label: "Lần 6",
    date: "07/09/2024",
    location: "Xã Cư San, Huyện M'Drắk, Tỉnh Đắk Lắk",
    giftCount: "670 phần quà",
  },
  {
    label: "Lần 7",
    location: "Trường TH - THCS Đinh Núp, xã Pờ Tó, tỉnh Gia Lai",
    giftCount: "462 phần quà",
  },
];

export const hatGiongEditions: ProjectEdition[] = [
  {
    label: "Lần 1",
    date: "28/05/2022",
    location: "Huyện Khánh Sơn, tỉnh Khánh Hòa",
    giftCount: "285 phần quà",
  },
  {
    label: "Lần 2",
    date: "20/05/2023",
    location: "Làng dân tộc H'mông, xã Đắk Rmăng, huyện Đắk Song, tỉnh Đắk Nông",
    giftCount: "190 phần quà",
  },
  {
    label: "Lần 3",
    date: "21/09/2024",
    location: "Trường tiểu học Giang Ly (xã Giang Ly, huyện Khánh Vĩnh, tỉnh Khánh Hòa)",
    giftCount: "345 phần quà",
  },
  {
    label: "Lần 4",
    date: "30/05/2025",
    location: "Thôn 5, xã Đắk Plao, huyện Đắk Glong, tỉnh Đắk Nông",
    giftCount: "392 phần quà",
  },
  {
    label: "Lần 5",
    date: "30/05/2025",
    location: "Phú Mỡ - Đắk Lắk (Phú Yên cũ)",
    giftCount: "145 phần quà",
  },
];

export const quayMiGoiInfo = {
  organization:
    "CLB Thiện nguyện Hơi Ấm Nhân Sinh (trực thuộc Hội Liên hiệp Thanh niên Việt Nam huyện Long Thành)",
  startDate: "02/12/2024",
  openingHours: "08:00 – 18:30 mỗi ngày",
  location:
    "Tìm kiếm trên Google Maps theo tên \"CLB Thiện Nguyện Hơi Ấm Nhân Sinh\" (khu vực Long Thành, Đồng Nai)",
  format: [
    "Mô hình tự phục vụ, tạo không gian thoải mái cho người dùng mà không cần chụp hình liên tục.",
    "Món ăn gồm mì, hủ tiếu, cháo, phở (tùy đợt), xúc xích, rau, trà đá... Đôi khi có mì Ý, bún xào, mì xào.",
    "Chi phí: 2.000 VNĐ (nếu không có thì tặng miễn phí).",
  ],
  fundUsage: [
    { percent: "20%", description: "duy trì quầy ăn mỗi ngày" },
    { percent: "80%", description: "trích lập quỹ, tích góp đến cuối năm để tặng quà hoặc xây nhà tình thương" },
  ],
  audience: "Người có thu nhập thấp, học sinh, sinh viên xa nhà, hoặc bất kỳ ai đang gặp khó khăn.",
  leadTeam: [
    "Phan Ngọc Trâm Anh",
    "Võ Công Hậu",
    "Dương Vũ Quỳnh Như",
    "Phan Anh Khoa",
    "Nguyễn Như Ý",
    "Nguyễn Hưng Thịnh",
  ],
  weeklyTeam: ["Phan Văn Hoàng", "Bùi Thị Mộng Diễm", "Chu Thị Lan Anh", "Tăng Thị Thuỳ Trang", "Võ Hữu Lộc"],
};
