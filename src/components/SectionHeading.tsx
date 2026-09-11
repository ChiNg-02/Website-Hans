interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-10 flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">{title}</h2>
      {description && (
        <p className={`text-ink-500 ${isCenter ? "max-w-xl" : "max-w-2xl"}`}>{description}</p>
      )}
    </div>
  );
}
