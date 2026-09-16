import type { JSX } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SOCIAL_LINKS, PHONE_REGIONS } from "../data/contact";
import { FacebookIcon, TikTokIcon } from "../components/SocialIcons";

const SOCIAL_ICONS: Record<string, (props: { className?: string }) => JSX.Element> = {
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Kết nối"
        title="Liên hệ với HANS"
        description="Theo dõi HANS trên mạng xã hội hoặc liên hệ với chúng mình theo khu vực."
      />
      <div className="max-w-xl">
        <div className="flex flex-col gap-4">
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
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-ink-400">{s.label}</p>
                  <p className="font-medium text-ink-800">Theo dõi HANS trên {s.label}</p>
                </div>
              </a>
            );
          })}

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
              <span>📞</span>Số điện thoại theo khu vực
            </p>
            <div className="flex flex-col gap-3">
              {PHONE_REGIONS.map((r) => (
                <div key={r.region}>
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    <span>🌼</span>
                    {r.region}
                  </p>
                  <ul className="mt-1 flex flex-col gap-0.5 text-sm text-ink-600">
                    {r.contacts.map((c) => (
                      <li key={c.phone}>
                        {c.phone} <span className="text-ink-400">({c.name})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
