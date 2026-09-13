import { useEffect, useState } from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { FeaturedProjectCard } from "../../components/FeaturedProjectCard";
import { useInView } from "../../lib/useInView";
import { featuredProjects, getDashboardHighlights } from "../../data/featuredProjects";
import type { FeaturedProject } from "../../types/featuredProject";

function AnimatedCount({ text, start }: { text: string; start: boolean }) {
  const match = text.match(/^(\d[\d.,]*)/);
  const [display, setDisplay] = useState(match ? "0" : text);

  useEffect(() => {
    if (!start || !match) return;
    const target = parseInt(match[1].replace(/[.,]/g, ""), 10);
    const duration = 900;
    const startTime = performance.now();
    let raf: number;
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.round(target * progress).toString());
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  if (!match) return <>{text}</>;
  return (
    <>
      {display}
      {text.slice(match[1].length)}
    </>
  );
}

/**
 * Pure display — this dashboard is a showcase, not a filter or navigation. No Link, no
 * hover-lift, no cursor affordance: nothing here should read as clickable.
 */
function DashboardCard({
  project,
  index,
  inView,
}: {
  project: FeaturedProject;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/15 backdrop-blur-md transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: inView ? `${index * 90}ms` : "0ms" }}
    >
      <p className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <AnimatedCount text={project.countLabel} start={inView} />
      </p>
      <span className="h-0.5 w-8 rounded-full bg-brand-400" />
      <p className="font-display text-base font-bold text-white">{project.title}</p>
      {project.tagline && <p className="text-sm italic text-brand-100/90">“{project.tagline}”</p>}
      {project.regions && <p className="text-xs text-brand-100/70">{project.regions.join(" · ")}</p>}
      {project.subPrograms && (
        <p className="text-xs text-brand-100/70">{project.subPrograms.join(" · ")}</p>
      )}
    </div>
  );
}

export function FeaturedOverview() {
  const highlights = getDashboardHighlights();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25">
            🌟 Dự án/Hoạt động nổi bật
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Hành trình những dự án mang dấu ấn của HANS
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-white/85">
            Mỗi con số dưới đây là một hành trình bền bỉ — nơi những chuyến đi, bữa ăn và món quà nhỏ đã
            cùng nhau viết nên câu chuyện thiện nguyện của HANS.
          </p>
        </div>
      </section>

      {/* Dashboard tổng quan — showcase only, not interactive */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <img
            src="/featured/dashboard-bg-1.jpg"
            alt="Tình nguyện viên HANS trao quà cho các em nhỏ vùng cao"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/93 via-ink-900/90 to-brand-900/95" />
        </div>
        <div ref={ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Impact Dashboard"
            title="Những dấu ấn nổi bật"
            description="Quy mô hành trình HANS, tính đến hiện tại."
            align="center"
            tone="light"
            compact
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((p, i) => (
              <DashboardCard key={p.slug} project={p} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>

      {/* Danh sách hoạt động */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <SectionHeading
          eyebrow="Khám phá"
          title="Danh sách hoạt động"
          description="Chọn một dự án để tìm hiểu hành trình và những dấu ấn đã đạt được."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <FeaturedProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
