import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <span className="text-6xl">🍃</span>
      <h1 className="font-display text-2xl font-extrabold text-ink-900">
        Không tìm thấy trang này
      </h1>
      <p className="text-ink-500">Trang bạn tìm không tồn tại hoặc đã được di chuyển.</p>
      <Link
        to="/"
        className="rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
