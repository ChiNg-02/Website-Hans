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
