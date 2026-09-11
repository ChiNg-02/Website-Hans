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
 * The one and only point where a donation is written to the club's Google
 * Sheet — called exactly once per donation, when the donor confirms they've
 * transferred the money. The endpoint only accepts no-cors requests, so the
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
 * Assigns the DONATE1, DONATE2, ... transfer code shown in Step 2. This must
 * not touch the network — Step 1 only collects and validates form input, it
 * never calls the API — so the code is a sequential, per-browser counter.
 */
export function generateDonationId(): string {
  const storageKey = "hans-donate-counter";
  const nextNumber = Number(localStorage.getItem(storageKey) || "0") + 1;
  localStorage.setItem(storageKey, String(nextNumber));
  return `DONATE${nextNumber}`;
}
