---
name: hans-giao-dien
description: Xây dựng và chỉnh sửa giao diện website HANS đúng design system (Tailwind CSS v4, màu brand xanh pastel, accent đỏ pastel, thang màu ink, font Be Vietnam Pro / Baloo 2) và tái sử dụng component sẵn có. Dùng khi tạo trang/section mới, sửa layout, header/footer hoặc làm responsive.
---

# Giao diện và design system HANS

## Token (khai báo trong `@theme` của `src/index.css`)

- `brand-50…900`: xanh lá pastel, màu chính cho CTA, nút, nhấn mạnh (`brand-500` là `#3fb96d`).
- `accent-50…600`: đỏ pastel lấy cảm hứng từ logo; dùng **tiết chế** cho điểm nhấn.
- `ink-50…900`: thang trung tính ấm cho chữ và nền (chữ thường dùng `text-ink-600/700/800`).
- Font: `font-sans` là Be Vietnam Pro (nội dung), `font-display` là Baloo 2 (tiêu đề).

Luôn dùng class token (`bg-brand-500`, `text-ink-600`), **không** hard-code mã màu trong JSX.
Riêng `coverGradient` trong data là cặp mã hex lấy từ chính các token này.

## Component nên tái sử dụng (`src/components/`)

`SectionHeading` (eyebrow + title + description), `Modal`, `Carousel`, `AnimatedCount`,
`StatusBadge`, `ActivityCard`, `FeaturedProjectCard`, `CoverArt`, `SocialIcons`,
`layout/Header`, `layout/Footer`, `featured/*`, `news/*`, `engagement/*`.

## Mẫu bố cục thường dùng

- Khung nội dung: `mx-auto max-w-5xl px-4 py-12 sm:px-6`.
- Thẻ: `rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-100`.
- Lưới responsive: `grid gap-4 sm:grid-cols-3`, `lg:grid-cols-2`.
- Đoạn văn: `leading-relaxed text-ink-600`, giới hạn `max-w-3xl`.

## Quy trình

1. Tìm component hoặc trang tương tự trước khi viết mới.
2. Mobile-first: thiết kế cho khoảng 375px trước, rồi thêm `sm:`/`lg:`.
3. Ảnh có `alt`; nút và link có chữ rõ nghĩa; độ tương phản chữ đủ đọc.
4. Route mới khai báo trong `src/App.tsx` bên trong `<Layout />`; đường dẫn tiếng Việt không dấu
   (`ve-hans/gioi-thieu`, `hoat-dong`, `tin-tuc`, `lien-he`). Khi đổi URL cũ thì thêm
   `<Navigate replace>` để link cũ vẫn chạy.

## Kiểm tra

- `npm run lint` (oxlint) và `npm run build`.
- Xem trên desktop, tablet, điện thoại; không có thanh cuộn ngang.
