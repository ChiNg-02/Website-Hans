import type { ProjectEdition } from "../../types/featuredProject";

export function ProjectTimeline({ editions }: { editions: ProjectEdition[] }) {
  return (
    <div className="relative flex flex-col gap-6 pl-9 sm:pl-11">
      <div className="absolute bottom-2 left-3 top-2 w-px bg-ink-200 sm:left-4" />
      {editions.map((ed) => (
        <div key={ed.label} className="relative">
          <span className="absolute -left-9 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-white ring-4 ring-ink-50 sm:-left-11 sm:h-7 sm:w-7">
            {ed.label.replace("Lần ", "")}
          </span>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span className="font-display text-base font-bold text-ink-900">{ed.label}</span>
              {ed.date && <span className="text-sm text-ink-400">· {ed.date}</span>}
            </div>
            <p className="text-sm leading-relaxed text-ink-600">{ed.location}</p>
            {ed.giftCount && (
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                🎁 {ed.giftCount}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
