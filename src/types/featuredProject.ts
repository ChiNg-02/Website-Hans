export interface ProjectEdition {
  /** e.g. "Lần 1" */
  label: string;
  /** Display date string, e.g. "07/09/2019" — left empty when not yet provided. */
  date?: string;
  location: string;
  giftCount?: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  /** Slogan or guiding message for the project, shown as a callout quote. */
  tagline?: string;
  /** Headline figure shown on the dashboard/listing, e.g. "7 lần tổ chức". */
  countLabel: string;
  /** Regions the project runs in, when relevant (e.g. Bếp ăn thiện nguyện, Tết yêu thương). */
  regions?: string[];
  /** Named sub-programs, when the project is really an umbrella of a few named campaigns. */
  subPrograms?: string[];
  /** Short, factual card summary — only used for projects that already have a full detail page. */
  summary?: string;
  /** True once a bespoke detail page exists for this project; otherwise it renders the coming-soon template. */
  hasDetail: boolean;
  /** Shown in the "Dashboard tổng quan" highlight grid. */
  inDashboard: boolean;
  coverGradient: [string, string];
}
