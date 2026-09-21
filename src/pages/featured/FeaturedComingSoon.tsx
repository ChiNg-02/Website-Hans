import { Navigate, useParams } from "react-router-dom";
import { FeaturedDetailHero } from "../../components/featured/FeaturedDetailHero";
import { ImagePlaceholderGallery } from "../../components/ImagePlaceholderGallery";
import { getFeaturedProjectBySlug } from "../../data/featuredProjects";

export function FeaturedComingSoon() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getFeaturedProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/du-an-noi-bat" replace />;
  }

  return (
    <div>
      <FeaturedDetailHero
        title={project.title}
        tagline={project.tagline}
        countLabel={project.countLabel}
        gradient={project.coverGradient}
        image={project.coverImage}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        {project.regions && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.regions.map((r) => (
              <span
                key={r}
                className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink-600 shadow-sm ring-1 ring-ink-100"
              >
                📍 {r}
              </span>
            ))}
          </div>
        )}

        {project.subPrograms && (
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {project.subPrograms.map((p) => (
              <div
                key={p}
                className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-ink-100"
              >
                <p className="font-display text-base font-bold text-ink-900">{p}</p>
              </div>
            ))}
          </div>
        )}

        {project.summary && (
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-ink-600">{project.summary}</p>
        )}

        <div className="mb-10 rounded-2xl bg-brand-50 px-5 py-4 text-sm leading-relaxed text-brand-700">
          Nội dung chi tiết của hoạt động này đang được HANS cập nhật. Câu chuyện, số liệu và hình ảnh
          đầy đủ sẽ sớm được bổ sung tại đây.
        </div>

        <ImagePlaceholderGallery count={4} />
      </div>
    </div>
  );
}
