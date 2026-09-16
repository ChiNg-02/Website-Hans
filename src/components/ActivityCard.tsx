import { Link } from "react-router-dom";
import type { Activity } from "../types/activity";
import { CoverArt } from "./CoverArt";
import { StatusBadge } from "./StatusBadge";
import { ENGAGEMENT_ICON, labelForMode } from "../lib/engagement";

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Link
      to={`/hoat-dong/${activity.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200"
    >
      <CoverArt
        gradient={activity.coverGradient}
        image={activity.coverImage}
        className="h-40 shrink-0"
      >
        <div className="absolute left-4 top-4">
          <StatusBadge status={activity.status} />
        </div>
      </CoverArt>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
          {activity.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500">
          {activity.summary}
        </p>
        <div className="flex items-center gap-2 text-xs text-ink-400">
          <span>📍</span>
          <span className="line-clamp-1">{activity.location}</span>
        </div>
        {activity.engagementModes.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {activity.engagementModes.map((mode) => (
              <span
                key={mode.type}
                className="inline-flex items-center gap-1 rounded-full bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-600 ring-1 ring-ink-100"
              >
                <span>{ENGAGEMENT_ICON[mode.type]}</span>
                {labelForMode(mode, activity.engagementModes)}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
