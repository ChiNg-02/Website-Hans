import { FeaturedDetailHero } from "../../components/featured/FeaturedDetailHero";
import { PhotoGalleryQuad } from "../../components/featured/PhotoGallery";
import { SectionHeading } from "../../components/SectionHeading";
import { getFeaturedProjectBySlug, quayMiGoiInfo } from "../../data/featuredProjects";

const FACTS = [
  { label: "Thời gian bắt đầu", value: quayMiGoiInfo.startDate },
  { label: "Giờ mở cửa", value: quayMiGoiInfo.openingHours },
  { label: "Địa điểm", value: quayMiGoiInfo.location },
];

const GALLERY = [
  "/featured/quay-mi-goi/2.jpg",
  "/featured/quay-mi-goi/3.jpg",
  "/featured/quay-mi-goi/4.jpg",
  "/featured/quay-mi-goi/5.jpg",
];

export function QuayMiGoi2K() {
  const project = getFeaturedProjectBySlug("quay-mi-goi-2k")!;

  return (
    <div>
      <FeaturedDetailHero
        title={project.title}
        countLabel={project.countLabel}
        gradient={project.coverGradient}
        image="/featured/quay-mi-goi/1.jpg"
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <p className="mb-12 max-w-3xl leading-relaxed text-ink-600">{quayMiGoiInfo.organization}</p>

        <div className="mb-14 grid gap-4 sm:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{f.label}</p>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-ink-800">{f.value}</p>
            </div>
          ))}
        </div>

        <SectionHeading
          eyebrow="Hình ảnh"
          title="Không gian quầy mì gói 2K"
          description="Một bữa ăn ấm bụng, một không gian thoải mái - đúng tinh thần tự phục vụ của quầy."
        />
        <div className="mb-14">
          <PhotoGalleryQuad images={GALLERY} alt="Không gian quầy mì gói 2K" />
        </div>

        <div className="mb-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-xl font-bold text-ink-900">Hình thức & Thực đơn</h3>
            <ul className="flex flex-col gap-3">
              {quayMiGoiInfo.format.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-xl font-bold text-ink-900">
              Mục đích nguồn tiền 2.000đ thu được
            </h3>
            <div className="flex flex-col gap-3">
              {quayMiGoiInfo.fundUsage.map((f) => (
                <div
                  key={f.percent}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-100"
                >
                  <span className="font-display text-2xl font-extrabold text-brand-600">{f.percent}</span>
                  <p className="text-sm leading-relaxed text-ink-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-14 rounded-2xl bg-brand-50 p-6">
          <h3 className="mb-2 font-display text-lg font-bold text-ink-900">Đối tượng phục vụ</h3>
          <p className="leading-relaxed text-ink-600">{quayMiGoiInfo.audience}</p>
        </div>

        <SectionHeading eyebrow="Nhân sự" title="Những người đồng hành cùng quầy mì gói 2K" />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Phụ trách chính
            </p>
            <div className="flex flex-wrap gap-2">
              {quayMiGoiInfo.leadTeam.map((name) => (
                <span
                  key={name}
                  className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-400">
              Phụ trách tuần
            </p>
            <div className="flex flex-wrap gap-2">
              {quayMiGoiInfo.weeklyTeam.map((name) => (
                <span
                  key={name}
                  className="rounded-full bg-ink-50 px-3 py-1.5 text-sm font-medium text-ink-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
