import { Children, useRef, useState } from "react";
import type { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[];
  /** "light" is for carousels sitting on a light/white section background; "dark" for colored/dark backgrounds. */
  tone?: "light" | "dark";
}

export function Carousel({ children, tone = "light" }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta = cardRect.left - trackRect.left;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const target = Math.max(0, Math.min(track.scrollLeft + delta, maxScroll));
    track.scrollTo({ left: target, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const trackLeft = track.getBoundingClientRect().left;
    let closest = 0;
    let minDistance = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const distance = Math.abs(rect.left - trackLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });
    setActive(closest);
  }

  const isDark = tone === "dark";
  const arrowClass = isDark
    ? "bg-white/15 text-white hover:bg-white/25 disabled:opacity-30"
    : "bg-white text-ink-700 shadow-sm ring-1 ring-ink-200 hover:bg-brand-50 disabled:opacity-30";
  const dotActiveClass = isDark ? "w-6 bg-white" : "w-6 bg-brand-600";
  const dotInactiveClass = isDark ? "w-1.5 bg-white/30" : "w-1.5 bg-ink-200";

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {Children.map(children, (child, i) => (
          <div key={i} className="snap-start shrink-0">
            {child}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label="Trước"
          className={`flex h-9 w-9 items-center justify-center rounded-full text-lg transition ${arrowClass}`}
        >
          ‹
        </button>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Đi tới mục ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === active ? dotActiveClass : dotInactiveClass}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollToIndex(Math.min(count - 1, active + 1))}
          disabled={active === count - 1}
          aria-label="Sau"
          className={`flex h-9 w-9 items-center justify-center rounded-full text-lg transition ${arrowClass}`}
        >
          ›
        </button>
      </div>
    </div>
  );
}
