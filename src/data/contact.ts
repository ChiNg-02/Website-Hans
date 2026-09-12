export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/CLBThienNguyenHoiAmNhanSinh" },
  { label: "TikTok", href: "https://www.tiktok.com/@clbhoiamnhansinh?is_from_webapp=1&sender_device=pc" },
];

export interface RegionContact {
  phone: string;
  name: string;
}

export interface PhoneRegion {
  region: string;
  contacts: RegionContact[];
}

export const PHONE_REGIONS: PhoneRegion[] = [
  {
    region: "Khu vực Long Thành",
    contacts: [
      { phone: "097 9902678", name: "Như" },
      { phone: "03.3636.2525", name: "Thịnh" },
    ],
  },
  {
    region: "Khu vực Biên Hòa",
    contacts: [{ phone: "0939 710728", name: "Chị Phương Vy" }],
  },
  {
    region: "Khu vực Sài Gòn",
    contacts: [{ phone: "0931 674 603", name: "Chị Nhuận Hiếu" }],
  },
];
