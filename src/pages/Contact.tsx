import { SectionHeading } from "../components/SectionHeading";
import { SOCIAL_LINKS, PHONE_REGIONS } from "../data/contact";
import { FacebookIcon, TikTokIcon } from "../components/SocialIcons";

const SOCIAL_ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};

const SECTIONS = [
  { id: "thong-tin-lien-he", label: "Thông tin liên hệ" },
  { id: "bao-cao-quy", label: "Báo cáo quỹ" },
];

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Kết nối"
        title="Liên hệ với HANS"
        description="Kết nối với HANS qua mạng xã hội hoặc số điện thoại theo từng khu vực, và theo dõi báo cáo quỹ của HANS."
      />

      <nav aria-label="Mục trong trang" className="-mt-4 mb-10 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-600 ring-1 ring-ink-200 transition hover:text-brand-700 hover:ring-brand-300"
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* Thông tin liên hệ */}
      <section id="thong-tin-lien-he" className="scroll-mt-24">
        <h2 className="mb-5 font-display text-xl font-bold text-ink-900 sm:text-2xl">Thông tin liên hệ</h2>

        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((s) => {
            const Icon = SOCIAL_ICONS[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-ink-400">{s.label}</p>
                  <p className="font-medium text-ink-800">Theo dõi HANS trên {s.label}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink-100 sm:p-6">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
            <span>📞</span>Số điện thoại theo khu vực
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {PHONE_REGIONS.map((r) => (
              <div key={r.region} className="rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  <span>🌼</span>
                  {r.region}
                </p>
                <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink-600">
                  {r.contacts.map((c) => (
                    <li key={c.phone}>
                      <a
                        href={`tel:${c.phone.replace(/[^\d]/g, "")}`}
                        className="font-semibold text-ink-800 hover:text-brand-700"
                      >
                        {c.phone}
                      </a>{" "}
                      <span className="text-ink-400">({c.name})</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Báo cáo quỹ */}
      <section id="bao-cao-quy" className="mt-14 scroll-mt-24">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-ink-100 sm:p-10 md:grid-cols-[1fr_auto] [&>div:first-child]:mb-0">
          <SectionHeading
            eyebrow="Minh bạch"
            title="Báo cáo quỹ"
            description="Quét mã QR để xem báo cáo quỹ của HANS."
          />
          <div className="mx-auto w-full max-w-xs rounded-3xl bg-ink-50 p-4 ring-1 ring-ink-100 md:w-80">
            <img
              src="/reports/fund-report-qr.png"
              alt="Mã QR xem báo cáo quỹ HANS"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
