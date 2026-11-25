import type { Activity } from "../types/activity";

export const activities: Activity[] = [
  {
    id: "bep-thien-nguyen-bien-hoa-ky-30",
    slug: "bep-thien-nguyen-bien-hoa-ky-30",
    title: "Bếp Thiện Nguyện Biên Hòa – Kỳ 30",
    summary:
      "Dự kiến trao tặng 200 phần cháo gà xé, sữa đậu nành và trái cây đến bệnh nhân và người nhà tại Bệnh viện Đa khoa Đồng Nai.",
    showDetailSummary: false,
    description: [
      "Tiếp nối hành trình lan tỏa yêu thương, CLB Hơi Ấm Nhân Sinh tổ chức chương trình Bếp Thiện Nguyện Biên Hòa – Kỳ 30, dự kiến trao tặng 200 phần ăn gồm cháo gà xé, sữa đậu nành và trái cây đến các bệnh nhân và người nhà tại Bệnh viện Đa khoa Đồng Nai.",
      "Mỗi phần ăn không chỉ mang đến một bữa ăn ấm lòng mà còn gửi gắm sự quan tâm, sẻ chia và động viên đến những hoàn cảnh đang cần được tiếp thêm sức mạnh.",
    ],
    // Pastel accent tones so the letterboxed poster blends into the card.
    coverGradient: ["#fce4df", "#f2a294"],
    thumbnailImage: "/activities/bep-thien-nguyen-bien-hoa-ky-30.png",
    thumbnailAlt:
      "Poster Bếp Thiện Nguyện Biên Hòa – Kỳ 30: 200 phần cháo gà xé, sữa đậu nành và trái cây, 16h00 Chủ nhật ngày 29 tháng 11 tại Bệnh viện Đa khoa Đồng Nai",
    thumbnailFit: "contain",
    // "Đang diễn ra" = the call for support is open; the event itself is 29/11 at 16h00.
    status: "ongoing",
    featured: true,
    startDate: "2026-11-29",
    startTime: "16h00",
    // Call for support closes, and the activity leaves the lists, 6 hours before the event.
    displayUntil: "2026-11-29T10:00:00+07:00",
    location: "Bệnh viện Đa khoa Đồng Nai",
    tags: ["Bếp ăn", "Biên Hòa"],
    stats: [{ label: "phần ăn", value: "200" }],
    engagementModes: [
      {
        type: "donate_money",
        externalSupportUrl: "https://www.facebook.com/share/p/1EFSfL5a4y/",
      },
    ],
  },
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
    thumbnailImage: "/activities/trung-thu-vung-cao-2026.jpg",
    status: "past",
    featured: true,
    startDate: "2026-09-25",
    endDate: "2026-09-26",
    location: "Làng Đắk - Kơpier, xã Krong, tỉnh Gia Lai",
    tags: ["Trung thu", "Vùng cao", "Trẻ em"],
    stats: [
      { label: "em nhỏ vùng cao", value: "386" },
      { label: "Công trình vui chơi", value: "1" },
      { label: "Phần quà cho các hộ gia đình có hoàn cảnh đặc biệt khó khăn", value: "20" },
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
        branch: "Chi nhánh Hà Nội",
        projectCode: "TTVC",
      },
    ],
  },
  {
    id: "cu-voi-ban-quy-voi-em",
    slug: "cu-voi-ban-quy-voi-em",
    title: "Cũ Với Bạn - Quý Với Em",
    summary:
      "Quyên góp gấu bông cũ còn sử dụng tốt cho trẻ em khó khăn.",
    description: [
      "\"Cũ Với Bạn - Quý Với Em\" là dự án thu gom hiện vật đã qua sử dụng nhưng còn giá trị: gấu bông, đồ chơi.",
      "Toàn bộ hiện vật sau khi được phân loại, làm sạch sẽ được chuyển đến các em nhỏ tại vùng khó khăn thông qua mạng lưới điểm trường đối tác của HANS.",
    ],
    coverGradient: ["#c3edd3", "#f2a294"],
    thumbnailImage: "/activities/cu-voi-ban-quy-voi-em.jpg",
    showDetailSummary: false,
    status: "past",
    featured: true,
    startDate: "2026-08-17",
    endDate: "2026-09-18",
    location: "70 Lê Thánh Tông, Phường Long Thành, Thành phố Đồng Nai.",
    tags: ["Hiện vật", "Sách vở", "Quần áo"],
    engagementModes: [
      {
        type: "donate_goods",
        acceptedItems: [
          "Gấu bông cũ",
          "Đồ chơi mới hoặc đã qua sử dụng (còn dùng được).",
        ],
        dropOffLocations: [
          "70 Lê Thánh Tông, Phường Long Thành, Thành Phố Đồng Nai (CLB Thiện Nguyện Hơi Ấm Nhân Sinh)",
        ],
        supportContacts: [
          { name: "Phan Anh Khoa", phone: "033 772 3200" },
          { name: "Nguyễn Hưng Thịnh", phone: "033 636 2525" },
        ],
        guideline:
          "Nếu được hãy giặt sạch trước giúp tụi mình nhé, vì mùa mưa nên sẽ gặp khó khăn trong việc giặt và phơi các bé gấu cũ",
      },
    ],
  },
  {
    id: "mua-dong-khong-lanh-2025",
    slug: "mua-dong-khong-lanh-2025",
    title: "Mùa Đông Không Lạnh 2025",
    summary:
      "Chiến dịch quyên góp áo ấm, chăn màn và tổ chức đêm nhạc gây quỹ cho trẻ em vùng cao mùa đông năm 2025.",
    description: [
      "Mùa Đông Không Lạnh 2025 đã khép lại thành công với hơn 1.500 áo ấm và 800 chiếc chăn được trao tận tay các em nhỏ tại Lào Cai và Hà Giang.",
      "Chương trình kết hợp giữa quyên góp hiện vật, gây quỹ qua đêm nhạc thiện nguyện và đội tình nguyện viên trực tiếp vận chuyển, trao quà tại các điểm trường.",
    ],
    coverGradient: ["#66cc8c", "#f2a294"],
    status: "past",
    featured: false,
    startDate: "2025-12-05",
    endDate: "2025-12-20",
    location: "Lào Cai & Hà Giang",
    tags: ["Mùa đông", "Áo ấm", "Gây quỹ"],
    stats: [
      { label: "Áo ấm trao tặng", value: "1.500+" },
      { label: "Chăn ấm trao tặng", value: "800" },
      { label: "Tình nguyện viên", value: "65" },
    ],
    engagementModes: [],
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
