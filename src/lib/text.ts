/** Strips Vietnamese diacritics, e.g. "Nguyễn Văn A" -> "Nguyen Van A". */
export function removeDiacritics(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

/** Formats an ISO date as dd/mm/yyyy, e.g. "2026-09-25" -> "25/09/2026". */
export function formatDateVi(date: string): string {
  return new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
