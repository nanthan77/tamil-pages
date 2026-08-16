export type City = {
  slug: string;
  name: string;
  province: string;
  region: string;
  blurb: string;
};

export const CITIES: City[] = [
  // --- ONTARIO - GREATER TORONTO AREA (GTA) ---
  {
    slug: "scarborough",
    name: "Scarborough",
    province: "ON",
    region: "Greater Toronto Area",
    blurb: "The vibrant heart of Canada’s Tamil diaspora — Markham Rd, Kennedy, Sheppard & Ellesmere corridors.",
  },
  {
    slug: "toronto",
    name: "Toronto",
    province: "ON",
    region: "Greater Toronto Area",
    blurb: "Downtown, North York, East York, and Etobicoke Tamil professionals, clinics, law firms, and dining.",
  },
  {
    slug: "markham",
    name: "Markham",
    province: "ON",
    region: "Greater Toronto Area",
    blurb: "Major commercial hub — supermarkets, traditional temples, tech companies, and family dining.",
  },
  {
    slug: "brampton",
    name: "Brampton",
    province: "ON",
    region: "Greater Toronto Area",
    blurb: "West GTA hub for Tamil bakeries, groceries, bridal studios, trades, and family services.",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "ON",
    region: "Greater Toronto Area",
    blurb: "Peel Region Tamil restaurants, accountants, tutors, mechanics, and corporate services.",
  },
  {
    slug: "ajax",
    name: "Ajax",
    province: "ON",
    region: "Durham Region",
    blurb: "Thriving East GTA Tamil families, weekend catering, takeout, and tuition academies.",
  },
  {
    slug: "pickering",
    name: "Pickering",
    province: "ON",
    region: "Durham Region",
    blurb: "Durham Region Tamil neighbourhood shops, tutoring, and family healthcare.",
  },
  {
    slug: "whitby",
    name: "Whitby",
    province: "ON",
    region: "Durham Region",
    blurb: "Durham corridor Tamil families, local trades, healthcare clinics, and takeout.",
  },
  {
    slug: "oshawa",
    name: "Oshawa",
    province: "ON",
    region: "Durham Region",
    blurb: "East corridor Tamil households, university students, and community services.",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    province: "ON",
    region: "York Region",
    blurb: "Home to the renowned Hindu Temple Society, language academies, and medical practices.",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    province: "ON",
    region: "York Region",
    blurb: "York Region professionals, event venues, trades, and commercial services.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    province: "ON",
    region: "Halton Region",
    blurb: "Halton Region Tamil families, professionals, finance, and dining.",
  },
  {
    slug: "milton",
    name: "Milton",
    province: "ON",
    region: "Halton Region",
    blurb: "Fast-growing Tamil community, residential trades, catering, and education.",
  },
  {
    slug: "burlington",
    name: "Burlington",
    province: "ON",
    region: "Halton Region",
    blurb: "Halton and Hamilton border Tamil professional services and restaurants.",
  },

  // --- ONTARIO - WIDER PROVINCE ---
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "ON",
    region: "Eastern Ontario",
    blurb: "Capital-region Ottawa Tamil Association, Sri Lankan dining, and public sector professionals.",
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    province: "ON",
    region: "Southwestern Ontario",
    blurb: "Hamilton & Ancaster Tamil Cultural Association, McMaster students, and clinics.",
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    province: "ON",
    region: "Waterloo Region",
    blurb: "Tech corridor Tamil engineers, students, Ceylon kitchens, and groceries.",
  },
  {
    slug: "kitchener",
    name: "Kitchener",
    province: "ON",
    region: "Waterloo Region",
    blurb: "Tri-cities Tamil families, groceries, healthcare, and dining spots.",
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    province: "ON",
    region: "Waterloo Region",
    blurb: "Waterloo Region Tamil households, local trades, and family dining.",
  },
  {
    slug: "london",
    name: "London",
    province: "ON",
    region: "Southwestern Ontario",
    blurb: "London Tamil Association, Western University scholars, and healthcare clinics.",
  },
  {
    slug: "guelph",
    name: "Guelph",
    province: "ON",
    region: "Southwestern Ontario",
    blurb: "Royal City Tamil students, researchers, and professional services.",
  },
  {
    slug: "windsor",
    name: "Windsor",
    province: "ON",
    region: "Southwestern Ontario",
    blurb: "Border-city Tamil professionals, auto engineers, and community networks.",
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    province: "ON",
    region: "York Region",
    blurb: "Upper York Region Tamil households and services.",
  },
  {
    slug: "caledon",
    name: "Caledon",
    province: "ON",
    region: "Peel Region",
    blurb: "North Peel Region residential and commercial services.",
  },

  // --- QUEBEC ---
  {
    slug: "montreal",
    name: "Montreal",
    province: "QC",
    region: "Quebec",
    blurb: "Côte-des-Neiges, Parc-Ex & Victoria Ave Tamil bakeries, Sri Durkai Amman Temple & community.",
  },
  {
    slug: "laval",
    name: "Laval",
    province: "QC",
    region: "Quebec",
    blurb: "North Shore Montreal Tamil families, groceries, and local professionals.",
  },
  {
    slug: "brossard",
    name: "Brossard",
    province: "QC",
    region: "Quebec",
    blurb: "South Shore Montreal Tamil community, dining, and retail services.",
  },
  {
    slug: "gatineau",
    name: "Gatineau",
    province: "QC",
    region: "Quebec",
    blurb: "Outaouais & NCR Tamil professionals and government community.",
  },

  // --- BRITISH COLUMBIA ---
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "BC",
    region: "Metro Vancouver",
    blurb: "Fraser Street Tamil grocers, Sri Lankan restaurants, and West Coast professionals.",
  },
  {
    slug: "surrey",
    name: "Surrey",
    province: "BC",
    region: "Metro Vancouver",
    blurb: "BC Murugan Temple, Fraser Valley Tamil businesses, caterers, and tutors.",
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    province: "BC",
    region: "Metro Vancouver",
    blurb: "Kingsway & Metrotown corridor Tamil services, clinics, and dining.",
  },
  {
    slug: "richmond",
    name: "Richmond",
    province: "BC",
    region: "Metro Vancouver",
    blurb: "Richmond Tamil & South Asian food, logistics, and professional trade.",
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    province: "BC",
    region: "Metro Vancouver",
    blurb: "Tri-Cities Tamil families, groceries, and community services.",
  },
  {
    slug: "abbotsford",
    name: "Abbotsford",
    province: "BC",
    region: "Fraser Valley",
    blurb: "Fraser Valley agriculture, grocers, and community dining.",
  },
  {
    slug: "delta",
    name: "Delta",
    province: "BC",
    region: "Metro Vancouver",
    blurb: "North Delta Tamil and South Asian family businesses.",
  },
  {
    slug: "langley",
    name: "Langley",
    province: "BC",
    region: "Metro Vancouver",
    blurb: "Growing Fraser Valley Tamil households and local services.",
  },
  {
    slug: "victoria",
    name: "Victoria",
    province: "BC",
    region: "Vancouver Island",
    blurb: "Vancouver Island Tamil Cultural Society, UVic students, and clinics.",
  },

  // --- ALBERTA ---
  {
    slug: "calgary",
    name: "Calgary",
    province: "AB",
    region: "Alberta",
    blurb: "Sri Murugan Society of Alberta, Calgary Tamil cultural events, restaurants, and tutors.",
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "AB",
    region: "Alberta",
    blurb: "Maha Ganapathy Temple, Capital Region Tamil community, groceries, and dining.",
  },

  // --- MANITOBA ---
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "MB",
    region: "Manitoba",
    blurb: "Manitoba Tamil Cultural Association, Sri Lankan kitchens, and clinics.",
  },

  // --- SASKATCHEWAN ---
  {
    slug: "saskatoon",
    name: "Saskatoon",
    province: "SK",
    region: "Saskatchewan",
    blurb: "Saskatoon Tamil Community Association and USask scholars.",
  },
  {
    slug: "regina",
    name: "Regina",
    province: "SK",
    region: "Saskatchewan",
    blurb: "Queen City Tamil families, dining, and professional services.",
  },

  // --- ATLANTIC CANADA ---
  {
    slug: "halifax",
    name: "Halifax",
    province: "NS",
    region: "Atlantic Canada",
    blurb: "Tamil Cultural Society of Nova Scotia, university network, and maritime businesses.",
  },
  {
    slug: "st-johns",
    name: "St. John's",
    province: "NL",
    region: "Atlantic Canada",
    blurb: "Newfoundland Tamil Association, Memorial University scholars, and healthcare clinics.",
  },
];

export const PROVINCES = [
  { code: "ON", name: "Ontario" },
  { code: "QC", name: "Quebec" },
  { code: "BC", name: "British Columbia" },
  { code: "AB", name: "Alberta" },
  { code: "MB", name: "Manitoba" },
  { code: "SK", name: "Saskatchewan" },
  { code: "NS", name: "Nova Scotia" },
  { code: "NB", name: "New Brunswick" },
  { code: "NL", name: "Newfoundland & Labrador" },
  { code: "PE", name: "Prince Edward Island" },
];

export function getCity(slug: string) {
  const norm = slug.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return CITIES.find((c) => c.slug === norm || c.name.toLowerCase() === slug.toLowerCase());
}

export function getCitiesByProvince(provinceCode: string) {
  return CITIES.filter((c) => c.province.toUpperCase() === provinceCode.toUpperCase());
}
