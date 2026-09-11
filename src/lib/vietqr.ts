/** Bank BIN codes for the VietQR image API, keyed by lowercased bank name. Add a bank here to enable its QR code. */
const BANK_BIN: Record<string, string> = {
  vietcombank: "970436",
  techcombank: "970407",
  bidv: "970418",
  agribank: "970405",
  "mb bank": "970422",
  mbbank: "970422",
  acb: "970416",
  vpbank: "970432",
  tpbank: "970423",
  sacombank: "970403",
  vietinbank: "970415",
};

export function buildVietQrUrl(
  bankName: string,
  accountNumber: string,
  accountHolder: string,
  amount: number,
  addInfo: string,
): string | null {
  const bin = BANK_BIN[bankName.trim().toLowerCase()];
  if (!bin) return null;
  const params = new URLSearchParams({
    accountName: accountHolder,
    amount: amount > 0 ? String(Math.round(amount)) : "0",
    addInfo,
  });
  return `https://api.vietqr.io/image/${bin}-${accountNumber}-compact2.png?${params.toString()}`;
}
