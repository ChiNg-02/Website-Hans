import { useState } from "react";
import type { FormEvent } from "react";
import { SectionHeading } from "../components/SectionHeading";

const CONTACT_INFO = [
  { icon: "📍", label: "Địa chỉ", value: "12 Nguyễn Trãi, Thanh Xuân, Hà Nội" },
  { icon: "✉️", label: "Email", value: "hoiamnhansinh@gmail.com" },
  { icon: "📞", label: "Điện thoại", value: "0912 345 678" },
  { icon: "🌐", label: "Fanpage", value: "facebook.com/hoiamnhansinh" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Kết nối"
        title="Liên hệ với HANS"
        description="Có câu hỏi, ý tưởng hợp tác hay đơn giản là muốn trò chuyện? Hãy gửi tin nhắn cho chúng mình."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg">
                  {c.icon}
                </span>
                <div>
                  <p className="text-xs text-ink-400">{c.label}</p>
                  <p className="font-medium text-ink-800">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-ink-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
                💌
              </span>
              <p className="font-display text-lg font-bold text-ink-900">Đã gửi thành công!</p>
              <p className="text-sm text-ink-500">
                Cảm ơn bạn đã liên hệ. HANS sẽ phản hồi trong thời gian sớm nhất.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink-100 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                  Họ và tên
                  <input
                    required
                    type="text"
                    className="rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                  Email
                  <input
                    required
                    type="email"
                    className="rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                Chủ đề
                <input
                  type="text"
                  placeholder="Hợp tác dự án, góp ý, câu hỏi..."
                  className="rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                Nội dung
                <textarea
                  required
                  rows={5}
                  className="resize-none rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <button
                type="submit"
                className="self-start rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
              >
                Gửi liên hệ
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
