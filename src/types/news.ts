export interface NewsImage {
  src: string;
  alt: string;
  /** Intrinsic size - used to keep the original aspect ratio so photos are never cropped or stretched. */
  width: number;
  height: number;
}

export interface NewsStat {
  prefix?: string;
  value: string;
  label: string;
}

/** Content blocks that can sit inside a split (beside an image). */
export type NewsInlineBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "highlight"; text: string };

export type NewsBlock =
  | NewsInlineBlock
  /** Opening paragraphs, set larger with a drop cap. */
  | { kind: "lead"; paragraphs: string[] }
  | { kind: "heading"; text: string; eyebrow?: string }
  | { kind: "image"; image: NewsImage; size?: "wide" | "compact" }
  | {
      kind: "split";
      image: NewsImage;
      blocks: NewsInlineBlock[];
      imageSide?: "left" | "right";
      /** "compact" keeps small source images small instead of upscaling them. */
      imageSize?: "default" | "compact";
    }
  | { kind: "gallery"; images: NewsImage[] }
  | { kind: "stats"; eyebrow?: string; heading: string; items: NewsStat[]; backgroundImage?: string };

export interface NewsCta {
  label: string;
  /** Internal route (starts with "/") or external URL. */
  href: string;
  variant: "primary" | "secondary";
}

export interface NewsArticle {
  slug: string;
  title: string;
  /** Short preview text for cards. */
  excerpt: string;
  category?: string;
  /** ISO date (YYYY-MM-DD); omitted when the publish date is not known. */
  publishedAt?: string;
  cover: NewsImage;
  blocks: NewsBlock[];
  ctas?: NewsCta[];
}
