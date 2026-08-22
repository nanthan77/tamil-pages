export const SITE_NAME = "tamilcanadianpages.ca";
export const SITE_TAGLINE = "Canada’s Tamil Business Directory";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://tamilcanadianpages.ca").replace(/\/$/, "");

/** Only a basic listing is free for the first year. Ads and Featured are paid. */
export const FREE_LISTING_UNTIL = new Date("2027-08-16T23:59:59-04:00");

export function isListingFreeYear(now = new Date()) {
  return now.getTime() < FREE_LISTING_UNTIL.getTime();
}

export function listingFreeUntilLabel() {
  return FREE_LISTING_UNTIL.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export type PlanId = "basic" | "featured" | "spotlight";

export type Plan = {
  id: PlanId;
  name: string;
  blurb: string;
  priceAfterMonthly: number;
  popular?: boolean;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic listing",
    blurb: "Your shop on Google-friendly pages. Always the starting point.",
    priceAfterMonthly: 0,
    features: [
      "Name, phone, address, website",
      "City + category search",
      "Call & WhatsApp buttons",
      "Indexed in the sitemap",
      "Customer reviews",
    ],
  },
  {
    id: "featured",
    name: "Featured",
    blurb: "How Yellow Pages makes money: you pay to sit above the free list.",
    priceAfterMonthly: 29,
    popular: true,
    features: [
      "Everything in Basic",
      "Featured badge on cards",
      "Higher rank in your city",
      "Homepage rotation",
      "“Claimed” owner dashboard",
    ],
  },
  {
    id: "spotlight",
    name: "Spotlight",
    blurb: "Category-top ads, the same model as YP, Yelp Ads, and Google Local Services.",
    priceAfterMonthly: 79,
    features: [
      "Everything in Featured",
      "Top of category + city pages",
      "Ad strip on search results",
      "Lead form on your profile",
      "Priority support",
    ],
  },
];

export function displayPrice(plan: Plan) {
  if (plan.id === "basic") {
    return {
      now: "Free",
      after: isListingFreeYear()
        ? `Listing only — free until ${listingFreeUntilLabel()}`
        : "Basic listing stays free",
    };
  }
  return { now: `$${plan.priceAfterMonthly}/mo`, after: "Paid placement · billed monthly" };
}

export const AD_RATES = [
  { name: "Search results strip", price: "$149/mo", note: "Top of directory search" },
  { name: "City page sponsor", price: "$199/mo", note: "Scarborough, Markham, etc." },
  { name: "Category spotlight", price: "$249/mo", note: "e.g. restaurants in the GTA" },
  { name: "Homepage takeover", price: "$499/mo", note: "First thing every visitor sees" },
  { name: "City + category exclusive", price: "$399/mo", note: "Only one restaurant in Scarborough" },
];

export type MoneyProduct = {
  id: string;
  name: string;
  price: string;
  why: string;
  href: string;
  kind: import("./types").LeadKind;
};

/** Extra products Yellow Pages / Yelp / Tamil media actually sell. */
export const MONEY_PRODUCTS: MoneyProduct[] = [
  {
    id: "boost",
    name: "7-day Boost",
    price: "$49",
    why: "Impulse buy when a shop is slow this week. Pins them to the top for 7 days.",
    href: "/boost",
    kind: "boost",
  },
  {
    id: "deal",
    name: "Weekly deal / coupon",
    price: "$39",
    why: "Restaurants and grocers pay to push “20% off this weekend” to shoppers.",
    href: "/deals",
    kind: "deal",
  },
  {
    id: "job",
    name: "Job post",
    price: "$49 / 30 days",
    why: "Tamil shops hire cooks, drivers, clerks. Job boards print money.",
    href: "/jobs",
    kind: "job",
  },
  {
    id: "event",
    name: "Event promo",
    price: "$79",
    why: "Concerts, temple festivals, dance shows — promoters already buy Facebook ads.",
    href: "/events",
    kind: "event",
  },
  {
    id: "wedding",
    name: "Wedding vendor pack",
    price: "$99/mo",
    why: "Tamil weddings spend big: halls, catering, jewellery, photography, makeup.",
    href: "/weddings",
    kind: "wedding",
  },
  {
    id: "quote",
    name: "Quote leads",
    price: "$15–$35 / lead",
    why: "Lawyers, immigration, real estate, insurance, tuition pay per enquiry — not per month.",
    href: "/pricing#quote-leads",
    kind: "quote",
  },
  {
    id: "newsletter",
    name: "Email / WhatsApp blast",
    price: "$199 / send",
    why: "One sponsored message to families who opted in. High intent, easy to sell.",
    href: "/advertise#newsletter",
    kind: "newsletter",
  },
  {
    id: "exclusive",
    name: "Category exclusive",
    price: "$399/mo",
    why: "Only one Spotlight dentist in Markham. Scarcity = higher price.",
    href: "/advertise#exclusive",
    kind: "exclusive",
  },
];

export const QUOTE_CATEGORIES = new Set([
  "legal-immigration",
  "real-estate-property",
  "accounting-financial",
  "insurance",
  "tuition-education",
  "medical-dental",
  "construction-trades",
]);

export const ANNUAL_DISCOUNT = "Pay 10 months, get 12 — cash up front.";

export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}
