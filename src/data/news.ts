import type { NewsArticle, NewsImage } from "../types/news";

const TTVC_2026_DIR = "/news/tuoi-tho-cho-em-08-2026";

const ttvc2026 = {
  hero: {
    src: `${TTVC_2026_DIR}/hero.jpg`,
    alt: "Em nhỏ Đắk Kơpier cầm lồng đèn đi giữa hai hàng tình nguyện viên HANS áo cam trong đêm Trung Thu",
    width: 2048,
    height: 1368,
  },
  gifts: {
    src: `${TTVC_2026_DIR}/386-phan-qua.jpg`,
    alt: "Infographic Trung Thu Vùng Cao 2026: 386 phần quà, mỗi phần gồm sữa, snack, bánh Trung Thu, lồng đèn, kẹo và áo đông",
    width: 1254,
    height: 1254,
  },
  preparing: {
    src: `${TTVC_2026_DIR}/chuan-bi-qua.jpg`,
    alt: "Tình nguyện viên HANS chuyển những thùng quà lên xe trong đêm trước chuyến đi",
    width: 206,
    height: 206,
  },
  moment1: {
    src: `${TTVC_2026_DIR}/khoanh-khac-1.jpg`,
    alt: "Tình nguyện viên HANS hóa trang chú Cuội và chị Hằng chụp ảnh cùng người dân và các em nhỏ",
    width: 1366,
    height: 2048,
  },
  moment2: {
    src: `${TTVC_2026_DIR}/khoanh-khac-2.jpg`,
    alt: "Các em nhỏ chơi trò ném vòng cùng tình nguyện viên HANS tại sân chơi Trung Thu",
    width: 1152,
    height: 2048,
  },
  moment3: {
    src: `${TTVC_2026_DIR}/khoanh-khac-3.jpg`,
    alt: "Một em nhỏ Đắk Kơpier đang ăn bữa trưa cùng hộp sữa trong chương trình",
    width: 1368,
    height: 2048,
  },
  album: {
    src: `${TTVC_2026_DIR}/album.jpg`,
    alt: "Tình nguyện viên HANS bế em nhỏ, những bàn tay chồng lên nhau và ảnh nhóm cùng các em nhỏ vùng cao",
    width: 1152,
    height: 2048,
  },
} satisfies Record<string, NewsImage>;

export const newsArticles: NewsArticle[] = [
  {
    slug: "tuoi-tho-cho-em-hanh-phuc-cho-ta-lan-08-2026",
    title:
      "Tuổi thơ cho em, hạnh phúc cho ta lần 08-2026: 386 phần quà đến với các em nhỏ Đắk Kơpier",
    excerpt:
      "Năm 2026, Hơi Ấm Nhân Sinh lại tiếp tục hành trình “Tuổi thơ cho em, hạnh phúc cho ta” tại Đắk Kơpier.",
    category: "Trung Thu Vùng Cao",
    cover: ttvc2026.hero,
    blocks: [
      {
        kind: "lead",
        paragraphs: [
          "Năm 2026, Hơi Ấm Nhân Sinh lại tiếp tục hành trình “Tuổi thơ cho em, hạnh phúc cho ta” tại Đắk Kơpier.",
          "Đây đã là mùa thứ 8 HANS cùng các tình nguyện viên, mạnh thường quân và những người đồng hành chuẩn bị một mùa Trung Thu vùng cao dành cho các em nhỏ. Vẫn là những chiếc bánh, chiếc lồng đèn, những món quà nhỏ quen thuộc, nhưng mỗi năm trở lại, niềm vui khi được cùng nhau chuẩn bị và trao tận tay các em vẫn luôn thật đặc biệt.",
        ],
      },

      { kind: "heading", text: "386 phần quà cho một mùa Trung Thu đủ đầy hơn" },
      {
        kind: "split",
        image: ttvc2026.gifts,
        imageSide: "right",
        blocks: [
          {
            kind: "paragraph",
            text: "Trong hành trình thiện nguyện vùng cao năm nay, HANS chuẩn bị 386 phần quà dành tặng các em thiếu nhi tại Đắk Kơpier.",
          },
          { kind: "paragraph", text: "Mỗi phần quà có giá trị dự kiến 185.000 đồng, gồm:" },
          { kind: "list", items: ["Sữa", "Snack", "Bánh Trung Thu", "Lồng đèn pin", "Kẹo", "Áo đông"] },
          { kind: "paragraph", text: "Tổng giá trị 386 phần quà khoảng 71,4 triệu đồng." },
        ],
      },
      {
        kind: "highlight",
        text: "Đó đều là những món quà rất giản dị. Nhưng HANS mong rằng khi được trao đến tay các em, mỗi phần quà sẽ góp thêm một chút niềm vui cho mùa Trung Thu: có bánh để ăn, có lồng đèn để chơi, có chiếc áo ấm để mặc và có thêm một kỷ niệm đẹp để nhớ về.",
      },

      { kind: "heading", text: "Hành trình từ những phần quà được chuẩn bị đến lúc trao tận tay" },
      {
        kind: "split",
        image: ttvc2026.preparing,
        imageSide: "left",
        imageSize: "compact",
        blocks: [
          { kind: "paragraph", text: "Đằng sau 386 phần quà là nhiều ngày cùng nhau chuẩn bị." },
          {
            kind: "paragraph",
            text: "Từ việc kêu gọi sự chung tay của cộng đồng, tập hợp vật phẩm, phân loại, đóng gói cho đến vận chuyển quà tới Đắk Kơpier, mỗi công đoạn đều có sự góp sức của các tình nguyện viên và những người đồng hành cùng HANS.",
          },
        ],
      },
      {
        kind: "paragraph",
        text: "Rồi những phần quà ấy cùng đoàn đi qua một chặng đường dài để đến với các em nhỏ.",
      },
      {
        kind: "paragraph",
        text: "Tại Đắk Kơpier, các tình nguyện viên cùng nhau tổ chức những hoạt động Trung Thu, vui chơi với các em và trao từng phần quà đã được chuẩn bị từ trước.",
      },
      {
        kind: "gallery",
        images: [ttvc2026.moment1, ttvc2026.moment2, ttvc2026.moment3],
      },
      {
        kind: "paragraph",
        text: "Có những khoảnh khắc rất nhỏ nhưng luôn khiến chuyến đi trở nên đáng nhớ: ánh mắt háo hức khi nhận lồng đèn, niềm vui khi mở một phần quà hay những buổi chiều các em cùng nhau chạy chơi.",
      },
      {
        kind: "highlight",
        text: "Có lẽ đó cũng là lý do hành trình thiện nguyện này đã được tiếp nối suốt 8 năm.",
      },

      {
        kind: "stats",
        eyebrow: "Impact",
        heading: "Những con số của hành trình 08-2026",
        backgroundImage: ttvc2026.hero.src,
        items: [
          { value: "386", label: "phần quà được chuẩn bị cho các em nhỏ" },
          { value: "185.000", label: "đồng/phần quà là giá trị dự kiến" },
          { prefix: "Khoảng", value: "71,4", label: "triệu đồng tổng giá trị quà tặng" },
          { value: "6", label: "nhóm vật phẩm trong mỗi phần quà" },
          {
            value: "8",
            label: "năm HANS tiếp tục hành trình “Tuổi thơ cho em, hạnh phúc cho ta”",
          },
        ],
      },

      { kind: "heading", text: "Những khoảnh khắc của một mùa trăng" },
      {
        kind: "split",
        image: ttvc2026.album,
        imageSide: "right",
        blocks: [
          {
            kind: "paragraph",
            text: "Những hình ảnh và video được lưu lại trong album chương trình năm 2026.",
          },
          {
            kind: "paragraph",
            text: "Album “Tuổi thơ cho em, hạnh phúc cho ta lần 08-2026” lưu lại những hình ảnh và video xuyên suốt hành trình: từ những ngày chuẩn bị, lúc đoàn lên đường, những buổi gặp gỡ các em nhỏ cho đến khi từng phần quà được trao đi.",
          },
          {
            kind: "highlight",
            text: "Sau 8 năm, điều HANS mong muốn vẫn rất giản dị: để một em nhỏ có thêm một chiếc lồng đèn trong đêm Trung Thu, thêm một món quà để vui, thêm một chiếc áo để mặc khi trời lạnh và thêm một ký ức đẹp trong những năm tháng tuổi thơ.",
          },
          {
            kind: "paragraph",
            text: "Còn với những người đồng hành, mỗi chuyến thiện nguyện vùng cao cũng là một lần được gặp gỡ, sẻ chia và mang về những niềm vui rất riêng.",
          },
          {
            kind: "paragraph",
            text: "Hơi Ấm Nhân Sinh xin cảm ơn các mạnh thường quân, tình nguyện viên và tất cả những người đã cùng góp sức để hành trình “Tuổi thơ cho em, hạnh phúc cho ta lần 08-2026” được tiếp tục.",
          },
        ],
      },
    ],
    ctas: [
      {
        label: "Xem toàn bộ album hành trình",
        href: "https://www.facebook.com/media/set/?set=a.1390445786566124&type=3",
        variant: "primary",
      },
      {
        label: "Tiếp tục đồng hành cùng các hoạt động thiện nguyện của HANS",
        href: "/hoat-dong",
        variant: "secondary",
      },
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

/** Newest first. Articles are listed in `newsArticles` newest-first, so this is the array order. */
export function getLatestNews(limit?: number) {
  return limit === undefined ? newsArticles : newsArticles.slice(0, limit);
}
