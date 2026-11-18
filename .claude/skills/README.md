# Bộ AI Skills dùng khi xây dựng Website HANS

Thư mục này tập hợp các **AI skill** (hướng dẫn cho trợ lý AI – Claude Code) mà nhóm đã dùng
trong quá trình làm website CLB thiện nguyện **Hơi Ấm Nhân Sinh (HANS)**.

Mỗi skill là một thư mục chứa file `SKILL.md` theo định dạng chuẩn của Claude Code:
phần đầu (frontmatter) có `name` và `description` để AI biết khi nào dùng skill, phần thân là
quy trình từng bước, quy ước của dự án và checklist kiểm tra.

> Các file trong `.claude/skills/` **không** nằm trong `src/` hay `public/`, nên không được
> Vite build và không làm thay đổi giao diện hay nội dung của website.

## Danh sách skill

| Skill | Dùng khi | File chính liên quan |
|---|---|---|
| [hans-them-hoat-dong](hans-them-hoat-dong/SKILL.md) | Thêm / sửa một hoạt động (tình nguyện, ủng hộ tiền, ủng hộ hiện vật) | `src/data/activities.ts`, `src/types/activity.ts` |
| [hans-du-an-noi-bat](hans-du-an-noi-bat/SKILL.md) | Thêm / hoàn thiện trang Dự án nổi bật | `src/data/featuredProjects.ts`, `src/pages/featured/*`, `src/App.tsx` |
| [hans-viet-tin-tuc](hans-viet-tin-tuc/SKILL.md) | Viết bài Tin tức bằng các khối nội dung | `src/data/news.ts`, `src/types/news.ts` |
| [hans-ung-ho-chuyen-khoan](hans-ung-ho-chuyen-khoan/SKILL.md) | Luồng ủng hộ tiền: VietQR, nội dung chuyển khoản, ghi Google Sheet | `src/lib/vietqr.ts`, `src/lib/transferContent.ts`, `src/lib/donationApi.ts`, `google-apps-script/` |
| [hans-viet-noi-dung](hans-viet-noi-dung/SKILL.md) | Viết lời giới thiệu, mô tả dự án bằng tiếng Việt đúng giọng văn HANS | Các trang `pages/` và file `data/` |
| [hans-quan-ly-hinh-anh](hans-quan-ly-hinh-anh/SKILL.md) | Thêm ảnh, thumbnail, gallery | `public/` |
| [hans-giao-dien](hans-giao-dien/SKILL.md) | Làm giao diện đúng design system (màu, font, component) | `src/index.css`, `src/components/` |
| [hans-git-nhom](hans-git-nhom/SKILL.md) | Làm việc nhóm với Git/GitHub: nhánh, commit, Pull Request | — |

## Cách sử dụng

1. Mở dự án bằng Claude Code (CLI hoặc extension VS Code). Claude Code tự nạp các skill trong
   `.claude/skills/`.
2. Gõ yêu cầu bình thường, ví dụ *"Thêm hoạt động Tết Yêu Thương 2027, nhận tình nguyện viên
   và ủng hộ tiền"*. AI đọc `description` của các skill và chọn skill phù hợp.
3. Hoặc gọi trực tiếp bằng lệnh `/hans-them-hoat-dong`, `/hans-viet-tin-tuc`, ...

## Công nghệ của website

React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router 7; Google Apps Script để ghi dữ
liệu ủng hộ vào Google Sheet; VietQR API để tạo mã QR chuyển khoản.
