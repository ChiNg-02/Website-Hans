import { SectionHeading } from "../components/SectionHeading";
import { SOCIAL_LINKS, PHONE_REGIONS } from "../data/contact";
import { FacebookIcon, TikTokIcon } from "../components/SocialIcons";

const SOCIAL_ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};

export function FundReport() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Kết nối"
        title="Liên hệ"
        description="Có câu hỏi, ý tưởng hợp tác hay đơn giản là muốn trò chuyện? Hãy gửi tin nhắn cho chúng mình."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-ink-400">{social.label}</p>
                  <p className="font-medium text-ink-800">Theo dõi HANS trên {social.label}</p>
                </div>
              </a>
            );
          })}

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-400">
              <span>📞</span>Số điện thoại theo khu vực
            </p>
            <div className="flex flex-col gap-3">
              {PHONE_REGIONS.map((region) => (
                <div key={region.region}>
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    <span>🌼</span>
                    {region.region}
                  </p>
                  <ul className="mt-1 flex flex-col gap-0.5 text-sm text-ink-600">
                    {region.contacts.map((contact) => (
                      <li key={contact.phone}>
                        {contact.phone} <span className="text-ink-400">({contact.name})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink-100 sm:p-8 lg:col-span-3">
          <h2 className="font-display text-xl font-extrabold text-ink-900">Báo cáo quỹ</h2>
          <img
            src="/reports/fund-report-qr.png"
            alt="Mã QR xem báo cáo quỹ HANS"
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
