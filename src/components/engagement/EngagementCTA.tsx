import { useState } from "react";
import type { Activity, EngagementMode } from "../../types/activity";
import { Modal } from "../Modal";
import { ENGAGEMENT_ICON, ENGAGEMENT_LABEL, ENGAGEMENT_STYLE, labelForMode } from "../../lib/engagement";
import { VolunteerFormPanel } from "./VolunteerFormPanel";
import { DonateMoneyPanel } from "./DonateMoneyPanel";
import { DonateGoodsPanel } from "./DonateGoodsPanel";

/**
 * Renders exactly one CTA per engagement mode the activity declares — nothing
 * more, nothing less. Adding a new activity only means adding entries to its
 * `engagementModes` array; this component never needs to change.
 */
export function EngagementCTA({ activity }: { activity: Activity }) {
  const [activeMode, setActiveMode] = useState<EngagementMode | null>(null);

  if (activity.engagementModes.length === 0) {
    return (
      <div className="rounded-2xl bg-ink-100 px-5 py-4 text-sm text-ink-500">
        Hoạt động này đã kết thúc. Cảm ơn tất cả các bạn đã đồng hành cùng HANS!
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {activity.engagementModes.map((mode) => (
          <button
            key={mode.type}
            onClick={() => setActiveMode(mode)}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide shadow-sm transition ${ENGAGEMENT_STYLE[mode.type]}`}
          >
            <span>{ENGAGEMENT_ICON[mode.type]}</span>
            {labelForMode(mode, activity.engagementModes)}
          </button>
        ))}
      </div>

      <Modal
        open={activeMode !== null}
        onClose={() => setActiveMode(null)}
        title={activeMode ? ENGAGEMENT_LABEL[activeMode.type] : ""}
        icon={activeMode ? ENGAGEMENT_ICON[activeMode.type] : undefined}
      >
        {activeMode?.type === "volunteer" && (
          <VolunteerFormPanel mode={activeMode} activityTitle={activity.title} />
        )}
        {activeMode?.type === "donate_money" && (
          <DonateMoneyPanel mode={activeMode} activityTitle={activity.title} />
        )}
        {activeMode?.type === "donate_goods" && (
          <DonateGoodsPanel mode={activeMode} activityTitle={activity.title} />
        )}
      </Modal>
    </>
  );
}
