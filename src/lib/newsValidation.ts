import type {
  NewsArticle,
  NewsBlock,
  NewsCta,
  NewsImage,
  NewsInlineBlock,
} from "../types/news";

/**
 * Kiểm tra và làm sạch bài viết đến từ nguồn không do lập trình viên viết tay
 * (file JSON do n8n tạo trong src/data/news-posts/). Dữ liệu sai thì bỏ phần đó,
 * hoặc bỏ cả bài nếu thiếu trường bắt buộc - không bao giờ làm hỏng trang.
 */

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);
const isStr = (v: unknown): v is string => typeof v === "string";
const isText = (v: unknown): v is string => isStr(v) && v.trim().length > 0;
const isPositive = (v: unknown): v is number =>
  typeof v === "number" && Number.isFinite(v) && v > 0;
const toTextArray = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter(isText).map((s) => s.trim()) : [];

/** Ảnh: https:// hoặc đường dẫn nội bộ bắt đầu bằng một dấu "/" (vd. /news/...). */
const isSafeImageSrc = (v: unknown): v is string =>
  isStr(v) && /^(https:\/\/|\/(?!\/))/.test(v);
/** Liên kết: http(s):// hoặc đường dẫn nội bộ (vd. /hoat-dong); chặn javascript:, //host... */
const isSafeHref = (v: unknown): v is string =>
  isStr(v) && /^(https?:\/\/|\/(?!\/))/.test(v);

export const NEWS_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function toImage(v: unknown): NewsImage | null {
  if (!isRecord(v)) return null;
  if (!isSafeImageSrc(v.src) || !isStr(v.alt)) return null;
  if (!isPositive(v.width) || !isPositive(v.height)) return null;
  return { src: v.src, alt: v.alt, width: v.width, height: v.height };
}

function toInlineBlock(v: unknown): NewsInlineBlock | null {
  if (!isRecord(v)) return null;
  if (v.kind === "paragraph" && isText(v.text)) {
    return { kind: "paragraph", text: v.text.trim() };
  }
  if (v.kind === "highlight" && isText(v.text)) {
    return { kind: "highlight", text: v.text.trim() };
  }
  if (v.kind === "list") {
    const items = toTextArray(v.items);
    return items.length > 0 ? { kind: "list", items } : null;
  }
  return null;
}

function toBlock(v: unknown): NewsBlock | null {
  const inline = toInlineBlock(v);
  if (inline) return inline;
  if (!isRecord(v)) return null;

  switch (v.kind) {
    case "lead": {
      const paragraphs = toTextArray(v.paragraphs);
      return paragraphs.length > 0 ? { kind: "lead", paragraphs } : null;
    }

    case "heading": {
      if (!isText(v.text)) return null;
      return {
        kind: "heading",
        text: v.text.trim(),
        eyebrow: isText(v.eyebrow) ? v.eyebrow.trim() : undefined,
        style: v.style === "centered-divider" ? "centered-divider" : "default",
      };
    }

    case "image": {
      const image = toImage(v.image);
      if (!image) return null;
      return { kind: "image", image, size: v.size === "compact" ? "compact" : "wide" };
    }

    case "split": {
      const image = toImage(v.image);
      const blocks = Array.isArray(v.blocks)
        ? v.blocks.map(toInlineBlock).filter((b): b is NewsInlineBlock => b !== null)
        : [];
      if (!image || blocks.length === 0) return null;
      return {
        kind: "split",
        image,
        blocks,
        imageSide: v.imageSide === "left" ? "left" : "right",
        imageSize: v.imageSize === "compact" ? "compact" : "default",
      };
    }

    case "gallery": {
      const images = Array.isArray(v.images)
        ? v.images.map(toImage).filter((i): i is NewsImage => i !== null)
        : [];
      if (images.length === 0) return null;
      return {
        kind: "gallery",
        images,
        size: v.size === "compact" ? "compact" : "default",
        layout: v.layout === "uniform" ? "uniform" : "justified",
      };
    }

    default:
      return null;
  }
}

function toCta(v: unknown): NewsCta | null {
  if (!isRecord(v) || !isText(v.label) || !isSafeHref(v.href)) return null;
  return {
    label: v.label.trim(),
    href: v.href,
    variant: v.variant === "secondary" ? "secondary" : "primary",
  };
}

/** Trả về bài viết hợp lệ theo kiểu NewsArticle, hoặc null nếu thiếu trường bắt buộc. */
export function toArticle(v: unknown): NewsArticle | null {
  if (!isRecord(v)) return null;
  if (!isStr(v.slug) || !NEWS_SLUG_PATTERN.test(v.slug)) return null;
  if (!isText(v.title) || !isStr(v.excerpt)) return null;

  const cover = toImage(v.cover);
  if (!cover) return null;

  const blocks = Array.isArray(v.blocks)
    ? v.blocks.map(toBlock).filter((b): b is NewsBlock => b !== null)
    : [];
  if (blocks.length === 0) return null;

  const ctas = Array.isArray(v.ctas)
    ? v.ctas.map(toCta).filter((c): c is NewsCta => c !== null)
    : [];

  return {
    slug: v.slug,
    title: v.title.trim(),
    excerpt: v.excerpt.trim(),
    category: isText(v.category) ? v.category.trim() : undefined,
    publishedAt:
      isStr(v.publishedAt) && /^\d{4}-\d{2}-\d{2}$/.test(v.publishedAt)
        ? v.publishedAt
        : undefined,
    cover,
    blocks,
    ctas: ctas.length > 0 ? ctas : undefined,
  };
}
