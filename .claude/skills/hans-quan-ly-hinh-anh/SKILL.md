---
name: hans-quan-ly-hinh-anh
description: Thêm, sắp xếp và tối ưu hình ảnh cho website HANS (thumbnail hoạt động, ảnh bìa và gallery dự án nổi bật, ảnh tin tức, ảnh bằng khen thành tích). Dùng khi người dùng gửi ảnh mới cần đưa lên web hoặc thay ảnh cũ.
---

# Quản lý hình ảnh

## Nơi đặt ảnh (trong `public/`, tham chiếu bằng đường dẫn bắt đầu bằng `/`)

| Loại | Thư mục | Tham chiếu ở |
|---|---|---|
| Thumbnail hoạt động | `public/activities/<slug>.jpg` | `thumbnailImage` trong `activities.ts` |
| Thumbnail dự án nổi bật | `public/featured/thumbnails/<slug>.jpg` | `featuredProjects.ts` |
| Bìa và gallery dự án | `public/featured/<slug>/` | trang `pages/featured/*.tsx` |
| Ảnh tin tức | `public/news/<slug-bai>/` | `src/data/news.ts` |
| Thành tích, bằng khen | `public/achievements/<n>/` | `src/data/achievements.ts` |
| Ảnh đội ngũ | `public/about/` | trang Giới thiệu |

## Quy tắc

- Tên file và thư mục **mới** dùng chữ thường, không dấu, không khoảng trắng (`khoanh-khac-1.jpg`,
  `1.jpg`, `2.jpg`). Tên có dấu hoặc khoảng trắng dễ lỗi URL khi deploy.
- Định dạng `.jpg` cho ảnh chụp; nên resize cạnh dài khoảng 2048px trở xuống và nén để trang tải
  nhanh.
- Ảnh trong tin tức phải khai báo đúng `width`/`height` gốc và `alt` tiếng Việt.
- Ảnh hiển thị trên web đặt trong `public/`. Ảnh nguồn thô (các thư mục ở gốc repo như
  `Trung thu/`, `thumbnail/`) chỉ để lưu trữ, không tham chiếu trực tiếp từ code.
- Ảnh của người thật, nhất là trẻ em: chỉ dùng ảnh CLB đã cho phép đăng.

## Kiểm tra

- `npm run dev`, mở trang liên quan và xem tab Network: không có ảnh 404.
- Ảnh không bị méo hoặc cắt sai trên desktop và điện thoại.
