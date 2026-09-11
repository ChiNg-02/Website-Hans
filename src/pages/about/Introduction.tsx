import { SectionHeading } from "../../components/SectionHeading";
import { CoverArt } from "../../components/CoverArt";

const VALUES = [
  { icon: "💚", title: "Tử tế", desc: "Hành động xuất phát từ sự chân thành và thấu hiểu." },
  { icon: "🤝", title: "Đồng hành", desc: "Không ai đơn độc trên hành trình lan tỏa yêu thương." },
  { icon: "🌱", title: "Bền vững", desc: "Mỗi dự án hướng tới giá trị lâu dài cho cộng đồng." },
  { icon: "✨", title: "Trẻ trung", desc: "Sáng tạo, năng động và luôn đổi mới cách làm thiện nguyện." },
];

const TIMELINE = [
  { year: "2019", text: "HANS được thành lập bởi một nhóm sinh viên với dự án đầu tiên." },
  { year: "2021", text: "Mở rộng hoạt động ra 3 tỉnh thành, thành lập các nhóm chuyên trách." },
  { year: "2023", text: "Vượt mốc 5.000 người được hỗ trợ, được vinh danh cấp thành phố." },
  { year: "2026", text: "HANS tiếp tục hành trình với hơn 1.200 tình nguyện viên đồng hành." },
];

export function Introduction() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Về HANS"
        title="Giới thiệu CLB Hơi Ấm Nhân Sinh"
        description="HANS (Hơi Ấm Nhân Sinh) là câu lạc bộ thiện nguyện do những người trẻ sáng lập và vận hành, với mong muốn mang sự ấm áp đến gần hơn với những hoàn cảnh khó khăn trong xã hội."
      />

      <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-center">
        <CoverArt gradient={["#c3edd3", "#f8c7bd"]} className="aspect-video rounded-3xl">
          <div className="flex h-full items-center justify-center text-6xl">🌤️</div>
        </CoverArt>
        <div className="flex flex-col gap-4 text-ink-600">
          <p className="leading-relaxed">
            Ra đời từ năm 2019, HANS bắt đầu với một nhóm nhỏ sinh viên mong muốn đóng góp điều gì
            đó ý nghĩa cho cộng đồng. Đến nay, HANS đã trở thành một tổ chức thiện nguyện với hàng
            nghìn tình nguyện viên trên khắp cả nước.
          </p>
          <p className="leading-relaxed">
            Chúng mình tin rằng thiện nguyện không cần phải to lớn — chỉ cần xuất phát từ sự chân
            thành, mỗi hành động nhỏ đều có thể tạo nên những thay đổi lớn.
          </p>
        </div>
      </div>

      <div className="mb-14">
        <h3 className="mb-6 font-display text-xl font-bold text-ink-900">Giá trị cốt lõi</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-start gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-2xl">
                {v.icon}
              </span>
              <p className="font-display font-bold text-ink-900">{v.title}</p>
              <p className="text-sm leading-relaxed text-ink-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-6 font-display text-xl font-bold text-ink-900">Hành trình HANS</h3>
        <div className="flex flex-col gap-6 border-l-2 border-brand-200 pl-6">
          {TIMELINE.map((t) => (
            <div key={t.year} className="relative">
              <span className="absolute -left-[1.85rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-100" />
              <p className="font-display font-bold text-brand-700">{t.year}</p>
              <p className="text-ink-600">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
