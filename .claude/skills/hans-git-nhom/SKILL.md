---
name: hans-git-nhom
description: Quy trình làm việc nhóm với Git và GitHub cho repo Website-Hans gồm tạo nhánh theo người/tính năng, commit, đồng bộ main, mở Pull Request, xử lý xung đột khi merge. Dùng khi người dùng muốn lưu thay đổi, đẩy code lên GitHub, tạo PR hoặc gộp code của các thành viên.
---

# Làm việc nhóm với Git/GitHub

Repo: `ChiNG-02/Website-Hans`, nhánh chính `main`. Mỗi thành viên làm trên nhánh riêng rồi
mở Pull Request (ví dụ các nhánh `Lys`, `ha-ly`, `Dong-hanh-cung-hans`, `sua-nut-filter`).

## Quy trình

1. Cập nhật trước khi làm: `git checkout main && git pull`.
2. Tạo nhánh: `git checkout -b <ten-nguoi-hoac-tinh-nang>`.
3. Làm việc, kiểm tra bằng `npm run build` (và `npm run lint`).
4. Xem thay đổi: `git status`, `git diff`. Chỉ `git add` đúng file liên quan, không thêm
   `node_modules/`, `dist/` (đã có trong `.gitignore`).
5. Commit message tiếng Việt, ngắn, nói rõ việc đã làm: `"Thêm ảnh sự kiện Trung Thu Vùng Cao"`.
6. Đẩy nhánh: `git push -u origin <nhanh>` rồi mở Pull Request vào `main` trên GitHub
   (hoặc `gh pr create`).
7. Thành viên khác review, sau đó merge.

## Xử lý xung đột (conflict)

- `git pull origin main` vào nhánh của mình, mở từng file conflict, giữ phần đúng của **cả
  hai** bên (đặc biệt các file data như `activities.ts`, `featuredProjects.ts` mà nhiều người
  cùng sửa).
- Ghi rõ quyết định trong commit merge, ví dụ: *"Merge origin/main: giữ trang Liên hệ mới, giữ
  bản Bếp ăn đã xóa QR thu chi"*.
- Build lại sau khi giải quyết xung đột.

## Quy tắc an toàn

- Không `git push --force` lên `main`.
- Không commit mật khẩu, token hay file `.env`.
- Ảnh lớn nên nén trước khi commit để repo không phình to.
