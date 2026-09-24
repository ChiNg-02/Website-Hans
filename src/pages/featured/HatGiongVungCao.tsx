import { FeaturedDetailHero } from "../../components/featured/FeaturedDetailHero";
import { ProjectTimeline } from "../../components/featured/ProjectTimeline";
import { PhotoGalleryTrio } from "../../components/featured/PhotoGallery";
import { SectionHeading } from "../../components/SectionHeading";
import { getFeaturedProjectBySlug, hatGiongEditions } from "../../data/featuredProjects";

const GALLERY = [
  "/featured/hat-giong/1.jpg",
  "/featured/hat-giong/3.jpg",
  "/featured/hat-giong/4.jpg",
];

export function HatGiongVungCao() {
  const project = getFeaturedProjectBySlug("hat-giong-vung-cao")!;

  return (
    <div>
      <FeaturedDetailHero
        title={project.title}
        tagline={project.tagline}
        countLabel={project.countLabel}
        gradient={project.coverGradient}
        image="/featured/hat-giong/2.jpg"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-ink-600">
          Khởi đầu từ năm 2022, Hạt Giống Vùng Cao ra đời với mong muốn mang đến cho các em nhỏ
          một chương trình thật ý nghĩa, đúng như thông điệp: “Hãy Nỗ Lực, Vì Em Xứng Đáng” để động
          viên và gửi tặng các em sau một năm học hành chăm chỉ.
          <br />
          <br />
          Năm 2026 đánh dấu mùa hoạt động thứ 5 và cũng là lời chào tạm biệt của dự án. Chuyến đi
          cuối cùng tập trung vào việc gom góp và gửi tặng các em những món quà nhỏ nhưng thiết
          thực: sách vở, bút mực, sữa cùng nhiều phần quà đa dạng khác. Chặng đường 5 năm của Hạt
          Giống Vùng Cao khép lại bằng những niềm vui giản dị, hoàn thành trọn vẹn mong muốn tiếp
          bước cho hàng trăm em học sinh kể từ những ngày đầu của dự án.
        </p>

        <SectionHeading
          eyebrow="Hình ảnh"
          title="Khoảnh khắc Hạt Giống Vùng Cao"
          description="Những nụ cười và món quà nhỏ trên hành trình gieo hạt giống của HANS."
        />
        <div className="mb-14">
          <PhotoGalleryTrio images={GALLERY} alt="Khoảnh khắc Hạt Giống Vùng Cao" />
        </div>

        <SectionHeading
          eyebrow="Hành trình"
          title="5 hành trình gieo hạt giống"
          description="Từ Khánh Hòa đến Đắk Nông."
        />
        <ProjectTimeline editions={hatGiongEditions} />
      </div>
    </div>
  );
}
