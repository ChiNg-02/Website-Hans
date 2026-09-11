const GOOGLE_SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbzC9ssdTGy2btR--HneOxPUOYySTr94jx5-7oSKQownWJRG_vWD9BiOpg02w3xoM9ZUvA/exec";

export interface DonationRecord {
  activitySlug: string;
  activityTitle: string;
  name: string;
  email: string;
  amount: number;
  message: string;
  anonymous: boolean;
  transferCode: string;
  createdAt: string;
  paymentConfirmed?: boolean;
  confirmedAt?: string;
}

/**
 * Fire-and-forget write to the club's Google Sheet via the existing Apps
 * Script Web App. The endpoint only accepts no-cors requests, so the
 * response is opaque — a resolved promise only means the request went out,
 * not that the sheet accepted it.
 */
export async function submitDonationRecord(data: DonationRecord): Promise<void> {
  await fetch(GOOGLE_SHEET_API_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  });
}

/**
 * Asks the Apps Script backend for the next sequential DONATE id via a JSONP
 * call (Apps Script Web Apps can't set CORS headers on GET responses).
 */
function reserveDonationId(): Promise<string> {
  return new Promise((resolve, reject) => {
    const callbackName = `donationIdCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Không thể cấp mã quyên góp."));
    }, 3000);
    const jsonpWindow = window as unknown as Record<string, ((result: { id?: string }) => void) | undefined>;
    const cleanup = () => {
      window.clearTimeout(timeout);
      delete jsonpWindow[callbackName];
      script.remove();
    };
    jsonpWindow[callbackName] = (result: { id?: string }) => {
      cleanup();
      if (!result?.id || !/^DONATE\d+$/.test(result.id)) {
        reject(new Error("Mã quyên góp không hợp lệ."));
        return;
      }
      resolve(result.id);
    };
    script.src = `${GOOGLE_SHEET_API_URL}?action=reserveId&callback=${callbackName}`;
    script.onerror = () => {
      cleanup();
      reject(new Error("Không thể kết nối máy chủ cấp mã."));
    };
    document.head.appendChild(script);
  });
}

/** Local, per-browser fallback so the flow still works while the Apps Script's reserveId action is unavailable. */
function getFallbackDonationId(): string {
  const storageKey = "hans-donate-counter";
  const nextNumber = Number(localStorage.getItem(storageKey) || "0") + 1;
  localStorage.setItem(storageKey, String(nextNumber));
  return `DONATE${nextNumber}`;
}

export async function getDonationId(): Promise<string> {
  try {
    return await reserveDonationId();
  } catch {
    return getFallbackDonationId();
  }
}
