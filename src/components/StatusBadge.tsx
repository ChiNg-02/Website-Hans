import type { ActivityStatus } from "../types/activity";

const STATUS_CONFIG: Record<ActivityStatus, { label: string; className: string }> = {
  upcoming: {
    label: "Sắp diễn ra",
    className: "bg-accent-100 text-accent-600",
  },
  ongoing: {
    label: "Đang diễn ra",
    className: "bg-brand-100 text-brand-700",
  },
  past: {
    label: "Đã hoàn thành",
    className: "bg-ink-100 text-ink-500",
  },
};

export function StatusBadge({ status }: { status: ActivityStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}
