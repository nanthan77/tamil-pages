import { CATEGORIES, getCategory } from "./categories";
import { CITIES } from "./cities";
import type { Business } from "./types";

export type SortOption = "relevance" | "featured" | "name-asc" | "name-desc" | "verified";

export type SearchFilters = {
  q?: string;
  category?: string;
  city?: string;
  province?: string;
  sort?: SortOption;
  limit?: number;
  offset?: number;
};

export type SearchHit = {
  item: Business;
  score: number;
  matchedFields: string[];
};

export type AutocompleteResult = {
  businesses: {
    slug: string;
    name: string;
    tamilName?: string;
    category: string;
    categoryName: string;
    city: string;
    province: string;
  }[];
  categories: {
    slug: string;
    name: string;
    tamil: string;
    icon: string;
  }[];
  cities: {
    slug: string;
    name: string;
    province: string;
    region: string;
  }[];
};

// Comprehensive Bilingual Synonym & Intent Mapping
const INTENT_SYNONYMS: Record<string, string[]> = {
  "restaurants-takeout": [
    "food", "dining", "lunch", "dinner", "takeout", "take out", "kitchen", "curry", "thali",
    "dosa", "dosai", "hopper", "hoppers", "appam", "kothu", "kottu", "koththu", "roti", "biryani",
    "biriyani", "rice", "unavakam", "unavagam", "short eats", "south indian", "sri lankan",
    "ceylon food", "parotta", "puttu", "pittu", "idli", "sambol", "mutton roll", "lamprais",
    "jaffna curry", "crab curry", "veg thali", "non veg thali", "tiffin", "mess", "hotel", "bavan", "vilas"
  ],
  "grocery-supermarkets": [
    "grocery", "groceries", "grocer", "supermarket", "super store", "market", "food mart",
    "spiceland", "tamilkadai", "spices", "masala", "rice bag", "vegetables", "fish market",
    "meat shop", "halal", "provisions", "palmyra", "jaggery", "curry powder", "moringa",
    "curry leaves", "sambar powder", "coconut milk", "odiyal kool", "nelli crush", "dry fish", "karuvadu"
  ],
  "bakeries-sweets": [
    "bakery", "bakers", "pastry", "pastries", "cake", "cakes", "sweets", "mithai", "short eats",
    "mutton rolls", "fish cutlet", "patties", "vadai", "vada", "laddu", "halwa", "dessert",
    "cream house", "milk toffee", "egg roll", "egg roti", "muscat", "payasam", "kesari", "seeni sambal bun"
  ],
  "catering-event-food": [
    "catering", "caterer", "caterers", "banquet", "banquets", "wedding food", "event food",
    "party tray", "party trays", "bulk food", "annadhanam", "buffet", "samayal", "live dosa counter",
    "engagement catering", "puberty ceremony catering", "housewarming catering"
  ],
  "legal-immigration": [
    "law", "lawyer", "lawyers", "legal", "attorney", "attorneys", "solicitor", "barrister",
    "immigration", "visa", "visas", "super visa", "refugee", "pr", "permanent residency",
    "citizenship", "spousal sponsorship", "notary", "notarization", "paralegal", "oath",
    "affidavit", "asylum", "deportation", "appeal", "judicial review", "work permit", "study permit", "h&c"
  ],
  "accounting-financial": [
    "accounting", "accountant", "accountants", "cpa", "tax", "taxes", "tax return", "tax filing",
    "cra", "cra audit", "bookkeeping", "bookkeeper", "payroll", "corporate tax", "personal tax",
    "mortgage", "mortgages", "financial planner", "wealth management", "investments", "rrsp", "tfsa", "resp"
  ],
  "real-estate-property": [
    "real estate", "realtor", "realtors", "realty", "property", "properties", "property management",
    "buy house", "sell house", "homes for sale", "condo", "condos", "pre-construction",
    "brokerage", "detached home", "townhouse", "commercial lease", "assignment sale", "commercial unit"
  ],
  "medical-dental": [
    "doctor", "doctors", "family doctor", "clinic", "clinics", "dental", "dentist", "dentists",
    "dentistry", "teeth", "tooth", "root canal", "braces", "orthodontist", "physician", "medical",
    "pharmacy", "pharmacist", "physio", "physiotherapy", "chiropractic", "chiropractor",
    "optometrist", "eye doctor", "optical", "glasses", "rehab", "ayurveda", "acupuncture", "sidha"
  ],
  "salons-beauty": [
    "salon", "salons", "beauty", "hair", "barber", "barbershop", "haircut", "bridal", "bridal makeup",
    "makeup", "mehendi", "henna", "spa", "saree draping", "sari draping", "facial", "waxing",
    "eyebrow threading", "grooming", "hair styling", "mua", "manicure", "pedicure"
  ],
  "tuition-education": [
    "tuition", "tutor", "tutors", "tutoring", "academy", "school", "learning", "education",
    "tamil school", "tamil classes", "math tutor", "maths", "science", "physics", "chemistry",
    "driving school", "driving instructor", "road test", "g2", "g license", "carnatic", "vocal music",
    "mridangam", "veena", "violin", "bharatanatyam", "dance classes", "daycare", "child care", "montessori"
  ],
  "it-web": [
    "it", "software", "web design", "website", "web development", "seo", "digital marketing",
    "app development", "computer repair", "laptop repair", "tech support", "cybersecurity", "pos system"
  ],
  "auto-mechanics": [
    "auto", "automotive", "mechanic", "mechanics", "garage", "car repair", "collision", "body shop",
    "tires", "tire change", "winter tires", "brakes", "brake repair", "oil change",
    "safety certificate", "safety inspection", "engine diagnostics", "detailing", "transmission", "windshield"
  ],
  "photography-events": [
    "photography", "photographer", "photographers", "photo", "photos", "photo studio", "video",
    "videography", "videographer", "wedding photography", "cinematography", "dj", "sound system",
    "lighting", "stage decor", "mandap", "manavarai", "wedding planner", "event planner", "emcee", "drone"
  ],
  "temples-community": [
    "temple", "temples", "kovil", "mandir", "church", "mosque", "sangam", "society", "association",
    "community", "congress", "charity", "non-profit", "murugan", "vinayagar", "ganesha", "sivan",
    "shiva", "amman", "durga", "perumal", "ayyappa", "pooja", "priest", "astrologer", "astrology", "jathagam"
  ],
  "media-publishing": [
    "radio", "tv", "television", "broadcast", "media", "news", "newspaper", "magazine",
    "channel", "tamil fm", "fm 101.3", "cmr", "youtube", "diaspora news", "podcast", "press"
  ],
  "fashion-jewellery": [
    "jewellery", "jewelry", "jewellers", "jewelers", "gold", "22k", "22 karat", "goldsmith",
    "diamond", "thali", "chain", "bangles", "saree", "sari", "pattu", "kanchipuram", "silk saree",
    "boutique", "bridal wear", "lehenga", "textiles", "tailor", "tailoring", "veshti", "pavadai", "dhoti"
  ],
  "travel-tours": [
    "travel", "travels", "travel agency", "tours", "tour operator", "air tickets", "air ticket",
    "flight", "flights", "cheap tickets", "colombo flight", "chennai flight", "sri lanka tickets",
    "india tickets", "vacation", "holiday packages", "hotel booking", "cruise"
  ],
  "construction-trades": [
    "construction", "builder", "contractor", "contractors", "renovation", "renovations",
    "basement", "legal basement", "plumbing", "plumber", "electrician", "electrical",
    "hvac", "heating", "cooling", "roofing", "drywall", "flooring", "painter", "painting", "carpentry"
  ],
  "transport-moving": [
    "moving", "movers", "relocation", "transport", "trucking", "logistics", "cargo",
    "shipping to sri lanka", "sea cargo", "air cargo", "parcel service", "courier",
    "airport taxi", "taxi", "cab", "airport limo"
  ],
  "fitness-wellness": [
    "fitness", "gym", "workout", "silambam", "martial arts", "karate", "adimurai",
    "yoga", "wellness", "meditation", "personal training", "ayurvedic massage"
  ],
  "printing-design": [
    "printing", "printers", "graphic design", "wedding cards", "wedding invitations",
    "invitation cards", "signage", "signs", "banners", "flyers", "business cards", "offset print"
  ],
  "insurance": [
    "insurance", "super visa insurance", "life insurance", "visitor insurance", "travel insurance",
    "auto insurance", "home insurance", "commercial insurance", "disability insurance", "critical illness"
  ]
};

// Comprehensive Tamil Script Intent Mapping (100+ keywords)
const TAMIL_SCRIPT_MAP: Record<string, string[]> = {
  // Food & Dining
  "உணவகம்": ["restaurants-takeout"],
  "சாப்பாடு": ["restaurants-takeout"],
  "ஹோட்டல்": ["restaurants-takeout"],
  "தோசை": ["restaurants-takeout"],
  "இட்லி": ["restaurants-takeout"],
  "புட்டு": ["restaurants-takeout"],
  "இடியாப்பம்": ["restaurants-takeout"],
  "கொத்து": ["restaurants-takeout"],
  "கொத்துரொட்டி": ["restaurants-takeout"],
  "பிரியாணி": ["restaurants-takeout"],
  "கறி": ["restaurants-takeout"],
  "மீன் குழம்பு": ["restaurants-takeout"],
  "சாம்பார்": ["restaurants-takeout"],
  "சைவ உணவு": ["restaurants-takeout"],
  "அசைவ உணவு": ["restaurants-takeout"],
  
  // Grocery & Bakery
  "மளிகை": ["grocery-supermarkets"],
  "மளிகைக்கடை": ["grocery-supermarkets"],
  "காய்கறி": ["grocery-supermarkets"],
  "மீன் கடை": ["grocery-supermarkets"],
  "இறைச்சி": ["grocery-supermarkets"],
  "பேக்கரி": ["bakeries-sweets"],
  "இனிப்பகம்": ["bakeries-sweets"],
  "வடை": ["bakeries-sweets"],
  "ரோல்": ["bakeries-sweets"],
  "முறுக்கு": ["bakeries-sweets"],
  "கேக்": ["bakeries-sweets"],
  "கேசரி": ["bakeries-sweets"],
  "பாயாசம்": ["bakeries-sweets"],
  
  // Catering
  "கேட்டரிங்": ["catering-event-food"],
  "சமையல்": ["catering-event-food"],
  "திருமண உணவு": ["catering-event-food"],
  "அன்னதானம்": ["catering-event-food"],
  "விருந்து": ["catering-event-food"],
  
  // Temples & Community
  "கோவில்": ["temples-community"],
  "ஆலயம்": ["temples-community"],
  "திருக்கோவில்": ["temples-community"],
  "முருகன்": ["temples-community"],
  "விநாயகர்": ["temples-community"],
  "பிள்ளையார்": ["temples-community"],
  "சிவன்": ["temples-community"],
  "துர்க்கை": ["temples-community"],
  "அம்மன்": ["temples-community"],
  "பெருமாள்": ["temples-community"],
  "ஐயப்பன்": ["temples-community"],
  "பூசை": ["temples-community"],
  "அர்ச்சனை": ["temples-community"],
  "குருக்கள்": ["temples-community"],
  "ஐயர்": ["temples-community"],
  "ஜோதிடம்": ["temples-community"],
  "ஜாதகம்": ["temples-community"],
  "சங்கம்": ["temples-community"],
  
  // Medical & Health
  "மருத்துவர்": ["medical-dental"],
  "டாக்டர்": ["medical-dental"],
  "மருத்துவமனை": ["medical-dental"],
  "பல் மருத்துவர்": ["medical-dental"],
  "பல் கிளினிக்": ["medical-dental"],
  "பார்மசி": ["medical-dental"],
  "மருந்தகம்": ["medical-dental"],
  "கண் மருத்துவர்": ["medical-dental"],
  "பிசியோதெரபி": ["medical-dental"],
  "ஆயுர்வேதம்": ["medical-dental"],
  "சித்த மருத்துவம்": ["medical-dental"],
  
  // Legal & Immigration
  "சட்டம்": ["legal-immigration"],
  "வழக்கறிஞர்": ["legal-immigration"],
  "வழக்குரைஞர்": ["legal-immigration"],
  "குடிவரவு": ["legal-immigration"],
  "விசா": ["legal-immigration"],
  "சூப்பர் விசா": ["legal-immigration", "insurance"],
  "அகதி": ["legal-immigration"],
  "நோட்டரி": ["legal-immigration"],
  
  // Accounting & Tax
  "கணக்காளர்": ["accounting-financial"],
  "ஆடிட்டர்": ["accounting-financial"],
  "வரி தாக்கல்": ["accounting-financial"],
  "வருமான வரி": ["accounting-financial"],
  "வங்கி": ["accounting-financial"],
  "வீட்டுக்கடன்": ["accounting-financial"],
  "நிதி ஆலோசகர்": ["accounting-financial"],
  
  // Real Estate
  "ரியல் எஸ்டேட்": ["real-estate-property"],
  "வீடு": ["real-estate-property"],
  "வீடு வாங்க": ["real-estate-property"],
  "வீடு விற்க": ["real-estate-property"],
  "வாடகை": ["real-estate-property"],
  "கான்டோ": ["real-estate-property"],
  
  // Fashion & Jewellery
  "நகை": ["fashion-jewellery"],
  "நகைக் கடை": ["fashion-jewellery"],
  "தங்கம்": ["fashion-jewellery"],
  "வைரம்": ["fashion-jewellery"],
  "தாலி": ["fashion-jewellery"],
  "சேலை": ["fashion-jewellery"],
  "பட்டுப் புடவை": ["fashion-jewellery"],
  "காஞ்சிபுரம்": ["fashion-jewellery"],
  "ஆடை": ["fashion-jewellery"],
  "தையல் கடை": ["fashion-jewellery"],
  "வேஷ்டி": ["fashion-jewellery"],
  
  // Education & Arts
  "கல்வி": ["tuition-education"],
  "டியூஷன்": ["tuition-education"],
  "தமிழ் பள்ளி": ["tuition-education"],
  "கணிதம்": ["tuition-education"],
  "விஞ்ஞானம்": ["tuition-education"],
  "டிரைவிங் பள்ளி": ["tuition-education"],
  "சாரதி பயிற்சி": ["tuition-education"],
  "இசை": ["tuition-education"],
  "கர்நாடக இசை": ["tuition-education"],
  "மிருதங்கம்": ["tuition-education"],
  "வீணை": ["tuition-education"],
  "வாய்ப்பாட்டு": ["tuition-education"],
  "நடனம்": ["tuition-education"],
  "பரதநாட்டியம்": ["tuition-education"],
  "சிலம்பம்": ["fitness-wellness"],
  "யோகா": ["fitness-wellness"],
  
  // Trades & Auto
  "வாகனம்": ["auto-mechanics"],
  "மெக்கானிக்": ["auto-mechanics"],
  "கார் ரிப்பேர்": ["auto-mechanics"],
  "டயர்": ["auto-mechanics"],
  "கட்டுமானம்": ["construction-trades"],
  "பிளம்பிங்": ["construction-trades"],
  "எலக்ட்ரீசியன்": ["construction-trades"],
  "பெயிண்டர்": ["construction-trades"],
  
  // Travel & Transport
  "பயணம்": ["travel-tours"],
  "விமான டிக்கெட்": ["travel-tours"],
  "கொழும்பு விமானம்": ["travel-tours"],
  "சென்னை விமானம்": ["travel-tours"],
  "சரக்கு சேவை": ["transport-moving"],
  "கார்கோ": ["transport-moving"],
  "மூவிங்": ["transport-moving"],
  
  // Events & Media
  "புகைப்படம்": ["photography-events"],
  "வீடியோ": ["photography-events"],
  "திருமண மண்டபம்": ["photography-events", "catering-event-food"],
  "வானொலி": ["media-publishing"],
  "செய்தி": ["media-publishing"],
  "வானொலி 101.3": ["media-publishing"],
  
  // Insurance
  "காப்பீடு": ["insurance"],
  "இன்சூரன்ஸ்": ["insurance"],
  "மருத்துவக் காப்பீடு": ["insurance"],
  "வாகனக் காப்பீடு": ["insurance"]
};

// Fast Levenshtein distance calculation
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Strict match and fuzzy match helper
function isFuzzyMatch(word: string, target: string): boolean {
  if (!word || !target) return false;
  const w = word.trim().toLowerCase();
  const t = target.trim().toLowerCase();
  if (w.length === 0 || t.length === 0) return false;

  if (t.includes(w) || w.includes(t)) return true;

  // Only apply edit distance on Latin words
  const isAscii = /^[\x00-\x7F]+$/.test(w) && /^[\x00-\x7F]+$/.test(t);
  if (!isAscii) return false;

  if (w.length < 4 || t.length < 4) return false;
  const maxDist = w.length > 7 ? 2 : 1;
  return levenshtein(w, t) <= maxDist;
}

// Match score calculator
function scoreBusiness(b: Business, queryTokens: string[], targetCategories: Set<string>, locationFilter?: string): { score: number; matchedFields: string[] } {
  let score = 0;
  let hasExplicitMatch = false;
  const matchedFields: string[] = [];

  const nameLower = (b.name || "").toLowerCase();
  const tamilName = (b.tamilName || "").toLowerCase();
  const catLower = (b.category || "").toLowerCase();
  const cityLower = (b.city || "").toLowerCase();
  const descLower = (b.description || "").toLowerCase();
  const tagsLower = (b.tags || []).filter(Boolean).map((t) => t.toLowerCase());
  const keywordsLower = (b.keywords || []).filter(Boolean).map((k) => k.toLowerCase());
  const addrLower = (b.address || "").toLowerCase();

  // Category intent boost
  if (targetCategories.has(b.category)) {
    score += 100;
    hasExplicitMatch = true;
    matchedFields.push("category_intent");
  }

  // Location filter boost
  if (locationFilter) {
    const loc = locationFilter.toLowerCase();
    if (cityLower === loc || (addrLower && addrLower.includes(loc))) {
      score += 40;
      matchedFields.push("city");
    }
  }

  // Check each query token
  for (const token of queryTokens) {
    if (!token || token.length === 0) continue;

    // Exact name match
    if (nameLower === token || (tamilName && tamilName === token)) {
      score += 120;
      hasExplicitMatch = true;
      matchedFields.push("name_exact");
    } else if (nameLower.startsWith(token) || (tamilName && tamilName.startsWith(token))) {
      score += 80;
      hasExplicitMatch = true;
      matchedFields.push("name_prefix");
    } else if (nameLower.includes(token) || (tamilName && tamilName.includes(token))) {
      score += 60;
      hasExplicitMatch = true;
      matchedFields.push("name_partial");
    } else if (isFuzzyMatch(token, nameLower)) {
      score += 35;
      hasExplicitMatch = true;
      matchedFields.push("name_fuzzy");
    }

    // Category match
    if (catLower.includes(token)) {
      score += 50;
      hasExplicitMatch = true;
      matchedFields.push("category");
    }

    // Tags & Keywords match
    if (tagsLower.some((t) => t && (t.includes(token) || isFuzzyMatch(token, t)))) {
      score += 40;
      hasExplicitMatch = true;
      matchedFields.push("tags");
    }
    if (keywordsLower.some((k) => k && (k.includes(token) || isFuzzyMatch(token, k)))) {
      score += 35;
      hasExplicitMatch = true;
      matchedFields.push("keywords");
    }

    // City match
    if (cityLower.includes(token)) {
      score += 25;
      matchedFields.push("city");
    }

    // Description match
    if (descLower && descLower.includes(token)) {
      score += 20;
      hasExplicitMatch = true;
      matchedFields.push("description");
    }
  }

  if (!hasExplicitMatch) {
    return { score: 0, matchedFields: [] };
  }

  // Boost verified & featured businesses
  if (b.verified) score += 10;
  if (b.featured) score += 15;
  if (b.rating && b.rating >= 4.5) score += 5;

  return { score, matchedFields: Array.from(new Set(matchedFields)) };
}

// Main Search Function
export function searchBusinesses(
  businesses: Business[],
  filters: SearchFilters = {}
): { results: Business[]; total: number; matchedCategories: string[] } {
  let list = businesses;

  // Category filter
  if (filters.category && filters.category !== "all") {
    const normCat = filters.category.toLowerCase();
    list = list.filter((b) => b.category.toLowerCase() === normCat);
  }

  // City filter
  if (filters.city && filters.city !== "all") {
    const normCity = filters.city.trim().toLowerCase();
    list = list.filter((b) => b.city.toLowerCase() === normCity);
  }

  // Province filter
  if (filters.province && filters.province !== "all") {
    const normProv = filters.province.trim().toLowerCase();
    list = list.filter((b) => b.province.toLowerCase() === normProv);
  }

  const query = (filters.q || "").trim().toLowerCase();
  const matchedCategories = new Set<string>();

  if (!query) {
    const sorted = sortBusinesses(list, filters.sort || "featured");
    const offset = filters.offset || 0;
    const limit = filters.limit || 50;
    return {
      results: sorted.slice(offset, offset + limit),
      total: sorted.length,
      matchedCategories: Array.from(matchedCategories),
    };
  }

  // Multi-term tokenization
  const tokens = query.split(/[\s,+]+/).filter((t) => t.length > 0);

  // Extract category intent from synonyms & Tamil script map
  for (const token of tokens) {
    for (const [catSlug, syns] of Object.entries(INTENT_SYNONYMS)) {
      if (syns.some((s) => s.toLowerCase() === token || isFuzzyMatch(token, s))) {
        matchedCategories.add(catSlug);
      }
    }
    for (const [tamilTerm, cats] of Object.entries(TAMIL_SCRIPT_MAP)) {
      if (token === tamilTerm || token.startsWith(tamilTerm) || tamilTerm.startsWith(token)) {
        cats.forEach((c) => matchedCategories.add(c));
      }
    }
  }

  // Score all businesses
  const hits: SearchHit[] = [];
  for (const b of list) {
    const { score, matchedFields } = scoreBusiness(b, tokens, matchedCategories, filters.city);
    if (score > 0) {
      hits.push({ item: b, score, matchedFields });
    }
  }

  // Sort by score if relevance sort, otherwise apply user-specified sort
  let finalResults: Business[];
  if (!filters.sort || filters.sort === "relevance") {
    hits.sort((a, b) => b.score - a.score);
    finalResults = hits.map((h) => h.item);
  } else {
    finalResults = sortBusinesses(
      hits.map((h) => h.item),
      filters.sort
    );
  }

  const offset = filters.offset || 0;
  const limit = filters.limit || 50;

  return {
    results: finalResults.slice(offset, offset + limit),
    total: finalResults.length,
    matchedCategories: Array.from(matchedCategories),
  };
}

export function executeSearch(businesses: Business[], filters: SearchFilters = {}): Business[] {
  return searchBusinesses(businesses, filters).results;
}

// Sorting utility
function sortBusinesses(list: Business[], sort: SortOption): Business[] {
  const copy = [...list];
  switch (sort) {
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return copy.sort((a, b) => b.name.localeCompare(a.name));
    case "verified":
      return copy.sort((a, b) => (b.verified ? 1 : 0) - (a.verified ? 1 : 0));
    case "featured":
    default:
      return copy.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.verified && !b.verified) return -1;
        if (!a.verified && b.verified) return 1;
        return (b.rating || 0) - (a.rating || 0);
      });
  }
}

// Fast Instant Autocomplete Engine
export function getAutocompleteSuggestions(
  businesses: Business[],
  query: string,
  limit: number = 6
): AutocompleteResult {
  const q = query.trim().toLowerCase();
  if (!q || q.length < 1) {
    return { businesses: [], categories: [], cities: [] };
  }

  const isAscii = /^[\x00-\x7F]+$/.test(q);
  const matchedCats: AutocompleteResult["categories"] = [];

  // 1. Direct Category & Synonym Matches
  for (const c of CATEGORIES) {
    const cName = c.name.toLowerCase();
    const cTamil = c.tamil.toLowerCase();
    const cSlug = c.slug.toLowerCase();

    const directMatch =
      cName.includes(q) ||
      cTamil.includes(q) ||
      cSlug.includes(q);

    const synonymMatch = INTENT_SYNONYMS[c.slug]?.some(
      (syn) => syn.toLowerCase() === q || (isAscii && isFuzzyMatch(q, syn))
    );

    if (directMatch || synonymMatch) {
      if (!matchedCats.some((mc) => mc.slug === c.slug)) {
        matchedCats.push({
          slug: c.slug,
          name: c.name,
          tamil: c.tamil,
          icon: c.icon,
        });
      }
    }
  }

  // 2. Tamil Script Map Category Matches
  for (const [tTerm, cSlugs] of Object.entries(TAMIL_SCRIPT_MAP)) {
    if (q === tTerm || q.startsWith(tTerm) || tTerm.startsWith(q)) {
      for (const slug of cSlugs) {
        const cat = getCategory(slug);
        if (cat && !matchedCats.some((mc) => mc.slug === cat.slug)) {
          matchedCats.push({
            slug: cat.slug,
            name: cat.name,
            tamil: cat.tamil,
            icon: cat.icon,
          });
        }
      }
    }
  }

  // 3. Matched Cities
  const matchedCities: AutocompleteResult["cities"] = [];
  for (const city of CITIES) {
    const cityName = city.name.toLowerCase();
    if (cityName.includes(q) || (isAscii && isFuzzyMatch(q, cityName))) {
      matchedCities.push({
        slug: city.slug,
        name: city.name,
        province: city.province,
        region: city.region,
      });
    }
  }

  // 4. Matched Businesses (Full scoring ranking)
  const scoredBusinesses = searchBusinesses(businesses, { q, limit });
  const matchedBusinesses = scoredBusinesses.results.slice(0, limit).map((b) => {
    const cat = getCategory(b.category);
    return {
      slug: b.slug,
      name: b.name,
      tamilName: b.tamilName,
      category: b.category,
      categoryName: cat?.name || b.category,
      city: b.city,
      province: b.province,
    };
  });

  return {
    businesses: matchedBusinesses,
    categories: matchedCats.slice(0, 4),
    cities: matchedCities.slice(0, 3),
  };
}
