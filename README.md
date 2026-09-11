# Hơi Ấm Nhân Sinh (HANS) — Website

Website cho CLB thiện nguyện Hơi Ấm Nhân Sinh. React + TypeScript + Vite + Tailwind CSS v4 +
React Router.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build production vào dist/
```

## Cấu trúc chính

- `src/types/activity.ts` — định nghĩa `Activity` và các `EngagementMode` (`volunteer`,
  `donate_money`, `donate_goods`).
- `src/data/activities.ts` — dữ liệu hoạt động. **Thêm hoạt động mới chỉ cần thêm một object
  vào mảng này** và khai báo `engagementModes` mà nó hỗ trợ — không cần sửa logic hiển thị.
- `src/components/engagement/EngagementCTA.tsx` — đọc `activity.engagementModes` và tự động
  render đúng các nút CTA (Đồng Hành / Ủng Hộ) cùng modal tương ứng (form tình nguyện viên,
  thông tin chuyển khoản, hoặc hướng dẫn ủng hộ hiện vật). Hoạt động không khai báo mode nào sẽ
  không hiển thị CTA nào.
- `src/pages/activities/ActivityListing.tsx` — hệ thống danh sách hoạt động **duy nhất**, được
  cả mục "Đồng hành cùng HANS" trên Header và mục "Dự án/Hoạt động nổi bật" trỏ tới (qua query
  param `?filter=featured`), cũng như section "Hoạt động sắp/đang diễn ra" trên trang chủ.
- `src/pages/activities/ActivityDetail.tsx` — trang chi tiết hoạt động, nơi `EngagementCTA`
  được render.

## Thêm một hoạt động mới

Thêm vào mảng `activities` trong `src/data/activities.ts`, chỉ khai báo những `engagementModes`
mà hoạt động đó thực sự hỗ trợ. Ví dụ hoạt động chỉ nhận tình nguyện viên:

```ts
{
  // ...các field khác
  engagementModes: [
    { type: "volunteer", roles: ["Hậu cần"] },
  ],
}
```

Trang chi tiết và các thẻ hoạt động sẽ tự động hiển thị đúng CTA tương ứng.
