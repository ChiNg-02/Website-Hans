import { AnimatedCount } from "../AnimatedCount";
import { useInView } from "../../lib/useInView";
import type { NewsBlock, NewsImage, NewsInlineBlock, NewsStat } from "../../types/news";

const WIDE_COLUMN = "mx-auto w-full max-w-5xl px-4 sm:px-6";
const PARAGRAPH = "text-[17px] leading-8 text-ink-700";

/** Comfortable reading measure, left-aligned with the headings and image splits. */
function TextColumn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={WIDE_COLUMN}>
      <div className={`max-w-3xl ${className}`}>{children}</div>
    </div>
  );
}

/** Always renders at the photo's own aspect ratio - never stretched, never cropped. */
function Photo({ image, className = "" }: { image: NewsImage; className?: string }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      className={`h-auto w-full rounded-3xl bg-ink-100 shadow-md ring-1 ring-ink-100 ${className}`}
    />
  );
}

function InlineBlock({ block }: { block: NewsInlineBlock }) {
  switch (block.kind) {
    case "paragraph":
      return <p className={PARAGRAPH}>{block.text}</p>;
    case "list":
      return (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {block.items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-3 text-sm font-semibold text-ink-800 shadow-sm ring-1 ring-ink-100"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-xs font-extrabold text-brand-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <blockquote className="relative rounded-3xl bg-brand-50 px-6 py-6 ring-1 ring-brand-100 sm:px-8">
          <span
            aria-hidden="true"
            className="absolute -top-4 left-5 font-display text-6xl leading-none text-brand-300"
          >
            “
          </span>
          <p className="font-display text-lg font-semibold leading-relaxed text-brand-900 sm:text-xl">
            {block.text}
          </p>
        </blockquote>
      );
  }
}

const SPLIT_COLUMNS = {
  compact: { left: "md:grid-cols-[240px_1fr]", right: "md:grid-cols-[1fr_240px]" },
  portrait: { left: "md:grid-cols-[0.8fr_1.2fr]", right: "md:grid-cols-[1.2fr_0.8fr]" },
  default: { left: "md:grid-cols-2", right: "md:grid-cols-2" },
};

function Split({ block }: { block: Extract<NewsBlock, { kind: "split" }> }) {
  const side = block.imageSide ?? "right";
  const shape =
    block.imageSize === "compact"
      ? "compact"
      : block.image.height > block.image.width * 1.3
        ? "portrait"
        : "default";
  const image = (
    <figure className={shape === "compact" ? "mx-auto w-full max-w-[240px]" : ""}>
      <Photo image={block.image} />
    </figure>
  );
  const text = (
    <div className="flex flex-col gap-5">
      {block.blocks.map((b, i) => (
        <InlineBlock key={i} block={b} />
      ))}
    </div>
  );

  return (
    <div className={`${WIDE_COLUMN} grid items-center gap-8 md:gap-12 ${SPLIT_COLUMNS[shape][side]}`}>
      {side === "left" ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}

/** Rows of two; with an odd count the first photo gets a row to itself. */
function mobileRows<T>(items: T[]) {
  const rows: T[][] = items.length % 2 === 1 ? [[items[0]]] : [];
  for (let i = items.length % 2; i < items.length; i += 2) rows.push(items.slice(i, i + 2));
  return rows;
}

/**
 * Justified rows: every photo in a row gets the same height and a width proportional
 * to its aspect ratio, so mixed portrait/square shots line up without being cropped.
 * One row on desktop, rows of up to two on mobile.
 */
function JustifiedRow({ images }: { images: NewsImage[] }) {
  return (
    <div className="flex gap-2 sm:gap-3">
      {images.map((image) => (
        <figure
          key={image.src}
          className="min-w-0 overflow-hidden rounded-2xl bg-ink-100 shadow-sm ring-1 ring-ink-100"
          style={{ flex: `${image.width / image.height} 1 0%`, aspectRatio: `${image.width} / ${image.height}` }}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        </figure>
      ))}
    </div>
  );
}

function Gallery({ images }: { images: NewsImage[] }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="hidden md:block">
        <JustifiedRow images={images} />
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        {mobileRows(images).map((row) => (
          <JustifiedRow key={row[0].src} images={row} />
        ))}
      </div>
    </div>
  );
}

function StatItem({ stat, index, inView }: { stat: NewsStat; index: number; inView: boolean }) {
  return (
    <div
      className={`flex flex-col items-center gap-2.5 px-4 py-8 text-center transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${index === 4 ? "col-span-2 lg:col-span-1" : ""}`}
      style={{ transitionDelay: inView ? `${index * 90}ms` : "0ms" }}
    >
      <p className="h-4 text-xs font-bold uppercase tracking-wide text-brand-300">{stat.prefix}</p>
      <p className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        <AnimatedCount text={stat.value} start={inView} />
      </p>
      <span className="h-0.5 w-8 rounded-full bg-brand-400" />
      <p className="max-w-[13rem] text-sm leading-snug text-brand-100/90">{stat.label}</p>
    </div>
  );
}

function Stats({ block }: { block: Extract<NewsBlock, { kind: "stats" }> }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div className="mx-auto my-6 w-full max-w-6xl sm:px-6">
      <section className="relative overflow-hidden py-14 sm:rounded-[2rem] sm:py-16 sm:shadow-lg">
        {block.backgroundImage && (
          <img
            src={block.backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/95 via-ink-900/90 to-brand-900/95" />
        <div ref={ref} className="relative px-4 sm:px-8">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            {block.eyebrow && (
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
                {block.eyebrow}
              </span>
            )}
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{block.heading}</h2>
          </div>
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border border-white/10 lg:grid-cols-5 lg:divide-y-0">
            {block.items.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ block }: { block: NewsBlock }) {
  switch (block.kind) {
    case "lead":
      return (
        <TextColumn className="flex flex-col gap-5">
          {block.paragraphs.map((text, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-display text-xl font-semibold leading-relaxed text-ink-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:font-extrabold first-letter:leading-[0.8] first-letter:text-brand-600 sm:text-2xl"
                  : PARAGRAPH
              }
            >
              {text}
            </p>
          ))}
        </TextColumn>
      );
    case "heading":
      return (
        <div className={`${WIDE_COLUMN} mt-10 sm:mt-14`}>
          <div className="flex max-w-3xl flex-col items-start gap-3">
            <span className="h-1 w-12 rounded-full bg-brand-500" />
            {block.eyebrow && (
              <span className="text-xs font-bold uppercase tracking-wide text-brand-600">{block.eyebrow}</span>
            )}
            <h2 className="font-display text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
              {block.text}
            </h2>
          </div>
        </div>
      );
    case "image":
      return (
        <figure className={block.size === "compact" ? "mx-auto w-full max-w-sm px-4" : WIDE_COLUMN}>
          <Photo image={block.image} />
        </figure>
      );
    case "split":
      return <Split block={block} />;
    case "gallery":
      return <Gallery images={block.images} />;
    case "stats":
      return <Stats block={block} />;
    default:
      return (
        <TextColumn>
          <InlineBlock block={block} />
        </TextColumn>
      );
  }
}

export function NewsArticleBody({ blocks }: { blocks: NewsBlock[] }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
