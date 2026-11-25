import type { Activity } from "../types/activity";

/** setTimeout stores its delay as a signed 32-bit int; longer waits fire immediately. */
const MAX_TIMEOUT_MS = 2_147_483_647;

function displayEnd(activity: Pick<Activity, "displayUntil">): number | undefined {
  if (!activity.displayUntil) return undefined;
  const end = Date.parse(activity.displayUntil);
  return Number.isNaN(end) ? undefined : end;
}

/**
 * Whether an activity should still appear in the "sắp/đang diễn ra" lists at
 * `now` (ms since epoch). Activities without a (valid) displayUntil are always
 * listed, so existing data is unaffected. The deadline itself is exclusive:
 * at exactly displayUntil the activity is already hidden.
 */
export function isActivityListed(activity: Pick<Activity, "displayUntil">, now: number): boolean {
  const end = displayEnd(activity);
  return end === undefined || now < end;
}

/** Milliseconds until the next listed activity expires, or undefined if none will. */
export function msUntilNextExpiry(
  activities: Pick<Activity, "displayUntil">[],
  now: number,
): number | undefined {
  let next: number | undefined;
  for (const activity of activities) {
    const end = displayEnd(activity);
    if (end !== undefined && end > now && (next === undefined || end < next)) next = end;
  }
  return next === undefined ? undefined : Math.min(next - now, MAX_TIMEOUT_MS);
}
