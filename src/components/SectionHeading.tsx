interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" (default) is for light backgrounds; "light" flips text colors for use on dark/colored backgrounds. */
  tone?: "dark" | "light";
  /** Tighter spacing/type scale for sections that need to stay compact. */
  compact?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  compact = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";
  return (
    <div
      className={`flex flex-col ${compact ? "mb-5 gap-1.5" : "mb-10 gap-3"} ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            isLight ? "bg-white/15 text-white" : "bg-brand-100 text-brand-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-extrabold ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"} ${isLight ? "text-white" : "text-ink-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`${compact ? "text-sm" : ""} ${isLight ? "text-brand-100" : "text-ink-500"} ${isCenter ? "max-w-xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
