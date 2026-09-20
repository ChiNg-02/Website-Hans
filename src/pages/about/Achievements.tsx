import { SectionHeading } from "../../components/SectionHeading";
import { achievements } from "../../data/achievements";

export function Achievements() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Về HANS"
        title="Thành tích khen thưởng"
        description="Những ghi nhận là động lực để HANS tiếp tục hành trình lan tỏa yêu thương."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((a, index) => (
          <div
            key={a.issuer + a.description}
            className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-ink-100">
              <img
                src={`/achievements/${index + 1}/${String(index + 1).padStart(2, "0")}.jpg`}
                alt={`Bằng khen: ${a.issuer}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-display font-bold text-ink-900">{a.issuer}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
