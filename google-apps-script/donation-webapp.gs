/**
 * Bound to the donation Google Sheet via Extensions > Apps Script, and
 * deployed as a Web App. Receives the JSON payload sent by
 * src/lib/donationApi.ts (submitDonationRecord) and writes the transfer
 * content into column A, starting at row 3 - only once per unique transfer
 * content string, so re-clicking "Tôi đã chuyển khoản" never duplicates a row.
 *
 * This file is not executed by the website itself - it must be pasted into
 * the Apps Script editor of the target sheet, then published with
 * Deploy > Manage deployments, keeping the same /exec URL already used by
 * GOOGLE_SHEET_API_URL in src/lib/donationApi.ts.
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
      sheet.getRange(nextRow, 1).setValue(content);
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON,
  );
}
