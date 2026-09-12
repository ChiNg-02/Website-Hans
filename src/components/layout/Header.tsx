import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

interface NavChild {
  to: string;
  label: string;
}

interface NavLeaf extends NavChild {
  kind: "leaf";
}

interface NavGroup {
  kind: "group";
  label: string;
  children: NavChild[];
}

const NAV_LINKS: (NavLeaf | NavGroup)[] = [
  {
    kind: "group",
    label: "Về HANS",
    children: [
      { to: "/ve-hans/gioi-thieu", label: "Giới thiệu" },
      { to: "/ve-hans/thanh-tich", label: "Thành tích khen thưởng" },
    ],
  },
  { kind: "leaf", to: "/hoat-dong?filter=featured", label: "Dự án/Hoạt động nổi bật" },
  { kind: "leaf", to: "/hoat-dong", label: "Đồng hành cùng HANS" },
  { kind: "leaf", to: "/lien-he", label: "Liên hệ" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setMobileOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src="/logo.png" alt="Logo HANS" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold text-brand-800 sm:text-xl">
              Hơi Ấm
            </span>
            <span className="text-xs font-normal text-brand-500 sm:text-sm">Nhân Sinh</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.kind === "group" ? (
              <div key={link.label} className="group relative">
                <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-bold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700">
                  {link.label}
                  <span className="text-xs">▾</span>
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="flex w-56 flex-col gap-1 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-ink-100">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `rounded-xl px-3 py-2 text-sm font-medium transition ${
                            isActive
                              ? "bg-brand-50 text-brand-700"
                              : "text-ink-600 hover:bg-ink-50"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-bold transition ${
                    isActive && link.to === "/hoat-dong"
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden items-center md:flex">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Tìm kiếm..."
              className="w-40 rounded-full border border-ink-200 bg-ink-50 px-4 py-2 text-sm text-ink-700 outline-none transition focus:w-56 focus:border-brand-300 focus:bg-white"
            />
          </form>
          <Link
            to="/hoat-dong"
            className="hidden rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 sm:inline-flex"
          >
            Đồng hành ngay
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Mở menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-700 hover:bg-brand-50 lg:hidden"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink-100 bg-white px-4 py-4 lg:hidden">
          <form onSubmit={handleSearch} className="mb-3 flex">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Tìm kiếm hoạt động..."
              className="w-full rounded-full border border-ink-200 bg-ink-50 px-4 py-2 text-sm outline-none focus:border-brand-300"
            />
          </form>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.flatMap((link) =>
              link.kind === "group"
                ? link.children.map((c) => ({ to: c.to, label: `${link.label} · ${c.label}` }))
                : [{ to: link.to, label: link.label }],
            ).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
