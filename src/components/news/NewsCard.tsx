import { Link } from "react-router-dom";
import type { NewsArticle } from "../../types/news";
import { formatDateVi } from "../../lib/text";

/**
 * Compact grid card: fixed 16:10 thumbnail, title clamped to 2 lines and excerpt to 2,
 * so every card in a row has the same height however many articles there are.
 */
export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      to={`/tin-tuc/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200"
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-ink-100">
        <img
          src={article.cover.src}
          alt={article.cover.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {article.category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 backdrop-blur">
            {article.category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        {article.publishedAt && (
          <time dateTime={article.publishedAt} className="text-xs font-medium text-ink-400">
            {formatDateVi(article.publishedAt)}
          </time>
        )}
        <h3 className="line-clamp-2 min-h-[2lh] font-display text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">
          {article.title}
        </h3>
        <p className="line-clamp-2 min-h-[2lh] text-sm leading-relaxed text-ink-500">{article.excerpt}</p>
        <span className="mt-auto pt-1 text-sm font-bold text-brand-600 group-hover:text-brand-700">
          Đọc bài viết →
        </span>
      </div>
    </Link>
  );
}
