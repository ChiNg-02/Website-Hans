---
name: hans-viet-tin-tuc
description: Viết hoặc cập nhật một bài Tin tức trên website HANS (trang /tin-tuc) bằng hệ thống khối nội dung (lead, heading, image, split, gallery, stats, highlight). Dùng khi người dùng gửi bài viết, recap sự kiện hoặc ảnh và muốn đăng thành tin tức.
---

# Viết bài Tin tức

Bài viết là dữ liệu trong `src/data/news.ts`, kiểu `NewsArticle` ở `src/types/news.ts`.
`NewsArticleBody` tự render từng khối, nên **không viết JSX riêng cho từng bài**.

## Các loại khối (`NewsBlock`)

| kind | Dùng cho |
|---|---|
| `lead` | Các đoạn mở đầu (chữ lớn, có drop cap) |
| `heading` | Tiêu đề mục, có thể kèm `eyebrow` |
| `paragraph`, `list`, `highlight` | Đoạn văn, danh sách, câu trích nổi bật |
| `image` | Ảnh đơn, `size: "wide"` hoặc `"compact"` |
| `split` | Ảnh bên cạnh nội dung, `imageSide`, `imageSize: "compact"` cho ảnh nhỏ |
| `gallery` | Nhiều ảnh |
| `stats` | Khối số liệu (`heading`, `items: { prefix?, value, label }`) |

## Quy trình

1. Đặt ảnh vào `public/news/<slug-bai-viet>/` với tên file không dấu, ví dụ `hero.jpg`,
   `khoanh-khac-1.jpg`.
2. Khai báo hằng thư mục (ví dụ `const TTVC_2026_DIR = "/news/..."`) và object ảnh có
   `satisfies Record<string, NewsImage>`.
3. Mỗi ảnh **bắt buộc** có `alt` mô tả bằng tiếng Việt, cùng `width`/`height` đúng kích thước
   gốc, để giữ tỉ lệ ảnh, không bị cắt hay kéo giãn.
4. Thêm object `NewsArticle` vào mảng `newsArticles`: `slug`, `title`, `excerpt`, `category`,
   `publishedAt` (`YYYY-MM-DD`, bỏ trống nếu không rõ), `cover`, `blocks`, `ctas`.
5. `ctas` có thể trỏ tới hoạt động (`/hoat-dong/<slug>`) hoặc trang ủng hộ.

## Kiểm tra

- `npm run build` không lỗi.
- Mở `/tin-tuc` và `/tin-tuc/<slug>`; kiểm tra ảnh không bị méo, bố cục `split` trên điện thoại.
- Tìm kiếm tại `/tim-kiem` ra được bài mới.

## Lưu ý

- Giữ nguyên câu chữ người dùng cung cấp; chỉ sửa chính tả và chia khối hợp lý.
- Văn phong theo skill `hans-viet-noi-dung`.
