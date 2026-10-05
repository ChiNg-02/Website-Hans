import { FeaturedDetailHero } from "../../components/featured/FeaturedDetailHero";
import { ProjectTimeline } from "../../components/featured/ProjectTimeline";
import { PhotoGalleryCarousel } from "../../components/featured/PhotoGallery";
import { SectionHeading } from "../../components/SectionHeading";
import { getFeaturedProjectBySlug, trungThuEditions } from "../../data/featuredProjects";

const GALLERY_GROUPS = [
  ["/featured/trung-thu/1.jpg", "/featured/trung-thu/3.jpg", "/featured/trung-thu/4.jpg"],
  ["/featured/trung-thu/5.jpg", "/featured/trung-thu/6.jpg", "/featured/trung-thu/7.jpg"],
  ["/featured/trung-thu/10.jpg", "/featured/trung-thu/9.jpg", "/featured/trung-thu/8.jpg"],
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

        <SectionHeading
          eyebrow="Hình ảnh"
          title="Khoảnh khắc Trung Thu Vùng Cao"
          description="Nụ cười của các em nhỏ qua từng mùa trăng rằm HANS đã đi qua."
        />
        <div className="mb-14">
          <PhotoGalleryCarousel groups={GALLERY_GROUPS} alt="Khoảnh khắc Trung Thu Vùng Cao" />
        </div>

        <SectionHeading
          eyebrow="Hành trình"
          title="8 mùa trăng rằm đã đi qua"
          description="Từ Đắk Nông, Kon Tum, Đồng Nai đến Đắk Lắk và Gia Lai."
        />
        <ProjectTimeline editions={trungThuEditions} />
      </div>
    </div>
  );
}
