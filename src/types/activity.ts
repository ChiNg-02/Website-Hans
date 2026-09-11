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
  transferNote: string;
  qrImage?: string;
}

export interface DonateGoodsMode {
  type: "donate_goods";
  acceptedItems: string[];
  dropOffLocations: string[];
  contactPerson?: string;
  contactPhone?: string;
  guideline?: string;
}

export type EngagementMode = VolunteerMode | DonateMoneyMode | DonateGoodsMode;

export interface Activity {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string[];
  coverGradient: [string, string];
  status: ActivityStatus;
  featured?: boolean;
  startDate: string;
  endDate?: string;
  location: string;
  tags: string[];
  gallery?: { caption: string; gradient: [string, string] }[];
  stats?: { label: string; value: string }[];
  engagementModes: EngagementMode[];
}
