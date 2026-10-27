import bepComTruaCover from "../../thumbnail/Bếp thiện nguyện.jpg";
import type { NewsArticle, NewsImage } from "../types/news";

const TTVC_2026_DIR = "/news/tuoi-tho-cho-em-08-2026";
const BEP_COM_TRUA_2026_DIR = "/news/bep-com-trua-2026";

const bepComTruaImage = (
  src: string,
  alt: string,
  width: number,
  height: number,
): NewsImage => ({ src, alt, width, height });

const bepComTrua2026 = {
  cover: bepComTruaImage(
    bepComTruaCover,
    "Hoạt động Bếp Cơm Trưa 2 Nghìn của CLB Hơi Ấm Nhân Sinh",
    2048,
    1536,
  ),
  announcement: bepComTruaImage(
    `${BEP_COM_TRUA_2026_DIR}/thong-bao.jpeg`,
    "Thông báo chương trình Bếp Cơm Trưa 2 Nghìn",
    960,
    720,
  ),
  day1: [
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-07-1.jpg`, "Tình nguyện viên chuẩn bị bữa cơm ngày 07/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-07-2.jpg`, "Các phần cơm ngày 07/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-07-3.jpg`, "Hoạt động phục vụ bữa cơm ngày 07/10", 1536, 2048),
  ],
  day2: [
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-08-1.jpg`, "Tình nguyện viên chuẩn bị bữa cơm ngày 08/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-08-2.jpg`, "Các phần cơm ngày 08/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-08-3.jpg`, "Hoạt động phục vụ bữa cơm ngày 08/10", 1536, 2048),
  ],
  day3: [
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-09-1.jpg`, "Bữa cơm ngày 09/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-09-2.jpg`, "Hoạt động tại bếp ngày 09/10", 1536, 2048),
  ],
  day4: [
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-10-1.jpg`, "Tình nguyện viên chuẩn bị bữa cơm ngày 10/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-10-2.jpg`, "Các phần cơm ngày 10/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-10-3.jpg`, "Hoạt động phục vụ bữa cơm ngày 10/10", 1536, 2048),
  ],
  day5: [
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-11-1.jpg`, "Bữa cơm ngày 11/10", 1152, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-11-2.jpg`, "Tình nguyện viên tại bếp ngày 11/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-11-3.jpg`, "Các phần cơm ngày 11/10", 1536, 2048),
    bepComTruaImage(`${BEP_COM_TRUA_2026_DIR}/ngay-11-4.jpg`, "Hoạt động phục vụ bữa cơm ngày 11/10", 1536, 2048),
  ],
};

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
    slug: "bep-com-trua-2-nghin-10-2026",
    title: "Bếp Cơm Trưa 2 Nghìn – Nhìn lại 5 ngày gửi trao những bữa cơm ấm áp",
    excerpt:
      "Từ ngày 07/10 đến 11/10/2026, CLB Hơi Ấm Nhân Sinh tổ chức Bếp Cơm Trưa 2 Nghìn, gửi trao những bữa cơm trưa đủ đầy với giá 2.000 đồng/suất.",
    category: "Bếp thiện nguyện",
    publishedAt: "2026-10-11",
    cover: bepComTrua2026.cover,
    blocks: [
      {
        kind: "lead",
        paragraphs: [
          "Từ ngày 07/10 đến 11/10/2026, CLB Hơi Ấm Nhân Sinh đã tổ chức hoạt động “Bếp Cơm Trưa 2 Nghìn”, mang đến những bữa cơm trưa với mức giá 2.000 đồng/suất dành cho cô chú có thu nhập thấp và người thân đang chăm sóc bệnh nhân.",
          "Trong suốt 5 ngày, căn bếp nhỏ đều đặn chuẩn bị những món ăn quen thuộc, thay đổi thực đơn mỗi ngày để cô chú có những bữa trưa đủ đầy và ngon miệng. Không phải những món ăn cầu kỳ, bếp chỉ mong mỗi người ghé đến đều có một bữa cơm tươm tất, bớt đi một khoản chi phí giữa những ngày còn nhiều điều phải lo toan.",
        ],
      },
      { kind: "heading", text: "Bếp Cơm Trưa 2 Nghìn – Một bữa cơm giản dị, một chút sẻ chia" },
      {
        kind: "split",
        image: bepComTrua2026.announcement,
        imageSide: "right",
        blocks: [
          {
            kind: "paragraph",
            text: "Với nhiều người, một bữa cơm trưa có thể là điều rất đỗi bình thường. Nhưng với những cô chú phải chắt chiu từng khoản chi tiêu, hay những người đang túc trực chăm sóc người thân tại bệnh viện, việc có một bữa ăn đầy đủ với chi phí thấp cũng phần nào giúp những ngày vất vả trở nên nhẹ nhàng hơn.",
          },
          {
            kind: "paragraph",
            text: "Xuất phát từ mong muốn ấy, Bếp Cơm Trưa 2 Nghìn của CLB Hơi Ấm Nhân Sinh được tổ chức trong 5 ngày, từ 07/10 đến 11/10/2026, phục vụ vào khung giờ 10h00–12h00 hằng ngày.",
          },
        ],
      },
      {
        kind: "paragraph",
        text: "Mỗi suất cơm có giá 2.000 đồng, với thực đơn gồm các món mặn, rau và canh được thay đổi theo ngày. Các thành viên và tình nguyện viên cùng chuẩn bị những bữa ăn bằng sự chu đáo, từ việc lựa chọn món, sơ chế nguyên liệu đến nấu nướng và phục vụ.",
      },
      {
        kind: "paragraph",
        text: "Bếp không mong làm được điều gì quá lớn lao. Chỉ hy vọng những bữa cơm giản dị ấy có thể san sẻ phần nào gánh nặng sinh hoạt, để cô chú yên tâm dùng một bữa trưa trước khi tiếp tục công việc hay trở lại chăm sóc người thân.",
      },
      {
        kind: "heading",
        text: "Nhìn lại 5 ngày của Bếp Cơm Trưa 2 Nghìn",
        style: "centered-divider",
      },
      { kind: "heading", text: "Ngày 1 (07/10) – Bữa cơm đầu tiên, những món ăn thân thuộc" },
      {
        kind: "paragraph",
        text: "Ngày đầu tiên của Bếp Cơm Trưa 2 Nghìn bắt đầu với thực đơn gồm gà kho gừng, đậu đũa xào và canh bí đỏ thịt bằm.",
      },
      {
        kind: "paragraph",
        text: "Những món ăn không xa lạ, cũng chẳng cầu kỳ, nhưng mang hương vị gần gũi của một bữa cơm nhà. Có món kho đậm đà, đĩa rau xào và bát canh nóng, bếp mong cô chú có thể dùng một bữa trưa ngon miệng, đủ đầy.",
      },
      {
        kind: "paragraph",
        text: "Ngày 07/10 đánh dấu sự khởi đầu của hành trình 5 ngày. Từ những phần cơm đầu tiên, điều mà các thành viên HANS mong muốn vẫn rất giản dị: chuẩn bị những bữa ăn chỉn chu, để ai ghé bếp cũng có một bữa trưa với chi phí phù hợp.",
      },
      { kind: "gallery", images: bepComTrua2026.day1, size: "compact" },
      { kind: "heading", text: "Ngày 2 (08/10) – Thêm một ngày bếp đỏ lửa" },
      {
        kind: "paragraph",
        text: "Sang ngày thứ hai, căn bếp tiếp tục với những món ăn quen thuộc: thịt ba chỉ kho tiêu, rau muống luộc, đậu rồng xào và canh rau củ.",
      },
      {
        kind: "paragraph",
        text: "Mỗi ngày một thực đơn khác nhau, nhưng sự chăm chút dành cho từng bữa cơm vẫn được giữ nguyên. Bếp lựa chọn những món ăn gần gũi với khẩu vị của cô chú, để bữa trưa tuy giản đơn nhưng vẫn có đủ món mặn, rau và canh.",
      },
      {
        kind: "paragraph",
        text: "Thêm một ngày bếp đỏ lửa cũng là thêm một ngày các thành viên HANS có cơ hội góp chút công sức của mình vào việc hỗ trợ bà con. Không cần những điều đặc biệt, đôi khi chỉ cần một bữa cơm được chuẩn bị cẩn thận cũng đã là một cách quan tâm rất thiết thực.",
      },
      { kind: "gallery", images: bepComTrua2026.day2, size: "compact" },
      { kind: "heading", text: "Ngày 3 (09/10) – Những bữa cơm được chuẩn bị bằng sự chu đáo" },
      {
        kind: "paragraph",
        text: "Đến ngày thứ ba, bếp đổi vị với thực đơn gồm cá chiên sốt cà, su su xào và canh mồng tơi nấu mướp.",
      },
      {
        kind: "paragraph",
        text: "Từ món cá chiên quen thuộc đến đĩa rau xào và bát canh thanh nhẹ, mỗi món ăn đều được lựa chọn để tạo nên một bữa cơm hài hòa, dễ ăn.",
      },
      {
        kind: "paragraph",
        text: "Điều mà bếp luôn cố gắng duy trì không chỉ là mức giá 2.000 đồng, mà còn là chất lượng và sự chỉn chu trong từng bữa ăn. Bởi dù là một suất cơm có giá rất nhỏ, người đến dùng cơm vẫn xứng đáng được đón tiếp bằng sự quan tâm và trân trọng.",
      },
      { kind: "gallery", images: bepComTrua2026.day3, size: "compact" },
      { kind: "heading", text: "Ngày 4 (10/10) – Bữa cơm cuối tuần vẫn đủ đầy hương vị" },
      {
        kind: "paragraph",
        text: "Ngày thứ tư, thực đơn của bếp có sườn non thịt kho nước dừa, đậu que, su su xào cà rốt và canh chua tép.",
      },
      {
        kind: "paragraph",
        text: "Một chút vị chua ngọt từ món sườn, đĩa rau xào quen thuộc cùng bát canh chua tạo nên bữa cơm cuối tuần gần gũi mà ngon miệng.",
      },
      {
        kind: "paragraph",
        text: "Bốn ngày trôi qua, những công việc tại bếp vẫn được tiếp nối: chuẩn bị nguyên liệu, nấu nướng và phục vụ cơm trong khung giờ quen thuộc.",
      },
      {
        kind: "paragraph",
        text: "Với các thành viên HANS, mỗi ngày bếp hoạt động là một ngày có thêm cơ hội được góp sức vào những việc làm có ích. Mong muốn lớn nhất vẫn là để những phần cơm đến được với cô chú đang cần, giúp mọi người bớt đi một chút lo toan trong cuộc sống thường ngày.",
      },
      { kind: "gallery", images: bepComTrua2026.day4, size: "compact" },
      { kind: "heading", text: "Ngày 5 (11/10) – Khép lại 5 ngày, giữ lại những điều ý nghĩa" },
      {
        kind: "paragraph",
        text: "Chủ nhật, ngày 11/10/2026, Bếp Cơm Trưa 2 Nghìn bước vào ngày phục vụ cuối cùng với thực đơn gồm thịt kho trứng cút, bắp cải xào, dưa giá và canh khổ qua thịt bằm.",
      },
      {
        kind: "paragraph",
        text: "Bữa cơm cuối cùng vẫn là những món ăn mộc mạc, quen thuộc như chính tinh thần mà bếp đã duy trì từ ngày đầu tiên.",
      },
      {
        kind: "paragraph",
        text: "Vậy là 5 ngày của Bếp Cơm Trưa 2 Nghìn đã khép lại. Từ những buổi chuẩn bị nguyên liệu, những lần cùng nhau nấu nướng đến từng phần cơm được phục vụ, tất cả đều góp thành một hoạt động nhỏ nhưng mang nhiều ý nghĩa đối với các thành viên HANS.",
      },
      {
        kind: "paragraph",
        text: "Có thể một suất cơm 2.000 đồng không giúp giải quyết hết những khó khăn mà cô chú đang đối mặt. Nhưng bếp hy vọng rằng, ít nhất trong những buổi trưa ấy, mọi người đã có thể bớt lo thêm một khoản tiền ăn, có một bữa cơm đầy đủ trước khi tiếp tục những công việc của mình.",
      },
      { kind: "gallery", images: bepComTrua2026.day5, size: "compact", layout: "uniform" },
      { kind: "heading", text: "Cảm ơn vì đã cùng HANS giữ ấm căn bếp nhỏ" },
      {
        kind: "paragraph",
        text: "Khép lại 5 ngày hoạt động của Bếp Cơm Trưa 2 Nghìn, CLB Hơi Ấm Nhân Sinh xin gửi lời cảm ơn chân thành đến các cô chú, anh chị và những tấm lòng hảo tâm đã tin tưởng, ủng hộ kinh phí, góp phần giúp bếp có điều kiện chuẩn bị và duy trì những bữa cơm dành cho bà con.",
      },
      {
        kind: "paragraph",
        text: "HANS cũng xin cảm ơn các thành viên, tình nguyện viên đã dành thời gian, công sức để cùng nhau chuẩn bị nguyên liệu, nấu nướng và phục vụ từng suất cơm. Cảm ơn những người đã quan tâm, chia sẻ thông tin để hoạt động được biết đến rộng rãi hơn, đặc biệt là đến với những cô chú đang cần một bữa ăn có chi phí phù hợp.",
      },
      {
        kind: "paragraph",
        text: "Mỗi sự đóng góp, dù là kinh phí, công sức hay một lời giới thiệu, đều là một phần quan trọng giúp Bếp Cơm Trưa 2 Nghìn được thực hiện.",
      },
      {
        kind: "paragraph",
        text: "CLB Hơi Ấm Nhân Sinh trân trọng sự tin tưởng và đồng hành của mọi người. Hy vọng rằng, với sự chung tay ấy, HANS sẽ tiếp tục có thêm điều kiện để duy trì và triển khai những hoạt động thiết thực, mang sự hỗ trợ đến gần hơn với những hoàn cảnh còn nhiều khó khăn.",
      },
    ],
  },
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
