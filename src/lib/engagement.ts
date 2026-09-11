import type { EngagementMode } from "../types/activity";

export const ENGAGEMENT_LABEL: Record<EngagementMode["type"], string> = {
  volunteer: "Đồng Hành",
  donate_money: "Ủng Hộ (Chuyển khoản)",
  donate_goods: "Ủng Hộ (Hiện vật)",
};

export const ENGAGEMENT_SHORT_LABEL: Record<EngagementMode["type"], string> = {
  volunteer: "Đồng hành",
  donate_money: "Ủng hộ",
  donate_goods: "Ủng hộ",
};

export const ENGAGEMENT_ICON: Record<EngagementMode["type"], string> = {
  volunteer: "🤝",
  donate_money: "💚",
  donate_goods: "📦",
};

export const ENGAGEMENT_STYLE: Record<EngagementMode["type"], string> = {
  volunteer: "bg-brand-500 text-white hover:bg-brand-600",
  donate_money: "bg-accent-500 text-white hover:bg-accent-600",
  donate_goods: "bg-ink-800 text-white hover:bg-ink-900",
};

/**
 * When an activity supports both donation modes, the short "Ủng hộ" label
 * becomes ambiguous — disambiguate only in that case so single-mode
 * activities keep the terse label used in the spec's examples.
 */
export function labelForMode(mode: EngagementMode, allModes: EngagementMode[]): string {
  const donationTypes = allModes.filter(
    (m) => m.type === "donate_money" || m.type === "donate_goods",
  );
  if (donationTypes.length > 1) {
    return mode.type === "donate_money" ? "Ủng hộ tiền" : mode.type === "donate_goods" ? "Ủng hộ hiện vật" : ENGAGEMENT_SHORT_LABEL[mode.type];
  }
  return ENGAGEMENT_SHORT_LABEL[mode.type];
}
