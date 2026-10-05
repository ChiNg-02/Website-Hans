import { NewsCard } from "../../components/news/NewsCard";
import { getLatestNews } from "../../data/news";

export function NewsListing() {
  // Pagination / "load more" can later slice this list - the grid itself does not change.
  const articles = getLatestNews();

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25">
            📰 Tin tức
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Câu chuyện từ những hành trình của HANS
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-white/85">
            Những hành trình, khoảnh khắc và cập nhật từ các hoạt động thiện nguyện của Hơi Ấm Nhân
            Sinh.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {articles.length === 0 ? (
          <p className="rounded-2xl bg-white p-10 text-center text-ink-400 ring-1 ring-ink-100">
            Chưa có bài viết nào.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
