import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CLBThienNguyenHoiAmNhanSinh",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@clbhoiamnhansinh?is_from_webapp=1&sender_device=pc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.62h-3.2v13.4a3.28 3.28 0 1 1-2.3-3.13V9.03a6.47 6.47 0 0 0-1.02-.08A6.53 6.53 0 1 0 15.2 15.4V9.4a8.1 8.1 0 0 0 4.8 1.55V7.76a4.83 4.83 0 0 1-3.4-1.94Z" />
      </svg>
    ),
  },
];

const PHONE_REGIONS = [
  {
    region: "Khu vực Long Thành",
    contacts: [
      { phone: "097 9902678", name: "Như" },
      { phone: "03.3636.2525", name: "Thịnh" },
    ],
  },
  {
    region: "Khu vực Biên Hòa",
    contacts: [{ phone: "0939 710728", name: "Chị Phương Vy" }],
  },
  {
    region: "Khu vực Sài Gòn",
    contacts: [{ phone: "0931 674 603", name: "Chị Nhuận Hiếu" }],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.8fr_1fr_1.3fr]">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img src="/logo.png" alt="Logo HANS" className="h-9 w-9 object-contain" />
            <span className="font-display text-base font-extrabold text-ink-900">
              Hơi Ấm Nhân Sinh
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-500">
            CLB thiện nguyện HANS lan tỏa yêu thương qua từng dự án nhỏ — vì một cộng đồng ấm áp
            và gắn kết hơn mỗi ngày.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition hover:bg-brand-100 hover:text-brand-700"
              >
                {s.icon}
              </a>
            ))}
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
          <p className="mb-3 text-sm font-semibold text-ink-800">Liên hệ</p>
          <ul className="flex flex-col gap-2 text-sm text-ink-500">
            <li>12 Nguyễn Trãi, Thanh Xuân, Hà Nội</li>
            <li>hoiamnhansinh@gmail.com</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-ink-800">Số điện thoại theo khu vực</p>
          <div className="flex flex-col gap-3">
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
