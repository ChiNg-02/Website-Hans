import { SectionHeading } from "../../components/SectionHeading";
import { achievements } from "../../data/achievements";

export function Achievements() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Về HANS"
        title="Thành tích khen thưởng"
        description="Những ghi nhận là động lực để HANS tiếp tục hành trình lan tỏa yêu thương."
      />

      <div className="flex flex-col gap-8">
        {achievements.map((a, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={a.issuer + a.description}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100 transition hover:shadow-md sm:grid sm:grid-cols-5"
            >
              <div
                className={`relative aspect-[4/3] shrink-0 sm:col-span-2 ${reversed ? "sm:order-2" : ""}`}
              >
                {a.image ? (
                  <img
                    src={a.image}
                    alt={a.issuer}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-50 via-accent-50 to-brand-50 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm ring-1 ring-ink-100">
                      🏅
                    </div>
                    <p className="text-xs font-medium text-ink-400">
                      Ảnh giấy khen sẽ được cập nhật
                    </p>
                  </div>
                )}
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 font-display text-sm font-bold text-accent-600 shadow-sm ring-1 ring-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className={`flex flex-col justify-center gap-2.5 p-6 sm:col-span-3 sm:p-8 ${reversed ? "sm:order-1" : ""}`}
              >
                <span className="text-xs font-bold uppercase tracking-wide text-accent-500">
                  Đơn vị trao tặng
                </span>
                <p className="font-display text-lg font-bold leading-snug text-ink-900 sm:text-xl">
                  {a.issuer}
                </p>
                <p className="text-sm leading-relaxed text-ink-500 sm:text-base">
                  {a.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
