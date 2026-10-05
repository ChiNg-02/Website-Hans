import { Link, Navigate, useParams } from "react-router-dom";
import { NewsArticleBody } from "../../components/news/NewsArticleBody";
import { NewsCard } from "../../components/news/NewsCard";
import { formatDateVi } from "../../lib/text";
import { getLatestNews, getNewsBySlug } from "../../data/news";
import type { NewsCta } from "../../types/news";

const CTA_STYLE: Record<NewsCta["variant"], string> = {
  primary: "bg-brand-500 text-white shadow-md shadow-brand-900/20 hover:bg-brand-600",
  secondary: "bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50",
};

function CtaButton({ cta }: { cta: NewsCta }) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-bold transition hover:-translate-y-0.5 ${CTA_STYLE[cta.variant]}`;
  if (cta.href.startsWith("/")) {
    return (
      <Link to={cta.href} className={className}>
        {cta.label} →
      </Link>
    );
  }
  return (
    <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
      {cta.label} ↗
    </a>
  );
}

export function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getNewsBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/tin-tuc" replace />;
  }

  const others = getLatestNews().filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <div className="mx-auto max-w-6xl sm:px-6 sm:pt-6">
        <header className="relative flex h-[68vh] max-h-[620px] min-h-[440px] items-end overflow-hidden bg-ink-900 sm:rounded-[2rem] sm:shadow-lg">
          <img
            src={article.cover.src}
            alt={article.cover.alt}
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/45 to-ink-900/10" />
          <div className="relative w-full px-4 pb-10 sm:px-10 sm:pb-12">
            <Link
              to="/tin-tuc"
              className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-white/85 hover:text-white"
            >
              ← Tin tức
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold">
              {article.category && (
                <span className="rounded-full bg-white/20 px-3 py-1 uppercase tracking-wide text-white backdrop-blur">
                  {article.category}
                </span>
              )}
              {article.publishedAt && (
                <time dateTime={article.publishedAt} className="text-white/80">
                  {formatDateVi(article.publishedAt)}
                </time>
              )}
            </div>
            <h1 className="max-w-4xl font-display text-3xl font-extrabold leading-tight text-white drop-shadow sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
          </div>
        </header>
      </div>

      <div className="py-12 sm:py-16">
        <NewsArticleBody blocks={article.blocks} />
      </div>

      {article.ctas && article.ctas.length > 0 && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-white px-6 py-10 text-center shadow-sm ring-1 ring-ink-100 sm:px-10">
            <span className="text-3xl" aria-hidden="true">
              🏮
            </span>
            <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
              {article.ctas.map((cta) => (
                <CtaButton key={cta.href} cta={cta} />
              ))}
            </div>
          </div>
        </div>
      )}

      {others.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <h2 className="mb-6 font-display text-2xl font-extrabold text-ink-900">Bài viết khác</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
