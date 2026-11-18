---
name: hans-viet-noi-dung
description: Viết, biên tập lời giới thiệu và mô tả dự án/hoạt động bằng tiếng Việt theo giọng văn ấm áp, chân thành của CLB thiện nguyện Hơi Ấm Nhân Sinh (HANS). Dùng khi viết lời giới thiệu dự án, mô tả hoạt động, summary thẻ, tagline, hoặc sửa nội dung trên website.
---

# Viết nội dung tiếng Việt cho HANS

## Giọng văn

- Ấm áp, chân thành, gần gũi; xưng "HANS" hoặc "CLB"; gọi người nhận là "các em", "cô chú",
  "những người đang gặp khó khăn".
- Tôn trọng người nhận hỗ trợ: không dùng từ ngữ thương hại, không phô trương.
- Câu rõ ràng, đoạn ngắn (3–5 câu). Tránh sáo rỗng và lặp từ.
- Ví dụ đúng tinh thần: *"Tuổi thơ cho em, hạnh phúc cho ta"*, *"san sẻ phần nào nỗi lo cơm
  áo"*, *"một bữa ăn ngon và tươm tất"*.

## Cấu trúc gợi ý cho lời giới thiệu dự án

1. Dự án là gì, dành cho ai.
2. Cách HANS thực hiện (chuẩn bị, tổ chức, ai tham gia).
3. Ý nghĩa, mong muốn.
4. (Tùy chọn) Số liệu thật: số lần tổ chức, số phần quà, địa điểm.

## Quy tắc

- **Không bịa số liệu, ngày tháng, địa danh.** Thiếu thông tin thì hỏi lại hoặc để trống.
- Giữ đúng tên riêng: "Hơi Ấm Nhân Sinh", "Trung Thu Vùng Cao", "Hạt Giống Vùng Cao",
  "Quầy Mì Gói 2K", "Bếp Ăn Thiện Nguyện", "Tết Yêu Thương"; tên địa phương theo thông tin
  CLB cung cấp.
- Chính tả: dấu đặt đúng, thống nhất cách viết (ví dụ "Hoà"/"Hòa") trong cùng một trang, viết
  hoa tên riêng.
- `summary` cho thẻ: 1–2 câu, khoảng 150–250 ký tự. `tagline`: một câu ngắn, giàu cảm xúc.
- Khi người dùng đưa sẵn văn bản: giữ ý và câu chữ, chỉ sửa lỗi và làm mượt, rồi báo lại những
  chỗ đã đổi.

## Nơi đặt nội dung

- Mô tả hoạt động: `description` / `summary` trong `src/data/activities.ts`.
- Dự án nổi bật: `summary`, `tagline` trong `src/data/featuredProjects.ts` và đoạn văn trong
  `src/pages/featured/*.tsx`.
- Giới thiệu CLB: `src/pages/about/Introduction.tsx`.
