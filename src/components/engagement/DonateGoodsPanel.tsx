import type { DonateGoodsMode } from "../../types/activity";

export function DonateGoodsPanel({
  mode,
  activityTitle,
}: {
  mode: DonateGoodsMode;
  activityTitle: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-ink-500">
        Cảm ơn bạn đã ủng hộ hiện vật cho hoạt động{" "}
        <span className="font-semibold text-ink-700">{activityTitle}</span>.
      </p>

      <div>
        <p className="mb-2 text-sm font-semibold text-ink-700">Hiện vật tiếp nhận</p>
        <ul className="flex flex-col gap-1.5">
          {mode.acceptedItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
              <span className="mt-0.5 text-brand-500">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-ink-700">Điểm tiếp nhận</p>
        <ul className="flex flex-col gap-1.5">
          {mode.dropOffLocations.map((loc) => (
            <li key={loc} className="flex items-start gap-2 text-sm text-ink-600">
              <span className="mt-0.5">📍</span>
              {loc}
            </li>
          ))}
        </ul>
      </div>

      {mode.guideline && (
        <p className="rounded-xl bg-ink-50 px-3 py-2 text-sm text-ink-600">{mode.guideline}</p>
      )}

      {(mode.contactPerson || mode.contactPhone) && (
        <p className="text-sm text-ink-500">
          Liên hệ hỗ trợ:{" "}
          <span className="font-semibold text-ink-700">
            {mode.contactPerson}
            {mode.contactPhone ? ` - ${mode.contactPhone}` : ""}
          </span>
        </p>
      )}
    </div>
  );
}
