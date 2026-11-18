---
name: hans-ung-ho-chuyen-khoan
description: Làm việc với luồng ủng hộ tiền của HANS gồm tạo mã QR VietQR, sinh nội dung chuyển khoản, nút "Tôi đã chuyển khoản" và ghi bản ghi vào Google Sheet qua Google Apps Script. Dùng khi sửa trang /hoat-dong/:slug/ung-ho, thêm ngân hàng, đổi định dạng nội dung chuyển khoản hoặc cập nhật script Google Sheet.
---

# Luồng ủng hộ tiền (chuyển khoản + VietQR + Google Sheet)

## Thành phần

| File | Vai trò |
|---|---|
| `src/pages/activities/DonateMoney.tsx` | Trang form ủng hộ: tên, email, số tiền, lời chúc, ẩn danh |
| `src/lib/vietqr.ts` | `buildVietQrUrl()` tạo URL ảnh QR từ `api.vietqr.io`; bảng `BANK_BIN` |
| `src/lib/transferContent.ts` | `buildTransferContent()` sinh nội dung chuyển khoản |
| `src/lib/text.ts` | `removeDiacritics()` bỏ dấu tiếng Việt |
| `src/lib/donationApi.ts` | `submitDonationRecord()` POST JSON tới Web App Apps Script |
| `google-apps-script/donation-webapp.gs` | `doPost()` ghi dòng vào Google Sheet, chống trùng |

## Quy tắc nội dung chuyển khoản

- Có `projectCode` (ví dụ `TTVC`): `"<HoTenKhongDau> <CODE>"`, ví dụ `NguyenVanA TTVC`.
- Không có: `<HoTenKhongDau><DDMMYYYY><SoTien>`, ví dụ `NguyenVanA22092026100000`.
- Chuỗi này cũng là khóa chống trùng ở cột A trong Sheet, nên đổi định dạng thì phải cân nhắc
  dữ liệu cũ.

## Quy tắc ghi Google Sheet

- Chỉ ghi **một lần**, khi người ủng hộ bấm xác nhận đã chuyển khoản.
- Request dùng `mode: "no-cors"` + `Content-Type: text/plain`, nên phản hồi là opaque. Không
  dựa vào response để báo thành công thật sự.
- Sheet ghi từ dòng 3, các cột: A nội dung chuyển khoản, B thời gian (GMT+7,
  `dd/MM/yyyy HH:mm:ss`), C tên, D email, E số tiền, F lời chúc.
- Sửa `donation-webapp.gs` xong phải dán vào Apps Script editor và **Deploy → Manage
  deployments → sửa bản deploy hiện có** để giữ nguyên URL `/exec`; quyền truy cập "Anyone".

## Thêm ngân hàng mới

Thêm `"<tên viết thường>": "<BIN>"` vào `BANK_BIN` trong `vietqr.ts`. Tên phải khớp
`bankName` (không phân biệt hoa thường) trong `donate_money` của hoạt động.

## Kiểm tra

- Nhập tên có dấu, ví dụ "Nguyễn Văn A", thì nội dung phải ra `NguyenVanA ...`.
- Ảnh QR hiển thị đúng số tiền và nội dung; quét thử bằng app ngân hàng (không cần chuyển).
- Bấm xác nhận hai lần thì Sheet chỉ có một dòng.

## Lưu ý bảo mật

- Không commit thông tin đăng nhập Google hay khóa bí mật. URL Web App là public endpoint.
- Thông tin tài khoản nhận tiền chỉ lấy từ CLB, không tự điền.
