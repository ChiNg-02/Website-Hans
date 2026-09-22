import { removeDiacritics } from "./text";

export function formatDateDDMMYYYY(date: Date): string {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${dd}${mm}${date.getFullYear()}`;
}

/**
 * Builds the bank transfer content shown to a donor.
 *
 * - With a project code (e.g. "TTVC"): "Ho Ten khong dau" + " " + code -
 *   e.g. "NguyenVanA TTVC". Each project can be given its own code via
 *   DonateMoneyMode.projectCode.
 * - Without one (default): full name without diacritics/spaces, followed by
 *   the confirmation date (DDMMYYYY) and the amount, with no separators -
 *   e.g. "NguyenVanA22092026100000".
 */
export function buildTransferContent(
  name: string,
  amount: number,
  date: Date,
  projectCode?: string,
): string {
  const namePart = removeDiacritics(name.trim()).replace(/\s+/g, "");
  if (projectCode) {
    return `${namePart} ${projectCode}`;
  }
  return `${namePart}${formatDateDDMMYYYY(date)}${Math.round(amount)}`;
}
