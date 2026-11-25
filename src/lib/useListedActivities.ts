import { useEffect, useMemo, useState } from "react";
import type { Activity } from "../types/activity";
import { isActivityListed, msUntilNextExpiry } from "./activityVisibility";

/**
 * Filters out activities whose displayUntil has passed, and re-renders by
 * itself at the next expiry so a page left open updates without a reload.
 * Also re-checks when the tab regains focus/visibility, since timers can be
 * delayed while a laptop sleeps or a background tab is throttled.
 */
export function useListedActivities<T extends Activity>(activities: T[]): T[] {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const refresh = () => setNow(Date.now());
    const delay = msUntilNextExpiry(activities, now);
    // +50ms so the timer never fires a hair before the deadline.
    const timer = delay === undefined ? undefined : window.setTimeout(refresh, delay + 50);
    document.addEventListener("visibilitychange", refresh);
    window.addEventListener("focus", refresh);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", refresh);
      window.removeEventListener("focus", refresh);
    };
  }, [activities, now]);

  return useMemo(() => activities.filter((a) => isActivityListed(a, now)), [activities, now]);
}
