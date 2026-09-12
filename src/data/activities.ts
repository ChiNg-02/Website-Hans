import type { Activity } from "../types/activity";

export const activities: Activity[] = [
  {
    id: "trung-thu-vung-cao-2026",
    slug: "trung-thu-vung-cao-2026",
    title: "Trung Thu Vùng Cao 2026",
    summary:
      "Mang ánh trăng rằm và những chiếc đèn lồng đến với trẻ em vùng cao Hà Giang.",
    description: [
      "Trung Thu Vùng Cao là hoạt động thường niên của HANS, tổ chức đêm hội trăng rằm cho trẻ em tại các điểm trường vùng cao còn nhiều khó khăn.",
      "Năm 2026, chương trình sẽ diễn ra tại xã Sủng Là, Hà Giang với các hoạt động: rước đèn, phá cỗ, trao quà và học bổng cho học sinh có hoàn cảnh khó khăn.",
      "HANS cần tình nguyện viên đồng hành trong khâu chuẩn bị, di chuyển và tổ chức chương trình, đồng thời kêu gọi ủng hộ kinh phí để mua lồng đèn, bánh kẹo và học bổng.",
    ],
    coverGradient: ["#ffd9d4", "#3fb96d"],
    status: "ongoing",
    featured: true,
    startDate: "2026-09-25",
    endDate: "2026-09-27",
    location: "Xã Sủng Là, Hà Giang",
    tags: ["Trung thu", "Vùng cao", "Trẻ em"],
    stats: [
      { label: "Trẻ em nhận quà", value: "500+" },
      { label: "Điểm trường", value: "4" },
      { label: "Tình nguyện viên cần", value: "30" },
    ],
    engagementModes: [
      {
        type: "volunteer",
        roles: ["Hậu cần", "Truyền thông", "Tổ chức hoạt động thiếu nhi"],
        note: "Ưu tiên bạn có thể sắp xếp thời gian di chuyển lên Hà Giang 3 ngày 2 đêm.",
        deadline: "2026-09-15",
      },
      {
        type: "donate_money",
        bankName: "Vietcombank",
        accountNumber: "0071000123456",
        accountHolder: "CLB THIEN NGUYEN HOI AM NHAN SINH",
        branch: "Chi nhánh Hà Nội",
        note: "Toàn bộ kinh phí được dùng để mua lồng đèn, bánh kẹo và học bổng cho các em.",
      },
    ],
  },
  {
    id: "cu-voi-ban-quy-voi-em",
    slug: "cu-voi-ban-quy-voi-em",
    title: "Cũ Với Bạn – Quý Với Em",
    summary:
      "Quyên góp sách vở, quần áo, đồ dùng học tập cũ còn sử dụng tốt cho trẻ em khó khăn.",
    description: [
      "\"Cũ Với Bạn – Quý Với Em\" là dự án thu gom hiện vật đã qua sử dụng nhưng còn giá trị: sách giáo khoa, truyện thiếu nhi, quần áo, cặp sách, đồ dùng học tập.",
      "Toàn bộ hiện vật sau khi được phân loại, làm sạch sẽ được chuyển đến các em nhỏ tại vùng khó khăn thông qua mạng lưới điểm trường đối tác của HANS.",
      "Đây là dự án chỉ nhận ủng hộ hiện vật, không tổ chức đăng ký tình nguyện viên trực tiếp cho hoạt động thu gom.",
    ],
    coverGradient: ["#c3edd3", "#f2a294"],
    status: "ongoing",
    featured: true,
    startDate: "2026-08-01",
    endDate: "2026-10-31",
    location: "Điểm thu gom tại Hà Nội, Đà Nẵng, TP.HCM",
    tags: ["Hiện vật", "Sách vở", "Quần áo"],
    stats: [
      { label: "Hiện vật đã nhận", value: "3.200" },
      { label: "Điểm thu gom", value: "6" },
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
          "Văn phòng HANS Hà Nội - 12 Nguyễn Trãi, Thanh Xuân",
          "Văn phòng HANS Đà Nẵng - 45 Nguyễn Văn Linh, Hải Châu",
          "Văn phòng HANS TP.HCM - 88 Cách Mạng Tháng 8, Quận 3",
        ],
        contactPerson: "Ngọc Anh",
        contactPhone: "0912 345 678",
        guideline:
          "Vui lòng phân loại và làm sạch hiện vật trước khi gửi. Có thể gửi trực tiếp tại các điểm thu gom hoặc liên hệ để được hỗ trợ thu gom tận nơi với đơn hàng từ 10kg trở lên.",
      },
    ],
  },
  {
    id: "bua-com-yeu-thuong",
    slug: "bua-com-yeu-thuong",
    title: "Bữa Cơm Yêu Thương",
    summary:
      "Nấu và trao tặng những suất cơm ấm nóng cho bệnh nhân nghèo tại các bệnh viện.",
    description: [
      "Bữa Cơm Yêu Thương là hoạt động định kỳ hàng tuần, tổ chức nấu và phát cơm miễn phí cho bệnh nhân và người nhà có hoàn cảnh khó khăn tại các bệnh viện lớn.",
      "Hoạt động cần tình nguyện viên tham gia trực tiếp các khâu: đi chợ, sơ chế, nấu ăn, đóng gói và phát cơm tận tay bệnh nhân.",
    ],
    coverGradient: ["#97dfb2", "#66cc8c"],
    status: "ongoing",
    featured: false,
    startDate: "2026-01-06",
    location: "Bệnh viện Ung Bướu, TP.HCM",
    tags: ["Bệnh viện", "Ẩm thực", "Định kỳ"],
    stats: [
      { label: "Suất cơm mỗi tuần", value: "300" },
      { label: "Tuần đã thực hiện", value: "38" },
    ],
    engagementModes: [
      {
        type: "volunteer",
        roles: ["Đi chợ & sơ chế", "Nấu ăn", "Đóng gói & phát cơm"],
        note: "Hoạt động diễn ra vào sáng thứ Bảy hàng tuần, từ 5h30 đến 9h00.",
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
  {
    id: "sach-cho-em-vung-cao",
    slug: "sach-cho-em-vung-cao",
    title: "Sách Cho Em Vùng Cao",
    summary:
      "Xây dựng tủ sách cộng đồng và kêu gọi ủng hộ tiền mặt để duy trì hoạt động thư viện tại điểm trường.",
    description: [
      "Dự án xây dựng và duy trì 10 tủ sách cộng đồng tại các điểm trường vùng cao, giúp các em nhỏ tiếp cận với sách vở ngoài giờ học.",
      "HANS cần tình nguyện viên hỗ trợ phân loại, đóng gói sách và ủng hộ kinh phí để mua sắm giá sách, bảo trì tủ sách định kỳ.",
    ],
    coverGradient: ["#c3edd3", "#3fb96d"],
    status: "upcoming",
    featured: false,
    startDate: "2026-10-10",
    location: "10 điểm trường tại Sơn La, Yên Bái",
    tags: ["Giáo dục", "Sách", "Thư viện"],
    engagementModes: [
      {
        type: "volunteer",
        roles: ["Phân loại sách", "Vận chuyển", "Trang trí tủ sách"],
      },
      {
        type: "donate_money",
        bankName: "Techcombank",
        accountNumber: "19036789012345",
        accountHolder: "CLB THIEN NGUYEN HOI AM NHAN SINH",
        note: "Kinh phí dùng để mua sắm giá sách và bảo trì tủ sách định kỳ.",
      },
      {
        type: "donate_goods",
        acceptedItems: ["Sách thiếu nhi", "Truyện tranh giáo dục", "Kệ sách còn tốt"],
        dropOffLocations: ["Văn phòng HANS Hà Nội - 12 Nguyễn Trãi, Thanh Xuân"],
        guideline: "Ưu tiên sách còn mới trên 70%, nội dung phù hợp lứa tuổi tiểu học và THCS.",
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
