import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { ActivityCard } from "../components/ActivityCard";
import { activities } from "../data/activities";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return activities.filter((a) =>
      [a.title, a.summary, a.location, ...a.tags].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchParams(query.trim() ? { q: query.trim() } : {});
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading eyebrow="Tìm kiếm" title="Tìm kiếm hoạt động" />

      <form onSubmit={handleSubmit} className="mb-10 flex max-w-xl gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          autoFocus
          placeholder="Nhập tên hoạt động, địa điểm, chủ đề..."
          className="flex-1 rounded-full border border-ink-200 bg-white px-5 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
        <button
          type="submit"
          className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          Tìm
        </button>
      </form>

      {query.trim() === "" ? (
        <p className="text-ink-400">Nhập từ khóa để tìm kiếm hoạt động của HANS.</p>
      ) : results.length === 0 ? (
        <p className="rounded-2xl bg-white p-10 text-center text-ink-400 ring-1 ring-ink-100">
          Không tìm thấy kết quả nào cho "{query}".
        </p>
      ) : (
        <>
          <p className="mb-6 text-sm text-ink-500">
            Tìm thấy {results.length} kết quả cho "{query}"
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
