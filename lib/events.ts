export type EventCategory =
  | "Temple Thiruvizha"
  | "Music & Concert"
  | "Bharatanatyam & Dance"
  | "Community & Festival"
  | "Business & Networking"
  | "Sports & Tournament"
  | "Youth & Campus";

export type CommunityEvent = {
  id: string;
  slug: string;
  title: string;
  tamilTitle?: string;
  category: EventCategory;
  startDate: string; // YYYY-MM-DD
  endDate?: string;
  startTime: string;
  venueName: string;
  address: string;
  city: string;
  province: string;
  ticketType: "Free Entry" | "Ticketed" | "Free Registration";
  ticketPrice?: string;
  ticketUrl?: string;
  organizer: string;
  phone?: string;
  email?: string;
  description: string;
  highlights: string[];
  featured: boolean;
};

export const EVENTS: CommunityEvent[] = [
  {
    id: "evt-001",
    slug: "toronto-grand-tamil-music-night-2026",
    title: "Toronto Tamil Isai Night 2026: Live Carnatic & Fusion Symphony",
    tamilTitle: "ரொறன்ரோ தமிழ் இசை இரவு 2026: பிரம்மாண்ட நேரலை இசைக்கச்சேரி",
    category: "Music & Concert",
    startDate: "2026-08-22",
    startTime: "6:30 PM EDT",
    venueName: "Living Arts Centre (Hammerson Hall)",
    address: "4141 Living Arts Dr, Mississauga, ON L5B 4B8",
    city: "Mississauga",
    province: "ON",
    ticketType: "Ticketed",
    ticketPrice: "$35 – $100",
    ticketUrl: "https://www.livingartscentre.ca/",
    organizer: "Canadian Tamil Musical Association",
    phone: "+1 416-555-0188",
    description:
      "An unforgettable evening celebrating classical Tamil Isai, film classics of Ilaiyaraaja and A.R. Rahman, and vibrant contemporary fusion performed by top Canadian Tamil vocalists and a 30-piece live orchestra.",
    highlights: [
      "30-Piece Live Canadian Symphony Orchestra",
      "Special Tributes to Classical Tamil Composers & Mellisai",
      "Celebrity Guest Performers & Super Singer Finalists",
      "Complimentary Reception & Snacks",
    ],
    featured: true,
  },
  {
    id: "evt-002",
    slug: "montreal-durkai-amman-ther-thiruvizha-2026",
    title: "Montreal Sri Durkai Amman Grand Annual Chariot Festival (Ther Thiruvizha)",
    tamilTitle: "மொண்ட்ரியால் ஸ்ரீ துர்க்கை அம்மன் கோவில் வருடாந்த தேர்த் திருவிழா",
    category: "Temple Thiruvizha",
    startDate: "2026-08-23",
    startTime: "8:00 AM – 3:00 PM EDT",
    venueName: "Sri Durkai Amman Temple Grounds & Rue Bélanger",
    address: "2465 Rue Bélanger, Montréal, QC H2G 1E4",
    city: "Montreal",
    province: "QC",
    ticketType: "Free Entry",
    ticketPrice: "Free Admission · Annadhanam Served",
    organizer: "Sri Durkai Amman Kovil Management",
    phone: "+1 514-722-7779",
    description:
      "Quebec's largest South Asian spiritual and cultural procession. Over 10,000 devotees join together as the majestic wooden chariot bearing Mother Durkai Amman rolls through the decorated streets of Montreal, accompanied by Kavadi, Nadaswaram, and free traditional vegetarian Annadhanam.",
    highlights: [
      "Grand Ther Chariot Procession on Montreal Streets",
      "Paal Kudam & Traditional Alagu Kavadi Offerings",
      "Free Multi-Course Traditional Jaffna Annadhanam Feast",
      "Devotional Music & Thevaram Recitals",
    ],
    featured: true,
  },
  {
    id: "evt-003",
    slug: "vancouver-tamil-summer-picnic-bbq-2026",
    title: "Metro Vancouver Tamil Community Annual Summer Picnic & Games",
    tamilTitle: "வான்கூவர் தமிழ் சமூகம்: கோடைக்கால ஒன்றுகூடல் & விளையாட்டு விழா",
    category: "Community & Festival",
    startDate: "2026-08-29",
    startTime: "11:00 AM – 6:00 PM PDT",
    venueName: "Bear Creek Park Pavilion",
    address: "13750 88 Ave, Surrey, BC V3W 3L1",
    city: "Surrey",
    province: "BC",
    ticketType: "Free Entry",
    ticketPrice: "Free Family Admission",
    organizer: "Tamil Cultural Society of British Columbia",
    phone: "+1 604-536-7494",
    description:
      "Join Tamil families across Vancouver, Surrey, Burnaby, Richmond, and Langley for a joyful summer celebration in the park with traditional village games, Tug-of-War (Vadaam Izhuthal), hot dosa stall, BBQ, and kids' track events.",
    highlights: [
      "Traditional Village Games (Uri Adithal, Vadam Izhuthal)",
      "Live Hot Dosa & Kothu Roti Food Truck",
      "Kids Track & Field Races with Medals",
      "Networking for Newcomers & University Students in BC",
    ],
    featured: true,
  },
  {
    id: "evt-004",
    slug: "canadian-tamil-business-expo-networking-summit",
    title: "Canadian Tamil Business Expo & Trade Show 2026",
    tamilTitle: "கனடா தமிழ் வணிக கண்காட்சி & தொழில்முனைவோர் உச்சிமாநாடு",
    category: "Business & Networking",
    startDate: "2026-09-12",
    startTime: "10:00 AM – 5:00 PM EDT",
    venueName: "Markham Convention Centre",
    address: "2901 Markham Rd, Scarborough, ON M1X 1E6",
    city: "Scarborough",
    province: "ON",
    ticketType: "Free Registration",
    ticketPrice: "Free with Pre-Registration",
    organizer: "Canadian Tamil Chamber of Commerce (CTCC)",
    phone: "+1 416-299-5006",
    description:
      "The premier B2B and B2C networking expo uniting over 120 Tamil-owned companies, startups, real estate developers, mortgage specialists, legal firms, franchise brands, and tech ventures under one roof.",
    highlights: [
      "120+ Exhibitor Booths Across 15 Industries",
      "Keynote Panels on Canadian Real Estate & Commercial Growth",
      "Investor Pitch Lounge for Young Founders",
      "Career & Job Fair for University Graduates",
    ],
    featured: true,
  },
  {
    id: "evt-005",
    slug: "calgary-tamil-nadana-arangetram-showcase",
    title: "Calgary Bharatanatyam Margam Showcase: Divine Rhythms of Nataraja",
    tamilTitle: "கல்கரி பரதநாட்டிய மார்கம்: நாட்டிய அரங்கேற்ற பெருவிழா",
    category: "Bharatanatyam & Dance",
    startDate: "2026-09-19",
    startTime: "4:00 PM MDT",
    venueName: "Wright Theatre (Mount Royal University)",
    address: "4825 Mt Royal Gate SW, Calgary, AB T3E 6K6",
    city: "Calgary",
    province: "AB",
    ticketType: "Free Entry",
    ticketPrice: "Free Admission · All Welcome",
    organizer: "Alberta Fine Arts & Dance Academy",
    phone: "+1 403-248-2838",
    description:
      "A celebration of classical South Indian dance heritage in Alberta, featuring full classical Margam performances (Alarippu, Jatiswaram, Varnam, Padam, Thillana) by graduating Canadian Tamil dance scholars.",
    highlights: [
      "Traditional Live Carnatic Music Accompaniment",
      "Vibrant Tanjore & Pandanallur Style Choreography",
      "Guest Dignitaries & Cultural Felicitation",
      "Prasadam & High Tea Reception",
    ],
    featured: false,
  },
  {
    id: "evt-006",
    slug: "ottawa-tamil-heritage-youth-badminton-cup",
    title: "Ottawa Tamil Youth Badminton Tournament 2026",
    tamilTitle: "ஒட்டாவா தமிழர் பூப்பந்து போட்டி 2026",
    category: "Sports & Tournament",
    startDate: "2026-09-26",
    startTime: "9:00 AM – 7:00 PM EDT",
    venueName: "RA Centre (National Capital Region)",
    address: "2451 Riverside Dr, Ottawa, ON K1H 7X7",
    city: "Ottawa",
    province: "ON",
    ticketType: "Ticketed",
    ticketPrice: "$25 Team Registration",
    organizer: "Ottawa Tamil Cultural Association",
    phone: "+1 613-822-1531",
    description:
      "Annual doubles and singles badminton championship for youth and adults across the National Capital Region (Ottawa, Gatineau, Nepean, Kanata). Trophies and cash prizes for top champions.",
    highlights: [
      "Men's, Women's & Mixed Doubles Divisions",
      "Certified Badminton Canada Referees",
      "Medals, Trophies & Cash Prizes",
      "Refreshments & Lunch Provided",
    ],
    featured: false,
  },
];

export function getAllEvents(): CommunityEvent[] {
  return EVENTS;
}

export function getUpcomingEvents(): CommunityEvent[] {
  return [...EVENTS].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );
}

export function getEventsByCity(city: string): CommunityEvent[] {
  const norm = city.trim().toLowerCase();
  return EVENTS.filter((e) => e.city.toLowerCase() === norm);
}

export function getEventBySlug(slug: string): CommunityEvent | null {
  return EVENTS.find((e) => e.slug === slug) ?? null;
}

export function countEventsByCity(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const e of EVENTS) {
    const key = e.city.toLowerCase();
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}
