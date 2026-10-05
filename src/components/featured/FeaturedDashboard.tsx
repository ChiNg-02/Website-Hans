import { AnimatedCount } from "../AnimatedCount";
import { useInView } from "../../lib/useInView";
import type { FeaturedProject } from "../../types/featuredProject";

/**
 * Pure display - this dashboard is a showcase, not a filter or navigation. No Link, no
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

/** Photo-backed dark band with the count-up grid of dashboard highlights. */
export function FeaturedDashboard({
  projects,
  children,
}: {
  projects: FeaturedProject[];
  /** Heading content rendered above the grid. */
  children?: React.ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-0">
        <img
          src="/featured/dashboard-bg-1.jpg"
          alt="Tình nguyện viên HANS trao quà cho các em nhỏ vùng cao"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/93 via-ink-900/90 to-brand-900/95" />
      </div>
      <div ref={ref} className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {children}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <DashboardCard key={p.slug} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}
