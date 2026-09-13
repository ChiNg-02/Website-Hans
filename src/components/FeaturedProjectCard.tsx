import { Link } from "react-router-dom";
import type { FeaturedProject } from "../types/featuredProject";
import { CoverArt } from "./CoverArt";

export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Link
      to={`/du-an-noi-bat/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200"
    >
      <CoverArt gradient={project.coverGradient} className="h-36 shrink-0">
        <div className="absolute inset-x-4 bottom-3">
          <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-ink-800 backdrop-blur">
            {project.countLabel}
          </span>
        </div>
      </CoverArt>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
          {project.title}
        </h3>
        {project.tagline && (
          <p className="text-sm font-medium italic text-brand-600">“{project.tagline}”</p>
        )}
        {project.summary && (
          <p className="line-clamp-2 text-sm leading-relaxed text-ink-500">{project.summary}</p>
        )}
        {project.regions && (
          <div className="flex flex-wrap gap-1.5">
            {project.regions.map((r) => (
              <span
                key={r}
                className="rounded-full bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 ring-1 ring-ink-100"
              >
                📍 {r}
              </span>
            ))}
          </div>
        )}
        {project.subPrograms && (
          <ul className="flex flex-col gap-1 text-sm text-ink-600">
            {project.subPrograms.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                {p}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-bold text-brand-600 group-hover:text-brand-700">
          Tìm hiểu thêm →
        </span>
      </div>
    </Link>
  );
}
