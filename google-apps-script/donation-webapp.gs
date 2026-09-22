/**
 * Bound to the donation Google Sheet via Extensions > Apps Script, and
 * deployed as a Web App. Receives the JSON payload sent by
 * src/lib/donationApi.ts (submitDonationRecord) and writes one row per
 * donation - starting at row 3, matching the sheet's existing columns
 * (A: ID/Nội dung chuyển khoản, B: Thời gian, C: Tên người gửi, D: Email,
 * E: Số tiền ủng hộ, F: Lời chúc). Column A holds the exact transfer content
 * string the donor was shown to copy for their bank transfer - not an
 * auto-generated ID - and is used to dedupe: re-clicking "Tôi đã chuyển
 * khoản" never appends a second row for the same transfer content.
 *
 * This file is not executed by the website itself - it must be pasted into
 * the Apps Script editor of the target sheet, then published with
 * Deploy > Manage deployments, keeping the same /exec URL already used by
 * GOOGLE_SHEET_API_URL in src/lib/donationApi.ts, with "Who has access" set
 * to "Anyone".
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = JSON.parse(e.postData.contents);
  const content = data.transferCode;

  if (content) {
    const startRow = 3;
    const lastRow = sheet.getLastRow();
    const existingValues =
      lastRow >= startRow
        ? sheet.getRange(startRow, 1, lastRow - startRow + 1, 1).getValues().flat()
        : [];

    if (!existingValues.includes(content)) {
      const nextRow = Math.max(lastRow + 1, startRow);
      const timestamp = data.confirmedAt || data.createdAt || new Date().toISOString();
      sheet
        .getRange(nextRow, 1, 1, 6)
        .setValues([
          [
            content,
            Utilities.formatDate(new Date(timestamp), "GMT+7", "dd/MM/yyyy HH:mm:ss"),
            data.name || "",
            data.email || "",
            data.amount || "",
            data.message || "",
          ],
        ]);
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON,
  );
}
