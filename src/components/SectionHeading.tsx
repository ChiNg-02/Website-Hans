interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" (default) is for light backgrounds; "light" flips text colors for use on dark/colored backgrounds. */
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";
  return (
    <div className={`mb-10 flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
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
        className={`font-display text-2xl font-extrabold sm:text-3xl ${isLight ? "text-white" : "text-ink-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`${isLight ? "text-brand-100" : "text-ink-500"} ${isCenter ? "max-w-xl" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
