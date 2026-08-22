export type Business = {
  id: string;
  slug: string;
  name: string;
  tamilName?: string;
  category: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  linkedin?: string;
  twitter?: string;
  description: string;
  verified: boolean;
  featured: boolean;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  keywords?: string[];
  source: "public-web" | "community" | "curated";
  ownerId?: string;
  createdAt?: string;
  hours?: string;
  claimed?: boolean;
  plan?: "basic" | "featured" | "spotlight";
};

export type Review = {
  id: string;
  slug: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type LeadKind =
  | "featured"
  | "spotlight"
  | "advertise"
  | "claim"
  | "boost"
  | "deal"
  | "job"
  | "event"
  | "wedding"
  | "quote"
  | "newsletter"
  | "exclusive"
  | "homepage";

export type Lead = {
  id: string;
  kind: LeadKind;
  name: string;
  email: string;
  phone: string;
  business?: string;
  slug?: string;
  message: string;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  passwordSalt: string;
  createdAt: string;
};

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
};
