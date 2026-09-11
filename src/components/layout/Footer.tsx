import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
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
            <li>0912 345 678</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100 py-4 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} CLB Thiện Nguyện Hơi Ấm Nhân Sinh. Lan tỏa yêu thương.
      </div>
    </footer>
  );
}
