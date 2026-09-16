import type { Activity } from "../types/activity";

export const activities: Activity[] = [
  {
    id: "trung-thu-vung-cao-2026",
    slug: "trung-thu-vung-cao-2026",
    title: "Trung Thu Vùng Cao 2026",
    summary:
      "Mang ánh trăng rằm và những chiếc đèn lồng đến với trẻ em vùng cao làng Đắk - Kơpier, xã Krong, tỉnh Gia Lai.",
    description: [
      "Trung Thu Vùng Cao là hoạt động thường niên của HANS, tổ chức đêm hội trăng rằm cho trẻ em tại các điểm trường vùng cao còn nhiều khó khăn.",
      "Năm 2026, chương trình sẽ diễn ra tại  làng Đắk - Kơpier, xã Krong, tỉnh Gia Lai với các hoạt động: rước đèn, phá cỗ, trao quà và học bổng cho học sinh có hoàn cảnh khó khăn.",
      "HANS cần tình nguyện viên đồng hành trong khâu chuẩn bị, di chuyển và tổ chức chương trình, đồng thời kêu gọi ủng hộ kinh phí để mua lồng đèn, bánh kẹo.",
    ],
    coverGradient: ["#ffd9d4", "#3fb96d"],
    coverImage: "/769144644_28199483976406534_1958717036018359643_n.jpeg",
    status: "ongoing",
    featured: true,
    startDate: "2026-09-25",
    endDate: "2026-09-26",
    location: "Làng Đắk - Kơpier, xã Krong, tỉnh Gia Lai",
    tags: ["Trung thu", "Vùng cao", "Trẻ em"],
    stats: [
      { label: "em nhỏ vùng cao", value: "386" },
      { label: "công trình vui chơi", value: "1" },
      { label: "phần quà cho các hộ gia đình có hoàn cảnh đặc biệt khó khăn", value: "20" },
    ],
    engagementModes: [
      {
        type: "volunteer",
        roles: ["Hậu cần", "Truyền thông", "Tổ chức hoạt động thiếu nhi"],
        note: "Ưu tiên bạn có thể sắp xếp thời gian di chuyển lên Gia Lai 3 ngày 2 đêm.",
        deadline: "2026-09-15",
      },
      {
        type: "donate_money",
        bankName: "Vietcombank",
        accountNumber: "0401001497476",
        accountHolder: "CLB THIEN NGUYEN HOI AM NHAN SINH",
        branch: "Chi nhánh Hồ Chí Minh",
        note: "Toàn bộ kinh phí được dùng để mua lồng đèn, bánh kẹo và học bổng cho các em.",
      },
      {
        type: "donate_goods",
        acceptedItems: [
          "Lồng đèn Trung Thu còn mới",
          "Bánh kẹo, sữa và đồ ăn nhẹ còn hạn sử dụng",
          "Đồ dùng học tập và quà tặng cho trẻ em",
        ],
        dropOffLocations: [
          "Long Thành - 0979902678 (Như)",
          "Biên Hoà - 0939710728 (Chị Phương Vy)",
          "Sài Gòn - 0931674603 (Chị Nhuận Hiếu)",
        ],
        guideline:
          "Vui lòng gửi hiện vật còn mới, sạch và còn hạn sử dụng. HANS sẽ phân loại và chuyển đến các em nhỏ tại Gia Lai.",
      },
    ],
  },
  {
    id: "cu-voi-ban-quy-voi-em",
    slug: "cu-voi-ban-quy-voi-em",
    title: "Cũ Với Bạn – Quý Với Em",
    summary:
      "Quyên góp gấu bông cũ còn sử dụng tốt cho trẻ em khó khăn.",
    description: [
      "\"Cũ Với Bạn – Quý Với Em\" là dự án thu gom hiện vật đã qua sử dụng nhưng còn giá trị: gấu bông.",
      "Toàn bộ hiện vật sau khi được phân loại, làm sạch sẽ được chuyển đến các em nhỏ tại vùng khó khăn thông qua mạng lưới điểm trường đối tác của HANS.",
    ],
    coverGradient: ["#c3edd3", "#f2a294"],
    coverImage: "/775825135_1667373812061029_2963839198355845022_n.jpeg",
    status: "ongoing",
    featured: true,
    startDate: "2026-08-17",
    endDate: "2026-09-18",
    location: "Điểm thu gom tại 70 Lê Thánh Tông, Phường Long Thành, Thành phố Đồng Nai",
    tags: ["Hiện vật", "Thú nhồi bông", "Trung thu"],
    stats: [
    ],
    engagementModes: [
      {
        type: "donate_goods",
        acceptedItems: [
          "Sách giáo khoa, truyện thiếu nhi còn nguyên vẹn",
          "Quần áo trẻ em sạch, còn sử dụng tốt",
          "Cặp sách, đồ dùng học tập",
        ],
        dropOffLocations: [
          "Long Thành - 0979902678 (Như)",
          "Biên Hoà - 0939710728 (Chị Phương Vy)",
          "Sài Gòn - 0931674603 (Chị Nhuận Hiếu)",
        ],
        guideline:
          "Vui lòng phân loại và làm sạch hiện vật trước khi gửi. Có thể gửi trực tiếp tại các điểm thu gom ",
      },
    ],
  },
];

export function getActivityBySlug(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}

export function getFeaturedActivities() {
  return activities.filter((activity) => activity.featured);
}

export function getUpcomingAndOngoing() {
  return activities.filter(
    (activity) => activity.status === "upcoming" || activity.status === "ongoing",
  );
}

export function getPastActivities() {
  return activities.filter((activity) => activity.status === "past");
}
