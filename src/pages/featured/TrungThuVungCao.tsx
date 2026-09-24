import { Link } from "react-router-dom";
import { FeaturedDetailHero } from "../../components/featured/FeaturedDetailHero";
import { ProjectTimeline } from "../../components/featured/ProjectTimeline";
import { PhotoGalleryTrio } from "../../components/featured/PhotoGallery";
import { SectionHeading } from "../../components/SectionHeading";
import { getFeaturedProjectBySlug, trungThuEditions } from "../../data/featuredProjects";

const GALLERY = [
  "/featured/trung-thu/1.jpg",
  "/featured/trung-thu/3.jpg",
  "/featured/trung-thu/4.jpg",
];

export function TrungThuVungCao() {
  const project = getFeaturedProjectBySlug("trung-thu-vung-cao")!;

  return (
    <div>
      <FeaturedDetailHero
        title={project.title}
        tagline={project.tagline}
        countLabel={project.countLabel}
        gradient={project.coverGradient}
        image="/featured/trung-thu/2.jpg"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-ink-600">
          Mỗi mùa trăng về, những chuyến xe của HANS lại lăn bánh, mang theo dự án "Trung Thu Vùng
          Cao - Tuổi thơ cho em, hạnh phúc cho ta" ngược lên các bản làng xa xôi. Tại đây, dự án
          mang đến những phần quà thiết thực cùng nhiều hoạt động vui chơi bổ ích ngay giữa không
          gian sinh hoạt chung của bản. Thông qua những việc làm cụ thể này, HANS hy vọng san sẻ
          phần nào khó khăn và tạo ra một sân chơi tuổi thơ đúng nghĩa cho các em trong ngày Tết
          thiếu nhi.
        </p>

        {/* Current 2026 campaign highlight */}
        <div className="mb-14 overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500 to-accent-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur">
                ● Đang diễn ra
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                Trung Thu Vùng Cao 2026
              </h2>
              <p className="mt-1 font-display text-sm font-semibold italic text-white/95 sm:text-base">
                "Tuổi thơ cho em, hạnh phúc cho ta"
              </p>
              <p className="mt-2 max-w-md text-sm text-white/90 sm:text-base">
                Mùa trăng rằm thứ 8 đang được HANS chuẩn bị - cùng đồng hành để mang Trung Thu đến
                với các em nhỏ vùng cao.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <Link
                to="/hoat-dong/trung-thu-vung-cao-2026"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-accent-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-accent-50"
              >
                Tham gia ngay
              </Link>
              <Link
                to="/hoat-dong/trung-thu-vung-cao-2026"
                className="rounded-full bg-white/10 px-6 py-3 text-center text-sm font-bold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/20"
              >
                Tìm hiểu chương trình 2026
              </Link>
            </div>
          </div>
        </div>

        <SectionHeading
          eyebrow="Hình ảnh"
          title="Khoảnh khắc Trung Thu Vùng Cao"
          description="Nụ cười của các em nhỏ qua từng mùa trăng rằm HANS đã đi qua."
        />
        <div className="mb-14">
          <PhotoGalleryTrio images={GALLERY} alt="Khoảnh khắc Trung Thu Vùng Cao" />
        </div>

        <SectionHeading
          eyebrow="Hành trình"
          title="7 mùa trăng rằm đã đi qua"
          description="Từ Đắk Nông, Kon Tum, Đồng Nai đến Đắk Lắk và Gia Lai."
        />
        <ProjectTimeline editions={trungThuEditions} />
      </div>
    </div>
  );
}
