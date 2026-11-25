import { Link, Navigate, useParams } from "react-router-dom";
import { getActivityBySlug } from "../../data/activities";
import { CoverArt } from "../../components/CoverArt";
import { StatusBadge } from "../../components/StatusBadge";
import { EngagementCTA } from "../../components/engagement/EngagementCTA";

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const WEEKDAYS = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

/** Weekday of a YYYY-MM-DD date, independent of the viewer's timezone. */
function weekday(date: string) {
  return WEEKDAYS[new Date(`${date}T00:00:00Z`).getUTCDay()];
}

export function ActivityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const activity = slug ? getActivityBySlug(slug) : undefined;

  if (!activity) {
    return <Navigate to="/hoat-dong" replace />;
  }

  const dateRange = !activity.startDate
    ? "Đang cập nhật"
    : activity.endDate
      ? `${formatDate(activity.startDate)} - ${formatDate(activity.endDate)}`
      : activity.startTime
        ? `${activity.startTime}, ${weekday(activity.startDate)}, ${formatDate(activity.startDate)}`
        : formatDate(activity.startDate);
  // A poster can't sit behind the title without its text clashing - show it
  // in full in the content column instead and keep the header a gradient.
  const showPoster = activity.thumbnailFit === "contain" && !!activity.thumbnailImage;

  return (
    <div>
      <CoverArt
        gradient={activity.coverGradient}
        image={showPoster ? undefined : activity.thumbnailImage}
        className="h-56 sm:h-72"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-6 sm:px-6">
          <div className="mb-3">
            <StatusBadge status={activity.status} />
          </div>
          <h1 className="font-display text-3xl font-extrabold text-white drop-shadow sm:text-4xl">
            {activity.title}
          </h1>
        </div>
      </CoverArt>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {showPoster && (
            <img
              src={activity.thumbnailImage}
              alt={activity.thumbnailAlt ?? activity.title}
              className="h-auto w-full max-w-xl rounded-2xl shadow-sm ring-1 ring-ink-100"
            />
          )}
          {activity.showDetailSummary !== false && (
            <p className="text-lg leading-relaxed text-ink-600">{activity.summary}</p>
          )}
          <div className="flex flex-col gap-4 text-ink-600">
            {activity.description.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {activity.stats && activity.stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100 sm:grid-cols-3">
              {activity.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-extrabold text-brand-600">{s.value}</p>
                  <p className="text-xs text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {activity.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100">
            <dl className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Thời gian</dt>
                <dd className="text-right font-medium text-ink-700">{dateRange}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-400">Địa điểm</dt>
                <dd className="text-right font-medium text-ink-700">{activity.location}</dd>
              </div>
              {activity.expectedQuantity && (
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 text-ink-400">Số lượng dự kiến</dt>
                  <dd className="text-right font-medium text-ink-700">{activity.expectedQuantity}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100">
            <p className="mb-4 text-sm font-semibold text-ink-800">Cách đồng hành</p>
            <EngagementCTA activity={activity} />
          </div>

          <Link
            to="/hoat-dong"
            className="text-center text-sm font-semibold text-ink-500 hover:text-brand-600"
          >
            ← Xem tất cả hoạt động
          </Link>
        </aside>
      </div>
    </div>
  );
}
