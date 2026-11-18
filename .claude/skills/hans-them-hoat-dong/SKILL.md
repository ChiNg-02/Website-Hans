---
name: hans-them-hoat-dong
description: Thêm hoặc chỉnh sửa một hoạt động của CLB HANS (trang /hoat-dong). Dùng khi người dùng muốn tạo hoạt động mới, đổi trạng thái sắp/đang/đã diễn ra, hoặc bật các hình thức đồng hành như tuyển tình nguyện viên, ủng hộ tiền, ủng hộ hiện vật.
---

# Thêm / sửa hoạt động HANS

Website dùng mô hình **data-driven**: mọi hoạt động nằm trong mảng `activities` ở
`src/data/activities.ts`. Trang danh sách, trang chi tiết, trang chủ và nút CTA đều tự render từ
dữ liệu này, nên **không sửa component** khi chỉ thêm hoạt động.

## Quy trình

1. Đọc `src/types/activity.ts` để nắm đủ các field của `Activity` và `EngagementMode`.
2. Hỏi người dùng (nếu chưa có): tên hoạt động, thời gian, địa điểm, mô tả, trạng thái, các hình
   thức đồng hành, ảnh thumbnail.
3. Thêm một object vào mảng `activities`:
   - `id` và `slug`: kebab-case, không dấu, ví dụ `tet-yeu-thuong-2027`. Slug là URL
     `/hoat-dong/<slug>` nên **không đổi slug** của hoạt động đã đăng.
   - `status`: `"upcoming" | "ongoing" | "past"`.
   - `startDate` / `endDate`: định dạng ISO `YYYY-MM-DD`.
   - `description`: mảng các đoạn văn (mỗi phần tử là một đoạn).
   - `coverGradient`: hai mã màu trong bảng màu brand/accent (xem skill `hans-giao-dien`).
   - `thumbnailImage`: đường dẫn bắt đầu bằng `/`, file đặt trong `public/activities/`.
   - `featured: true` nếu muốn hiện ở bộ lọc "nổi bật".
4. Chỉ khai báo những `engagementModes` mà hoạt động **thật sự** hỗ trợ:
   - `volunteer`: `roles`, `note`, `deadline`.
   - `donate_money`: `bankName`, `accountNumber`, `accountHolder`, `branch`, `projectCode`
     (mã dự án ngắn như `TTVC`, dùng làm nội dung chuyển khoản, xem skill
     `hans-ung-ho-chuyen-khoan`).
   - `donate_goods`: `acceptedItems`, `dropOffLocations`, `supportContacts`, `guideline`.
   - Không khai báo mode nào thì trang sẽ không hiện nút CTA nào. Đây là hành vi đúng.
5. Nếu có số liệu kết quả (sau khi hoạt động kết thúc), thêm `stats: [{ label, value }]`.

## Kiểm tra

- `npm run build`: TypeScript phải không báo lỗi.
- `npm run dev` → mở `/hoat-dong` và `/hoat-dong/<slug>`, kiểm tra thẻ, ảnh, nút CTA, modal.
- Nếu có `donate_money`, kiểm tra `/hoat-dong/<slug>/ung-ho` hiện mã QR (ngân hàng phải có trong
  `BANK_BIN` của `src/lib/vietqr.ts`).

## Lưu ý

- Không thêm logic riêng cho từng hoạt động vào component; nếu cần field mới, thêm vào type rồi
  xử lý chung.
- Nội dung tiếng Việt viết theo skill `hans-viet-noi-dung`.
