import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Activity, EngagementMode } from "../../types/activity";
import { Modal } from "../Modal";
import { ENGAGEMENT_ICON, ENGAGEMENT_LABEL, ENGAGEMENT_STYLE, labelForMode } from "../../lib/engagement";
import { VolunteerFormPanel } from "./VolunteerFormPanel";
import { DonateGoodsPanel } from "./DonateGoodsPanel";

/**
 * Renders exactly one CTA per engagement mode the activity declares - nothing
 * more, nothing less. Adding a new activity only means adding entries to its
 * `engagementModes` array; this component never needs to change.
 *
 * "donate_money" is the one mode that opens a full page instead of a modal -
 * it's a multi-step flow (donor info → payment) that needs its own URL.
 */
export function EngagementCTA({ activity }: { activity: Activity }) {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState<EngagementMode | null>(null);

  if (activity.engagementModes.length === 0) {
    return (
      <div className="rounded-2xl bg-ink-100 px-5 py-4 text-sm text-ink-500">
        Hoạt động này đã kết thúc. Cảm ơn tất cả các bạn đã đồng hành cùng HANS!
      </div>
    );
  }

  function handleClick(mode: EngagementMode) {
    if (mode.type === "donate_money") {
      navigate(`/hoat-dong/${activity.slug}/ung-ho`);
      return;
    }
    setActiveMode(mode);
  }

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {activity.engagementModes.map((mode) => (
          <button
            key={mode.type}
            onClick={() => handleClick(mode)}
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
        {activeMode?.type === "donate_goods" && (
          <DonateGoodsPanel mode={activeMode} activityTitle={activity.title} />
        )}
      </Modal>
    </>
  );
}
