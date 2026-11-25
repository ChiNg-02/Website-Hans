export type ActivityStatus = "upcoming" | "ongoing" | "past";

export interface VolunteerMode {
  type: "volunteer";
  roles?: string[];
  note?: string;
  deadline?: string;
}

export interface DonateMoneyMode {
  type: "donate_money";
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  branch?: string;
  /** Optional guidance shown alongside the transfer info, e.g. what the funds are used for. */
  note?: string;
  /**
   * Optional per-project transfer code (e.g. "TTVC"). When set, the transfer
   * content shown to donors is "Ho Ten khong dau" + " " + this code, instead
   * of the default name + date + amount format. Each project can be given
   * its own code later; omit to keep the default format.
   */
  projectCode?: string;
  /** Only set on DonateMoneyExternalMode - lets TypeScript tell the two money modes apart. */
  externalSupportUrl?: undefined;
}

/**
 * Money support handled entirely by the club outside the website: the
 * "Ủng hộ" CTA opens the official post (e.g. on Facebook) in a new tab. No
 * bank details, QR code or donation form are ever shown for this mode.
 */
export interface DonateMoneyExternalMode {
  type: "donate_money";
  /** Official post with the donation instructions, opened in a new tab. */
  externalSupportUrl: string;
}

export interface DonateGoodsMode {
  type: "donate_goods";
  acceptedItems: string[];
  dropOffLocations: string[];
  supportContacts?: { name: string; phone: string }[];
  guideline?: string;
}

export type EngagementMode =
  | VolunteerMode
  | DonateMoneyMode
  | DonateMoneyExternalMode
  | DonateGoodsMode;

export interface Activity {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string[];
  coverGradient: [string, string];
  thumbnailImage?: string;
  /** Alt text for thumbnailImage - required in practice whenever the image carries information (e.g. a poster). */
  thumbnailAlt?: string;
  /**
   * "cover" (default) fills the cover area and may crop the photo. "contain"
   * shows the whole image - use it for posters whose text must stay readable;
   * the detail page then shows the poster in full below a gradient header.
   */
  thumbnailFit?: "cover" | "contain";
  showDetailSummary?: boolean;
  status: ActivityStatus;
  featured?: boolean;
  /** ISO date (YYYY-MM-DD); omitted when the club hasn't announced it yet - shown as "Đang cập nhật". */
  startDate?: string;
  /** Start time shown next to the date, e.g. "16h00". */
  startTime?: string;
  endDate?: string;
  /**
   * ISO date-time with timezone, e.g. "2026-11-29T10:00:00+07:00". From this
   * moment the activity is automatically dropped from the "sắp/đang diễn ra"
   * lists (home page and /hoat-dong) - even for visitors who already have the
   * page open - without any redeploy. Independent of startDate/startTime,
   * which stay the real event date. Data and images are kept.
   */
  displayUntil?: string;
  location: string;
  /** Planned amount shown in the detail info box, e.g. "200 phần ăn". */
  expectedQuantity?: string;
  tags: string[];
  gallery?: { caption: string; gradient: [string, string] }[];
  stats?: { label: string; value: string }[];
  engagementModes: EngagementMode[];
}
