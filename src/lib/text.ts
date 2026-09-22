/** Strips Vietnamese diacritics, e.g. "Nguyễn Văn A" -> "Nguyen Van A". */
export function removeDiacritics(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}
