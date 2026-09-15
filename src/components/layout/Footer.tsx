import { Link } from "react-router-dom";
import { SOCIAL_LINKS, PHONE_REGIONS } from "../../data/contact";
import { FacebookIcon, TikTokIcon } from "../SocialIcons";

const SOCIAL_ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.9fr_1.4fr]">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img src="/logo.png" alt="Logo HANS" className="h-9 w-9 object-contain" />
            <span className="font-display text-base font-extrabold text-ink-900">
              Hơi Ấm Nhân Sinh
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-500">
            CLB thiện nguyện HANS lan tỏa yêu thương qua từng dự án nhỏ - vì một cộng đồng ấm áp
            và gắn kết hơn mỗi ngày.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition hover:bg-brand-100 hover:text-brand-700"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-800">Khám phá</p>
          <ul className="flex flex-col gap-2 text-sm text-ink-500">
            <li><Link to="/ve-hans/gioi-thieu" className="hover:text-brand-600">Giới thiệu</Link></li>
            <li><Link to="/ve-hans/thanh-tich" className="hover:text-brand-600">Thành tích khen thưởng</Link></li>
            <li><Link to="/hoat-dong" className="hover:text-brand-600">Danh sách hoạt động</Link></li>
            <li><Link to="/lien-he" className="hover:text-brand-600">Liên hệ</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-800">Số điện thoại theo khu vực</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {PHONE_REGIONS.map((r) => (
              <div key={r.region}>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  <span>🌼</span>
                  {r.region}
                </p>
                <ul className="mt-1 flex flex-col gap-0.5 text-sm text-ink-500">
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
      <div className="border-t border-ink-100 py-4 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} CLB Thiện Nguyện Hơi Ấm Nhân Sinh. Lan tỏa yêu thương.
      </div>
    </footer>
  );
}
