import { Link } from "react-router-dom";
import { CoverArt } from "../CoverArt";

interface FeaturedDetailHeroProps {
  title: string;
  tagline?: string;
  countLabel?: string;
  gradient: [string, string];
  /** A real photo to use as the hero background instead of the gradient placeholder. */
  image?: string;
}

export function FeaturedDetailHero({ title, tagline, countLabel, gradient, image }: FeaturedDetailHeroProps) {
  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/30 to-ink-900/10" />
      <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-end px-4 pb-8 sm:px-6">
        <Link
          to="/du-an-noi-bat"
          className="mb-3 inline-flex w-fit items-center gap-1 text-xs font-semibold text-white/90 hover:text-white"
        >
          ← Dự án/Hoạt động nổi bật
        </Link>
        {countLabel && (
          <span className="mb-3 inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {countLabel}
          </span>
        )}
        <h1 className="font-display text-3xl font-extrabold text-white drop-shadow sm:text-4xl">{title}</h1>
        {tagline && (
          <p className="mt-2 max-w-xl text-lg font-medium italic text-white/90">“{tagline}”</p>
        )}
      </div>
    </>
  );

  if (image) {
    return (
      <div className="relative h-72 overflow-hidden sm:h-80">
        <img src={image} alt="" className="h-full w-full object-cover" />
        {content}
      </div>
    );
  }

  return (
    <CoverArt gradient={gradient} className="h-64 sm:h-72">
      {content}
    </CoverArt>
  );
}
