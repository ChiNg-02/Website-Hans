---
name: hans-du-an-noi-bat
description: Tạo hoặc hoàn thiện trang chi tiết "Dự án/Hoạt động nổi bật" của HANS (Trung Thu Vùng Cao, Hạt Giống Vùng Cao, Quầy Mì Gói 2K, Bếp Ăn Thiện Nguyện, Tết Yêu Thương...). Dùng khi cần thêm dự án mới, chuyển dự án từ "sắp ra mắt" sang trang riêng, hoặc cập nhật dashboard tổng quan.
---

# Trang Dự án nổi bật

## Cấu trúc hiện có

- Dữ liệu: `src/data/featuredProjects.ts` (mảng `featuredProjects`, kiểu `FeaturedProject`
  trong `src/types/featuredProject.ts`), kèm các object thông tin riêng như `quayMiGoiInfo`
  và hàm `getFeaturedProjectBySlug`.
- Trang riêng: `src/pages/featured/<TenDuAn>.tsx`.
- Dự án chưa có trang riêng (`hasDetail: false`) tự dùng `FeaturedComingSoon.tsx` qua route
  `du-an-noi-bat/:slug`.
- Danh sách dự án hiển thị trong trang Giới thiệu (`/ve-hans/gioi-thieu#du-an-noi-bat`);
  route cũ `/du-an-noi-bat` chỉ chuyển hướng.
- Component dùng lại: `FeaturedDetailHero`, `PhotoGallery` (`PhotoGalleryQuad`...),
  `ProjectTimeline`, `FeaturedDashboard`, `SectionHeading`.

## Quy trình thêm trang riêng cho một dự án

1. Trong `featuredProjects.ts`: đặt `hasDetail: true`, bổ sung `summary`, `tagline`,
   `countLabel`, `regions`, `thumbnailImage`, `coverImage`. Chọn `inDashboard` nếu muốn hiện ở
   "Dashboard tổng quan".
2. Nếu dự án có nhiều lần tổ chức, khai báo mảng `ProjectEdition[]` (`label`, `date`,
   `location`, `giftCount`) để render timeline. Ngày chưa biết thì **để trống**, không bịa.
3. Tạo `src/pages/featured/<TenDuAn>.tsx` theo mẫu các trang hiện có (ví dụ `QuayMiGoi2K.tsx`):
   hero, đoạn giới thiệu, khối thông tin (FACTS), gallery, timeline.
4. Thêm route cụ thể vào `src/App.tsx` **phía trên** route `du-an-noi-bat/:slug` để không bị
   trang "sắp ra mắt" bắt trước.
5. Ảnh đặt trong `public/featured/<slug>/`, xem skill `hans-quan-ly-hinh-anh`.

## Kiểm tra

- `npm run build` không lỗi.
- Mở `/du-an-noi-bat/<slug>`, trang Giới thiệu và trang chủ, kiểm tra thẻ dự án, ảnh, số liệu.
- Xem trên màn hình điện thoại (DevTools ~375px).

## Lưu ý

- Chỉ dùng số liệu và thông tin do CLB cung cấp. Không tự thêm số liệu.
- Không đổi `slug` đã có vì đang được link từ nhiều nơi.
