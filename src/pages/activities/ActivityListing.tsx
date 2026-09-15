import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SectionHeading } from "../../components/SectionHeading";
import { ActivityCard } from "../../components/ActivityCard";
import { activities } from "../../data/activities";
import type { ActivityStatus } from "../../types/activity";

type FilterKey = "all" | "featured" | ActivityStatus;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "ongoing", label: "Đang diễn ra" },
  { key: "upcoming", label: "Sắp diễn ra" },
];

export function ActivityListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = (searchParams.get("filter") as FilterKey) ?? "ongoing";
  const [filter, setFilter] = useState<FilterKey>(
    FILTERS.some((f) => f.key === filterParam) ? filterParam : "ongoing",
  );

  const filtered = useMemo(() => {
    if (filter === "all") return activities;
    if (filter === "featured") return activities.filter((a) => a.featured);
    return activities.filter((a) => a.status === filter);
  }, [filter]);

  function selectFilter(key: FilterKey) {
    setFilter(key);
    setSearchParams(key === "all" ? {} : { filter: key });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Đồng hành cùng HANS"
        title="Hoạt động sắp/đang diễn ra"
        description="Mỗi hoạt động là một cách khác nhau để bạn góp phần lan tỏa hơi ấm. Chọn một dự án để xem chi tiết và cách đồng hành phù hợp với bạn."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => selectFilter(f.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === f.key
                ? "bg-brand-500 text-white shadow-sm"
                : "bg-white text-ink-600 ring-1 ring-ink-200 hover:ring-brand-300"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl bg-white p-10 text-center text-ink-400 ring-1 ring-ink-100">
          Chưa có hoạt động nào trong mục này.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
}
