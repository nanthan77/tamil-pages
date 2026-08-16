import { getCategory } from "./categories";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";
import type { Business } from "./types";

export function listingTitle(biz: Business) {
  const cat = getCategory(biz.category)?.name || "Business";
  return `${biz.name} — ${cat} in ${biz.city}, ${biz.province}`;
}

export function listingDescription(biz: Business) {
  const bit = biz.description.replace(/\s+/g, " ").trim().slice(0, 140);
  const phone = biz.phone ? ` Call ${biz.phone}.` : "";
  return `${biz.name} is a ${getCategory(biz.category)?.name || "Tamil business"} in ${biz.city}, ${biz.province}.${phone} ${bit}`.trim();
}

export function cityTitle(city: string, province?: string) {
  return `Tamil businesses in ${city}${province ? `, ${province}` : ""} — ${SITE_NAME}`;
}

export function categoryTitle(categoryName: string, city?: string) {
  return city
    ? `${categoryName} in ${city} | Tamil directory`
    : `${categoryName} in Canada | Tamil directory`;
}

export function localBusinessJsonLd(
  biz: Business,
  reviews: { count: number; average: number },
) {
  const cat = getCategory(biz.category)?.name;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: biz.name,
    description: biz.description,
    url: absoluteUrl(`/directory/${biz.slug}`),
    telephone: biz.phone || undefined,
    email: biz.email || undefined,
    image: `${SITE_URL}/og.png`,
    address: biz.address
      ? {
          "@type": "PostalAddress",
          streetAddress: biz.address,
          addressLocality: biz.city,
          addressRegion: biz.province,
          addressCountry: "CA",
        }
      : {
          "@type": "PostalAddress",
          addressLocality: biz.city,
          addressRegion: biz.province,
          addressCountry: "CA",
        },
    areaServed: [biz.city, "Canada"],
    openingHours: biz.hours || undefined,
    sameAs: biz.website ? [biz.website] : undefined,
    priceRange: "$$",
    additionalType: cat,
    ...(reviews.count
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviews.average,
            reviewCount: reviews.count,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd(name: string, path: string, businesses: Business[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    numberOfItems: businesses.length,
    itemListElement: businesses.slice(0, 50).map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/directory/${b.slug}`),
      name: b.name,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/directory?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og.png`,
    areaServed: "CA",
    description: "Tamil business and services directory for Canada.",
  };
}
