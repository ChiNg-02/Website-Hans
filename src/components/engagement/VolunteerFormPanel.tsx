import { useState } from "react";
import type { FormEvent } from "react";
import type { VolunteerMode } from "../../types/activity";

export function VolunteerFormPanel({
  mode,
  activityTitle,
}: {
  mode: VolunteerMode;
  activityTitle: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState(mode.roles?.[0] ?? "");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
          🎉
        </div>
        <p className="font-display text-lg font-bold text-ink-900">Đăng ký thành công!</p>
        <p className="text-sm text-ink-500">
          Cảm ơn bạn đã đăng ký đồng hành cùng "{activityTitle}". Đội ngũ HANS sẽ liên hệ với
          bạn trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-sm text-ink-500">
        Đăng ký trở thành tình nguyện viên cho hoạt động{" "}
        <span className="font-semibold text-ink-700">{activityTitle}</span>.
      </p>
      {mode.note && (
        <p className="rounded-xl bg-accent-50 px-3 py-2 text-sm text-accent-600">{mode.note}</p>
      )}
      <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
        Họ và tên
        <input
          required
          type="text"
          placeholder="Nguyễn Văn A"
          className="rounded-xl border border-ink-200 px-3 py-2 text-sm text-ink-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
          Số điện thoại
          <input
            required
            type="tel"
            placeholder="09xx xxx xxx"
            className="rounded-xl border border-ink-200 px-3 py-2 text-sm text-ink-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
          Email
          <input
            required
            type="email"
            placeholder="ban@email.com"
            className="rounded-xl border border-ink-200 px-3 py-2 text-sm text-ink-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>
      {mode.roles && mode.roles.length > 0 && (
        <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
          Vai trò mong muốn
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-xl border border-ink-200 px-3 py-2 text-sm text-ink-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          >
            {mode.roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      )}
      <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
        Lời nhắn (không bắt buộc)
        <textarea
          rows={3}
          placeholder="Chia sẻ với HANS lý do bạn muốn đồng hành..."
          className="resize-none rounded-xl border border-ink-200 px-3 py-2 text-sm text-ink-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </label>
      {mode.deadline && (
        <p className="text-xs text-ink-400">
          Hạn đăng ký: {new Date(mode.deadline).toLocaleDateString("vi-VN")}
        </p>
      )}
      <button
        type="submit"
        className="mt-1 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
      >
        Gửi đăng ký
      </button>
    </form>
  );
}
