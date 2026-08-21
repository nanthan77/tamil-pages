export type CinemaTheatre = {
  id: string;
  name: string;
  chain: "Woodside Cinemas" | "Albion Cinemas" | "Cineplex" | "Landmark" | "Independent";
  city: string;
  province: string;
  address: string;
  phone: string;
  bookingUrl: string;
  isMainTamilHub: boolean;
  screens: number;
  features: string[];
};

export type BoxOfficeEntry = {
  rank: number;
  movieTitle: string;
  tamilTitle: string;
  weekendGrossCAD: string;
  totalGrossCAD: string;
  canadianScreens: number;
  occupancy: string;
  verdict: "All-Time Blockbuster" | "Blockbuster" | "Super Hit" | "Hit" | "Opening This Week";
  distributor: string;
};

export type MovieListing = {
  id: string;
  slug: string;
  title: string;
  tamilTitle: string;
  language: string;
  certification: string;
  duration: string;
  genre: string[];
  director: string;
  cast: string[];
  synopsis: string;
  trailerYoutubeId: string;
  posterBg: string;
  posterImg?: string;
  status: "Now Showing" | "Advance Booking" | "Coming Soon";
  boxOfficeCanadaCAD?: string;
  openingWeekendCAD?: string;
  criticRating?: string;
  audienceScore?: string;
  releaseDate: string;
  theatreShowtimes: {
    theatreId: string;
    theatreName: string;
    city: string;
    province: string;
    times: string[];
    bookingLink?: string;
  }[];
};

export const THEATRES: CinemaTheatre[] = [
  // --- PRIMARY INDEPENDENT TAMIL CINEMA HUBS IN GTA ---
  {
    id: "th-001",
    name: "Woodside Cinemas (Scarborough)",
    chain: "Woodside Cinemas",
    city: "Scarborough",
    province: "ON",
    address: "1571 Sandhurst Cir, Scarborough, ON M1V 1V2",
    phone: "+1 416-299-1045",
    bookingUrl: "https://www.newwoodsidecinemas.com/showtimes",
    isMainTamilHub: true,
    screens: 6,
    features: ["Primary Scarborough Tamil Hub", "Live Online Booking (newwoodsidecinemas.com)", "Family-Run Independent Cinema", "Affordable Popcorn & Samosas", "Dolby Surround Sound"],
  },
  {
    id: "th-002",
    name: "Albion Cinemas (Etobicoke / West Toronto)",
    chain: "Albion Cinemas",
    city: "Toronto",
    province: "ON",
    address: "1530 Albion Rd, Etobicoke, ON M9V 1B4",
    phone: "+1 416-742-3456",
    bookingUrl: "https://www.albioncinemas.com/",
    isMainTamilHub: true,
    screens: 4,
    features: ["West Toronto & Peel Tamil Hub", "FDFS Night Shows", "South Asian Blockbusters", "Student & Senior Discounts"],
  },
  {
    id: "th-007",
    name: "Cineplex Cinemas Forum (Montreal)",
    chain: "Cineplex",
    city: "Montreal",
    province: "QC",
    address: "2313 Saint-Catherine St W #101, Montreal, QC H3H 1N2",
    phone: "+1 514-904-1277",
    bookingUrl: "https://www.cineplex.com/theatre/cineplex-cinemas-forum-and-vip",
    isMainTamilHub: true,
    screens: 22,
    features: ["Downtown Montreal Tamil Hub", "VIP Cinemas", "IMAX Experience", "English & French Subtitles"],
  },
  {
    id: "th-009",
    name: "Landmark Cinemas 12 (Guildford / Surrey)",
    chain: "Landmark",
    city: "Surrey",
    province: "BC",
    address: "15051 101 Ave, Surrey, BC V3R 7Z1",
    phone: "+1 604-581-2244",
    bookingUrl: "https://www.landmarkcinemas.com/showtimes/surrey-guildford",
    isMainTamilHub: true,
    screens: 12,
    features: ["Metro Vancouver Primary Tamil Hub", "Laser Projection", "Premiere Recliner Seats", "FDFS Night Shows"],
  },
  {
    id: "th-011",
    name: "Cineplex Odeon Sunridge Spectrum (Calgary)",
    chain: "Cineplex",
    city: "Calgary",
    province: "AB",
    address: "2555 32 St NE, Calgary, AB T1Y 7J6",
    phone: "+1 403-717-1200",
    bookingUrl: "https://www.cineplex.com/theatre/cineplex-odeon-sunridge-spectrum-cinemas",
    isMainTamilHub: true,
    screens: 14,
    features: ["Calgary Tamil Hub", "UltraAVX", "D-BOX", "Alberta Tamil Association Premieres"],
  },
  {
    id: "th-012",
    name: "Scotiabank Theatre Edmonton",
    chain: "Cineplex",
    city: "Edmonton",
    province: "AB",
    address: "8882 170 St NW #3030, Edmonton, AB T5T 4M2",
    phone: "+1 780-444-2400",
    bookingUrl: "https://www.cineplex.com/theatre/scotiabank-theatre-edmonton",
    isMainTamilHub: true,
    screens: 13,
    features: ["West Edmonton Mall Hub", "IMAX 3D", "VIP Lounge", "North Alberta Tamil Releases"],
  },
];

export const CANADA_BOX_OFFICE: BoxOfficeEntry[] = [
  {
    rank: 1,
    movieTitle: "GOAT (The Greatest of All Time)",
    tamilTitle: "தி கிரேட்டஸ்ட் ஆஃப் ஆல் டைம்",
    weekendGrossCAD: "$560,000 CAD",
    totalGrossCAD: "$1,620,000 CAD",
    canadianScreens: 62,
    occupancy: "94% (Sold Out Across GTA & Montreal)",
    verdict: "All-Time Blockbuster",
    distributor: "Canada Tamil Screenings",
  },
  {
    rank: 2,
    movieTitle: "Vishwanath & Sons (Tamil)",
    tamilTitle: "விஸ்வநாத் & சன்ஸ்",
    weekendGrossCAD: "$340,000 CAD",
    totalGrossCAD: "$820,000 CAD",
    canadianScreens: 42,
    occupancy: "91% (Housefull at Woodside)",
    verdict: "Super Hit",
    distributor: "Woodside / York Distribution",
  },
  {
    rank: 3,
    movieTitle: "DC (Tamil)",
    tamilTitle: "டிசி",
    weekendGrossCAD: "$290,000 CAD",
    totalGrossCAD: "$780,000 CAD",
    canadianScreens: 38,
    occupancy: "88% (Action Hit in Scarborough & Etobicoke)",
    verdict: "Hit",
    distributor: "Canadian Tamil Media",
  },
  {
    rank: 4,
    movieTitle: "Thangalaan (Chiyaan Vikram)",
    tamilTitle: "தங்கலான் (சீயான் விக்ரம் - பா.ரஞ்சித்)",
    weekendGrossCAD: "$420,000 CAD",
    totalGrossCAD: "$1,150,000 CAD",
    canadianScreens: 52,
    occupancy: "92% (Packed Theatres in GTA)",
    verdict: "Blockbuster",
    distributor: "Studio Green Canada",
  },
  {
    rank: 5,
    movieTitle: "Raayan (Dhanush & A.R. Rahman)",
    tamilTitle: "ராயன் (தனுஷ் - ஏ.ஆர்.ரஹ்மான்)",
    weekendGrossCAD: "$380,000 CAD",
    totalGrossCAD: "$1,340,000 CAD",
    canadianScreens: 48,
    occupancy: "90% (Long-Running Canadian Hit)",
    verdict: "All-Time Blockbuster",
    distributor: "Sun Pictures Canada",
  },
  {
    rank: 6,
    movieTitle: "Amaran (Sivakarthikeyan & Sai Pallavi)",
    tamilTitle: "அமரன்",
    weekendGrossCAD: "$410,000 CAD",
    totalGrossCAD: "$1,050,000 CAD",
    canadianScreens: 48,
    occupancy: "91% (Major Emotional Blockbuster)",
    verdict: "Blockbuster",
    distributor: "Raaj Kamal Films International",
  },
];

export const MOVIES: MovieListing[] = [
  // 1. LIVE AT WOODSIDE: Vishwanath & Sons (Tamil)
  {
    id: "mov-ws-vishwanath",
    slug: "vishwanath-and-sons-tamil",
    title: "Vishwanath & Sons (Tamil)",
    tamilTitle: "விஸ்வநாத் & சன்ஸ் (தமிழ்)",
    language: "Tamil (with English Subtitles)",
    certification: "G",
    duration: "2h 30m (150 Minutes)",
    genre: ["Drama", "Family", "Sports", "Romance"],
    director: "K. R. Prabhu",
    cast: ["Sanjay Vishwanath", "Priya Anand", "Nasser", "Saranya Ponvannan"],
    synopsis:
      "Sanjay Vishwanath has devoted decades to excellence as an international shooter. When age, family duties, and an unexpected romance collide with his ambitions, he must confront what truly makes a life worth living.",
    trailerYoutubeId: "yfnvD831Wfg",
    posterBg: "from-[#1E3A8A] via-[#1E40AF] to-[#172554]",
    posterImg: "https://mnxczjsznehrsblxtavj.supabase.co/storage/v1/object/public/york_movies-thumbnails/cover/1785632040774__Horizontal_Vishwanath-and-Sons-6f8dcc60-21e4-11f1-80e5-ff240b62edfc.jpg",
    status: "Now Showing",
    releaseDate: "2026-08-14",
    boxOfficeCanadaCAD: "$820K CAD",
    openingWeekendCAD: "$340K CAD",
    criticRating: "4.5/5 ★",
    audienceScore: "94% ★",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["3:15 PM (15:15)", "6:30 PM (18:30)", "9:45 PM (21:45)"],
        bookingLink: "https://www.newwoodsidecinemas.com/details?id=663",
      },
      {
        theatreId: "th-002",
        theatreName: "Albion Cinemas (Etobicoke, ON)",
        city: "Toronto",
        province: "ON",
        times: ["2:30 PM", "5:45 PM", "9:00 PM"],
        bookingLink: "https://www.albioncinemas.com/",
      },
      {
        theatreId: "th-007",
        theatreName: "Cineplex Forum (Montreal, QC)",
        city: "Montreal",
        province: "QC",
        times: ["3:30 PM", "7:00 PM", "10:15 PM"],
        bookingLink: "https://www.cineplex.com/theatre/cineplex-cinemas-forum-and-vip",
      },
      {
        theatreId: "th-009",
        theatreName: "Landmark Cinemas 12 (Surrey, BC)",
        city: "Surrey",
        province: "BC",
        times: ["2:00 PM", "5:30 PM", "8:45 PM"],
        bookingLink: "https://www.landmarkcinemas.com/showtimes/surrey-guildford",
      },
    ],
  },

  // 2. LIVE AT WOODSIDE: DC (Tamil)
  {
    id: "mov-ws-dc",
    slug: "dc-tamil-action",
    title: "DC (Devadas & Chandra - Tamil)",
    tamilTitle: "டிசி (தேவதாஸ் & சந்திரா)",
    language: "Tamil (with English Subtitles)",
    certification: "14A",
    duration: "2h 20m (140 Minutes)",
    genre: ["Action", "Crime Thriller", "Gangster Drama"],
    director: "G. S. Varma",
    cast: ["Rebel Devadas", "Chandra", "Sampath Raj", "Kishore"],
    synopsis:
      "Rebel Devadas joins forces with Chandra in a dangerous world where passion and peril collide. Their turbulent alliance demands bloodshed and tests loyalties as survival becomes the ultimate stakes in their fight.",
    trailerYoutubeId: "p57Mszj2c50",
    posterBg: "from-[#881337] via-[#4C0519] to-[#0F172A]",
    posterImg: "https://mnxczjsznehrsblxtavj.supabase.co/storage/v1/object/public/york_movies-thumbnails/cover/1785633325088_DC_Cover-79542eb0-8c92-11f1-a7b4-f508b260f56c.jpg",
    status: "Now Showing",
    releaseDate: "2026-08-07",
    boxOfficeCanadaCAD: "$780K CAD",
    openingWeekendCAD: "$290K CAD",
    criticRating: "4.3/5 ★",
    audienceScore: "91% ★",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["1:15 PM (13:15)", "4:30 PM (16:30)", "7:45 PM (19:45)", "10:50 PM (22:50)"],
        bookingLink: "https://www.newwoodsidecinemas.com/details?id=667",
      },
      {
        theatreId: "th-002",
        theatreName: "Albion Cinemas (Etobicoke, ON)",
        city: "Toronto",
        province: "ON",
        times: ["1:45 PM", "5:00 PM", "8:15 PM", "11:15 PM"],
        bookingLink: "https://www.albioncinemas.com/",
      },
      {
        theatreId: "th-007",
        theatreName: "Cineplex Forum (Montreal, QC)",
        city: "Montreal",
        province: "QC",
        times: ["4:00 PM", "7:15 PM", "10:30 PM"],
        bookingLink: "https://www.cineplex.com/theatre/cineplex-cinemas-forum-and-vip",
      },
      {
        theatreId: "th-009",
        theatreName: "Landmark Cinemas 12 (Surrey, BC)",
        city: "Surrey",
        province: "BC",
        times: ["1:30 PM", "4:45 PM", "8:00 PM"],
        bookingLink: "https://www.landmarkcinemas.com/showtimes/surrey-guildford",
      },
    ],
  },

  // 3. LIVE AT WOODSIDE: Ram in Leela (Tamil)
  {
    id: "mov-ws-raminleela",
    slug: "ram-in-leela-tamil-romance",
    title: "Ram in Leela (Tamil Romantic Comedy)",
    tamilTitle: "ராம் இன் லீலா (தமிழ்)",
    language: "Tamil (with English Subtitles)",
    certification: "G",
    duration: "2h 21m (141 Minutes)",
    genre: ["Romantic Comedy", "Family Drama", "Feel-Good"],
    director: "S. K. Nalan",
    cast: ["Karthik", "Leela Mohan", "Yogi Babu", "Urvashi"],
    synopsis:
      "A man who has always been unlucky in love finally meets the woman of his dreams, but an extraordinary twist forces him to redefine love, identity, and what it truly means to choose someone.",
    trailerYoutubeId: "yfnvD831Wfg",
    posterBg: "from-[#701A75] via-[#4A044E] to-[#1E1B4B]",
    posterImg: "https://mnxczjsznehrsblxtavj.supabase.co/storage/v1/object/public/york_movies-thumbnails/cover/1787099554040_ram%202.jpg",
    status: "Advance Booking",
    releaseDate: "2026-08-21",
    criticRating: "Anticipated 4.4/5 ★",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["Booking Open · 3:30 PM (15:30)", "6:45 PM (18:45)", "10:00 PM (22:00)"],
        bookingLink: "https://www.newwoodsidecinemas.com/details?id=679",
      },
      {
        theatreId: "th-002",
        theatreName: "Albion Cinemas (Etobicoke, ON)",
        city: "Toronto",
        province: "ON",
        times: ["Booking Open · 3:00 PM", "6:15 PM", "9:30 PM"],
        bookingLink: "https://www.albioncinemas.com/",
      },
    ],
  },

  // 4. LIVE AT WOODSIDE: Khalifa (Malayalam / Tamil Dubbed)
  {
    id: "mov-ws-khalifa",
    slug: "khalifa-south-asian-gold-thriller",
    title: "Khalifa (Gold Syndicate Thriller)",
    tamilTitle: "கலீஃபா",
    language: "Malayalam & Tamil",
    certification: "G",
    duration: "2h 30m (150 Minutes)",
    genre: ["Action", "Crime Thriller", "Heist"],
    director: "Vysakh",
    cast: ["Prithviraj Sukumaran", "Tovino Thomas", "Mamta Mohandas"],
    synopsis:
      "A man becomes entangled in a complex world of revenge, heritage, and influence amid international gold smuggling operations spanning Dubai, Kerala, and Toronto.",
    trailerYoutubeId: "K1pA4w6-9_A",
    posterBg: "from-[#312E81] via-[#1E1B4B] to-[#020617]",
    posterImg: "https://mnxczjsznehrsblxtavj.supabase.co/storage/v1/object/public/york_movies-thumbnails/cover/1785632249338_Khalifa_Cover-a1429600-aa70-11f0-89d8-39ca3fe79c6b.jpg",
    status: "Now Showing",
    releaseDate: "2026-08-20",
    boxOfficeCanadaCAD: "$480K CAD",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["3:00 PM (15:00)", "9:30 PM (21:30)"],
        bookingLink: "https://www.newwoodsidecinemas.com/details?id=664",
      },
    ],
  },

  // 5. LIVE AT WOODSIDE: Toxic: A Fairytale for Grown-Ups (Tamil, Telugu, Kannada)
  {
    id: "mov-ws-toxic",
    slug: "toxic-fairytale-for-grown-ups-yash",
    title: "Toxic: A Fairytale for Grown-Ups (Yash)",
    tamilTitle: "டாக்ஸிக்: எ ஃபேரிடேல் ஃபார் க்ரோன்-அப்ஸ்",
    language: "Tamil, Telugu & Kannada",
    certification: "14A",
    duration: "3h 00m (180 Minutes)",
    genre: ["Action Epic", "Underworld", "Period Gangster"],
    director: "Geetu Mohandas",
    cast: ["Rocking Star Yash", "Kiara Advani", "Nayanthara", "Huma Qureshi"],
    synopsis:
      "Set in a bygone era, this gripping tale unfolds in the coastal paradise of Goa, where a powerful drug cartel pulls the strings behind a facade of sun-soaked beaches and vibrant culture.",
    trailerYoutubeId: "yfnvD831Wfg",
    posterBg: "from-[#451A03] via-[#78350F] to-[#1C1917]",
    status: "Advance Booking",
    releaseDate: "2026-08-25",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["Advance Booking Open for August 25 Premiere Screenings"],
        bookingLink: "https://www.newwoodsidecinemas.com/details?id=503",
      },
    ],
  },

  // 6. LIVE AT WOODSIDE: Hi (Tamil) - Releasing August 28
  {
    id: "mov-ws-hi",
    slug: "hi-tamil-romcom",
    title: "Hi (Tamil Romance Drama)",
    tamilTitle: "ஹாய் (தமிழ்)",
    language: "Tamil (with English Subtitles)",
    certification: "G",
    duration: "2h 30m (150 Minutes)",
    genre: ["Romance", "Comedy", "Family"],
    director: "V. R. Kumar",
    cast: ["Nani", "Mrunal Thakur", "Baby Kiara"],
    synopsis:
      "A man with a steady career seeks marriage with a woman who meets his specific criteria. Their journey from an unconventional beginning to finding love forms the heart of this uplifting romantic tale.",
    trailerYoutubeId: "hylXXMNmH88",
    posterBg: "from-[#064E3B] via-[#065F46] to-[#022C22]",
    status: "Coming Soon",
    releaseDate: "2026-08-28",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["Releasing August 28, 2026 at Woodside Cinemas"],
        bookingLink: "https://www.newwoodsidecinemas.com/details?id=662",
      },
    ],
  },

  // 7. LIVE AT WOODSIDE: Mandaadi (Tamil) - Releasing September 10
  {
    id: "mov-ws-mandaadi",
    slug: "mandaadi-tamil-boat-race-drama",
    title: "Mandaadi (Tamil Traditional Boat Race)",
    tamilTitle: "மந்தாடி (தமிழ்)",
    language: "Tamil (with English Subtitles)",
    certification: "G",
    duration: "2h 30m (150 Minutes)",
    genre: ["Sports Drama", "Maritime Action", "Cultural Heritage"],
    director: "M. Saravanan",
    cast: ["K. Murugan", "Selvi", "Thalapathi Dinesh"],
    synopsis:
      "A fishing captain applies his maritime knowledge in a traditional boat race along Tamil Nadu's coast during a festival, leading a six-person team against rival coastal crews.",
    trailerYoutubeId: "U3j5EwbJ7K8",
    posterBg: "from-[#134E4A] via-[#042F2E] to-[#022C22]",
    status: "Coming Soon",
    releaseDate: "2026-09-10",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["Releasing September 10, 2026 at Woodside Cinemas"],
        bookingLink: "https://www.newwoodsidecinemas.com/details?id=678",
      },
    ],
  },

  // 8. MEGA RELEASE: GOAT - The Greatest of All Time (Thalapathy Vijay)
  {
    id: "mov-goat",
    slug: "goat-greatest-of-all-time-thalapathy",
    title: "GOAT - The Greatest of All Time (Thalapathy Vijay)",
    tamilTitle: "தி கிரேட்டஸ்ட் ஆஃப் ஆல் டைம் (தளபதி விஜய்)",
    language: "Tamil (with English Subtitles)",
    certification: "14A",
    duration: "2h 58m",
    genre: ["Action", "Sci-Fi Thriller", "Commercial Drama"],
    director: "Venkat Prabhu",
    cast: ["Thalapathy Vijay", "Prashanth", "Prabhu Deva", "Sneha", "Meenakshi Chaudhary", "Mohan", "Yuvan Shankar Raja (Music)"],
    synopsis:
      "A high-stakes international anti-terror intelligence squad operative confronts a deeply personal mission spanning Thailand, Russia, and India. Features groundbreaking dual-role de-aging visuals.",
    trailerYoutubeId: "yfnvD831Wfg",
    posterBg: "from-[#800000] via-[#4A0E17] to-[#1A0508]",
    status: "Advance Booking",
    releaseDate: "2026-09-05",
    boxOfficeCanadaCAD: "$1.62M CAD (Record)",
    openingWeekendCAD: "$560K CAD",
    criticRating: "4.7/5 ★",
    audienceScore: "98% ★",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["Advance Booking Open · FDFS 5:30 AM, 9:00 AM, 12:30 PM"],
        bookingLink: "https://www.newwoodsidecinemas.com/showtimes",
      },
      {
        theatreId: "th-002",
        theatreName: "Albion Cinemas (Etobicoke, ON)",
        city: "Toronto",
        province: "ON",
        times: ["Advance Booking Open · FDFS 6:00 AM, 9:30 AM, 1:00 PM"],
        bookingLink: "https://www.albioncinemas.com/",
      },
      {
        theatreId: "th-007",
        theatreName: "Cineplex Forum (Montreal, QC)",
        city: "Montreal",
        province: "QC",
        times: ["Advance Booking · FDFS Friday 10:00 AM"],
        bookingLink: "https://www.cineplex.com/theatre/cineplex-cinemas-forum-and-vip",
      },
      {
        theatreId: "th-009",
        theatreName: "Landmark Cinemas 12 (Surrey, BC)",
        city: "Surrey",
        province: "BC",
        times: ["Advance Booking · FDFS Friday 9:30 AM"],
        bookingLink: "https://www.landmarkcinemas.com/showtimes/surrey-guildford",
      },
    ],
  },
];

export function getAllTheatres(): CinemaTheatre[] {
  return THEATRES;
}

export function getAllMovies(): MovieListing[] {
  return MOVIES;
}

export function getNowShowingMovies(): MovieListing[] {
  return MOVIES.filter((m) => m.status === "Now Showing" || m.status === "Advance Booking");
}

export function getCanadaBoxOffice(): BoxOfficeEntry[] {
  return CANADA_BOX_OFFICE;
}

export function getTheatresByCity(city: string): CinemaTheatre[] {
  const norm = city.trim().toLowerCase();
  return THEATRES.filter((t) => t.city.toLowerCase() === norm);
}

export function getMovieBySlug(slug: string): MovieListing | null {
  return MOVIES.find((m) => m.slug === slug) ?? null;
}
