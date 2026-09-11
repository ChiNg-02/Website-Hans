import { useState } from "react";
import type { DonateMoneyMode } from "../../types/activity";

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-ink-50 px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs text-ink-400">{label}</p>
        <p className="truncate font-medium text-ink-800">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition hover:bg-brand-50"
      >
        {copied ? "Đã chép ✓" : "Sao chép"}
      </button>
    </div>
  );
}

export function DonateMoneyPanel({
  mode,
  activityTitle,
}: {
  mode: DonateMoneyMode;
  activityTitle: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-ink-500">
        Cảm ơn bạn đã ủng hộ cho hoạt động{" "}
        <span className="font-semibold text-ink-700">{activityTitle}</span>. Vui lòng chuyển
        khoản theo thông tin bên dưới.
      </p>
      <div className="flex flex-col gap-2">
        <CopyField label="Ngân hàng" value={mode.bankName + (mode.branch ? ` - ${mode.branch}` : "")} />
        <CopyField label="Số tài khoản" value={mode.accountNumber} />
        <CopyField label="Chủ tài khoản" value={mode.accountHolder} />
        <CopyField label="Nội dung chuyển khoản" value={mode.transferNote} />
      </div>
      <p className="rounded-xl bg-accent-50 px-3 py-2 text-xs text-accent-600">
        Vui lòng ghi đúng nội dung chuyển khoản để HANS xác nhận và gửi thư cảm ơn tới bạn.
      </p>
    </div>
  );
}
