import { useState } from "react";
import type { FormEvent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getActivityBySlug } from "../../data/activities";
import type { DonateMoneyMode } from "../../types/activity";
import { CoverArt } from "../../components/CoverArt";
import { generateDonationId, submitDonationRecord } from "../../lib/donationApi";
import { buildVietQrUrl } from "../../lib/vietqr";

const inputClass =
  "rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2].map((n, i) => (
        <div key={n} className="flex items-center gap-2">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
              step === n
                ? "bg-brand-500 text-white"
                : step > n
                  ? "bg-brand-100 text-brand-600"
                  : "bg-ink-100 text-ink-400"
            }`}
          >
            {step > n ? "✓" : n}
          </span>
          {i === 0 && <span className="h-px w-6 bg-ink-200" />}
        </div>
      ))}
    </div>
  );
}

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
      <div className="min-w-0 text-left">
        <p className="text-xs text-ink-400">{label}</p>
        <p className="truncate font-medium text-ink-800">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition hover:bg-brand-50"
      >
        {copied ? "Đã chép ✓" : "Sao chép"}
      </button>
    </div>
  );
}

interface FormState {
  name: string;
  email: string;
  amount: string;
  message: string;
  anonymous: boolean;
}

const initialForm: FormState = { name: "", email: "", amount: "", message: "", anonymous: false };

export function DonateMoney() {
  const { slug } = useParams<{ slug: string }>();
  const activity = slug ? getActivityBySlug(slug) : undefined;
  const donateMode = activity?.engagementModes.find(
    (m): m is DonateMoneyMode => m.type === "donate_money",
  );

  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [donationId, setDonationId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [confirmError, setConfirmError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [qrFailed, setQrFailed] = useState(false);

  if (!activity || !donateMode) {
    return <Navigate to={slug ? `/hoat-dong/${slug}` : "/hoat-dong"} replace />;
  }

  const amountNumber = Number(form.amount) || 0;

  /**
   * Step 1 only validates and stashes the donor's input in state — it must
   * never touch the network. The DONATE code is assigned locally so it can
   * be shown as the transfer content in Step 2; the one and only API call
   * for this donation happens later, in handleConfirm.
   */
  function handleSubmitStep1(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || amountNumber < 1000) {
      setError("Vui lòng điền đầy đủ thông tin. Số tiền tối thiểu là 1.000đ.");
      return;
    }

    // Reuse the existing code if the donor is coming back from step 2 —
    // never assign a new one for the same pass through the form.
    setDonationId((existing) => existing ?? generateDonationId());
    setQrFailed(false);
    setStep(2);
  }

  async function handleConfirm() {
    // Guards against duplicate submissions from a double click or the
    // button re-firing before its disabled state has re-rendered.
    if (!donationId || confirming || confirmed) return;
    setConfirmError("");
    setConfirming(true);
    try {
      await submitDonationRecord({
        activitySlug: activity!.slug,
        activityTitle: activity!.title,
        name: form.anonymous ? "Ẩn danh" : form.name.trim(),
        email: form.email.trim(),
        amount: amountNumber,
        message: form.message.trim(),
        anonymous: form.anonymous,
        transferCode: donationId,
        createdAt: new Date().toISOString(),
        paymentConfirmed: true,
        confirmedAt: new Date().toISOString(),
      });
      setConfirmed(true);
    } catch {
      setConfirmError("Chưa thể gửi xác nhận. Vui lòng kiểm tra kết nối và thử lại.");
    } finally {
      setConfirming(false);
    }
  }

  const qrUrl = donationId
    ? buildVietQrUrl(
        donateMode.bankName,
        donateMode.accountNumber,
        donateMode.accountHolder,
        amountNumber,
        donationId,
      )
    : null;

  return (
    <div>
      <CoverArt gradient={activity.coverGradient} className="h-40 sm:h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-3xl flex-col justify-end px-4 pb-6 sm:px-6">
          <Link
            to={`/hoat-dong/${activity.slug}`}
            className="mb-2 inline-flex w-fit items-center gap-1 text-xs font-semibold text-white/90 hover:text-white"
          >
            ← {activity.title}
          </Link>
          <h1 className="font-display text-2xl font-extrabold text-white drop-shadow sm:text-3xl">
            Ủng hộ bằng tiền
          </h1>
        </div>
      </CoverArt>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-6 flex flex-col-reverse items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">
            Đóng góp của bạn sẽ đồng hành cùng{" "}
            <span className="font-semibold text-ink-700">{activity.title}</span>.
          </p>
          <StepIndicator step={step} />
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink-100 sm:p-8">
          {step === 1 && (
            <form onSubmit={handleSubmitStep1} className="flex flex-col gap-4">
              <div>
                <h2 className="font-display text-lg font-bold text-ink-900">Thông tin của bạn</h2>
                <p className="text-sm text-ink-500">
                  Để lại vài thông tin nhỏ, HANS sẽ gửi bạn hướng dẫn chuyển khoản.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                  Họ và tên
                  <input
                    required
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Nguyễn Văn A"
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                  Email
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="ban@email.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                Số tiền (VNĐ)
                <input
                  required
                  type="number"
                  min={1000}
                  step={1000}
                  inputMode="numeric"
                  value={form.amount}
                  onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
                  placeholder="100000"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-1 text-sm font-medium text-ink-700">
                Lời chúc (không bắt buộc)
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Một lời nhắn gửi đến cộng đồng..."
                  className={`resize-none ${inputClass}`}
                />
              </label>
              <label className="flex items-center gap-2 text-sm text-ink-600">
                <input
                  type="checkbox"
                  checked={form.anonymous}
                  onChange={(e) => setForm((f) => ({ ...f, anonymous: e.target.checked }))}
                  className="h-4 w-4 rounded accent-brand-500"
                />
                Hiển thị khoản đóng góp dưới tên Ẩn danh
              </label>

              {error && <p className="text-sm font-medium text-accent-600">{error}</p>}

              <button
                type="submit"
                className="mt-1 self-start rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
              >
                Tiếp tục để nhận thông tin chuyển khoản
              </button>
            </form>
          )}

          {step === 2 && donationId && (
            <div className="flex flex-col items-center gap-5 text-center">
              {confirmed ? (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl">
                    🎉
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-ink-900">
                      Cảm ơn tấm lòng của bạn!
                    </p>
                    <p className="mt-1 text-sm text-ink-500">
                      HANS đã ghi nhận xác nhận chuyển khoản cho mã{" "}
                      <span className="font-semibold text-ink-700">{donationId}</span>.
                    </p>
                  </div>
                  <Link
                    to={`/hoat-dong/${activity.slug}`}
                    className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    ← Quay lại chi tiết hoạt động
                  </Link>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="font-display text-lg font-bold text-ink-900">
                      Sau khi chuyển khoản
                    </h2>
                    <p className="mt-1 text-sm text-ink-500">
                      Mỗi đóng góp đều vô cùng trân quý. Vui lòng chuyển đúng nội dung bên dưới để
                      HANS xác nhận trọn vẹn nhé!
                    </p>
                  </div>

                  <div className="w-full max-w-[220px] rounded-2xl border border-ink-100 bg-white p-3 shadow-sm">
                    {qrUrl && !qrFailed ? (
                      <img
                        src={qrUrl}
                        alt="Mã QR chuyển khoản"
                        className="aspect-square w-full object-contain"
                        onError={() => setQrFailed(true)}
                      />
                    ) : (
                      <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-ink-50 p-4 text-xs text-ink-400">
                        Vui lòng chuyển khoản thủ công theo thông tin bên dưới.
                      </div>
                    )}
                  </div>

                  <div className="flex w-full flex-col gap-2">
                    <CopyField
                      label="Ngân hàng"
                      value={donateMode.bankName + (donateMode.branch ? ` - ${donateMode.branch}` : "")}
                    />
                    <CopyField label="Số tài khoản" value={donateMode.accountNumber} />
                    <CopyField label="Chủ tài khoản" value={donateMode.accountHolder} />
                    <CopyField label="Nội dung chuyển khoản" value={donationId} />
                  </div>

                  {donateMode.note && (
                    <p className="rounded-xl bg-accent-50 px-3 py-2 text-xs text-accent-600">
                      {donateMode.note}
                    </p>
                  )}

                  {confirmError && (
                    <p className="text-sm font-medium text-accent-600">{confirmError}</p>
                  )}

                  <div className="flex w-full flex-col gap-2">
                    <button
                      type="button"
                      onClick={handleConfirm}
                      disabled={confirming}
                      className="w-full rounded-full bg-brand-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600 disabled:cursor-wait disabled:opacity-60"
                    >
                      {confirming ? "Đang gửi xác nhận..." : "Tôi đã chuyển khoản — Gửi xác nhận"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full rounded-full border border-ink-200 px-6 py-2.5 text-sm font-semibold text-ink-600 transition hover:bg-ink-50"
                    >
                      ← Quay lại chỉnh sửa thông tin
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
