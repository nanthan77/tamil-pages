export type CinemaTheatre = {
  id: string;
  name: string;
  chain: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  bookingUrl: string;
  isMainTamilHub: boolean;
};

export type MovieListing = {
  id: string;
  slug: string;
  title: string;
  tamilTitle: string;
  language: string;
  certification: string; // PG, 14A, 18A
  duration: string;
  genre: string[];
  director: string;
  cast: string[];
  synopsis: string;
  trailerYoutubeId: string;
  posterBg: string; // Gradient or backdrop styling
  status: "Now Showing" | "Advance Booking" | "Coming Soon";
  theatreShowtimes: {
    theatreId: string;
    theatreName: string;
    city: string;
    province: string;
    times: string[];
  }[];
};

export const THEATRES: CinemaTheatre[] = [
  {
    id: "th-001",
    name: "Woodside Cinemas (Scarborough)",
    chain: "Woodside Cinemas",
    city: "Scarborough",
    province: "ON",
    address: "1571 Sandhurst Cir, Scarborough, ON M1V 1V2",
    phone: "+1 416-299-1700",
    bookingUrl: "https://www.woodsidecinemas.com/",
    isMainTamilHub: true,
  },
  {
    id: "th-002",
    name: "Albion Cinemas (Etobicoke / Toronto)",
    chain: "Albion Cinemas",
    city: "Toronto",
    province: "ON",
    address: "1530 Albion Rd, Etobicoke, ON M9V 1B4",
    phone: "+1 416-742-1765",
    bookingUrl: "https://www.albioncinemas.com/",
    isMainTamilHub: true,
  },
  {
    id: "th-003",
    name: "Cineplex Odeon Eglinton Town Centre",
    chain: "Cineplex",
    city: "Scarborough",
    province: "ON",
    address: "22 Lebovic Ave, Scarborough, ON M1L 4V9",
    phone: "+1 416-752-4494",
    bookingUrl: "https://www.cineplex.com/",
    isMainTamilHub: true,
  },
  {
    id: "th-004",
    name: "Cineplex Cinemas Forum (Montreal)",
    chain: "Cineplex",
    city: "Montreal",
    province: "QC",
    address: "2313 Saint-Catherine St W #101, Montreal, QC H3H 1N2",
    phone: "+1 514-904-1277",
    bookingUrl: "https://www.cineplex.com/",
    isMainTamilHub: true,
  },
  {
    id: "th-005",
    name: "Landmark Cinemas 12 (Guildford / Surrey)",
    chain: "Landmark",
    city: "Surrey",
    province: "BC",
    address: "15051 101 Ave, Surrey, BC V3R 7Z1",
    phone: "+1 604-581-2244",
    bookingUrl: "https://www.landmarkcinemas.com/",
    isMainTamilHub: true,
  },
  {
    id: "th-006",
    name: "Cineplex Odeon Sunridge Spectrum (Calgary)",
    chain: "Cineplex",
    city: "Calgary",
    province: "AB",
    address: "2555 32 St NE, Calgary, AB T1Y 7J6",
    phone: "+1 403-717-1200",
    bookingUrl: "https://www.cineplex.com/",
    isMainTamilHub: true,
  },
  {
    id: "th-007",
    name: "Scotiabank Theatre Edmonton",
    chain: "Cineplex",
    city: "Edmonton",
    province: "AB",
    address: "8882 170 St NW #3030, Edmonton, AB T5T 4M2",
    phone: "+1 780-444-2400",
    bookingUrl: "https://www.cineplex.com/",
    isMainTamilHub: true,
  },
];

export const MOVIES: MovieListing[] = [
  {
    id: "mov-001",
    slug: "thalapathy-epic-action-blockbuster",
    title: "GOAT - The Greatest of All Time",
    tamilTitle: "தி கிரேட்டஸ்ட் ஆஃப் ஆல் டைம்",
    language: "Tamil (with English Subtitles)",
    certification: "14A",
    duration: "2h 58m",
    genre: ["Action", "Sci-Fi Thriller", "Commercial Drama"],
    director: "Venkat Prabhu",
    cast: ["Thalapathy Vijay", "Prashanth", "Prabhu Deva", "Sneha", "Meenakshi Chaudhary"],
    synopsis:
      "A high-stakes international intelligence operative and elite anti-terror squad leader confronts an unexpected threat from his past, unearthing shocking secrets with cutting-edge de-aging action sequences.",
    trailerYoutubeId: "yfnvD831Wfg",
    posterBg: "from-[#800000] via-[#4A0E17] to-[#1A0508]",
    status: "Now Showing",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["1:15 PM", "4:30 PM", "7:45 PM", "10:50 PM"],
      },
      {
        theatreId: "th-002",
        theatreName: "Albion Cinemas (Etobicoke, ON)",
        city: "Toronto",
        province: "ON",
        times: ["2:00 PM", "5:15 PM", "8:30 PM", "11:30 PM"],
      },
      {
        theatreId: "th-004",
        theatreName: "Cineplex Forum (Montreal, QC)",
        city: "Montreal",
        province: "QC",
        times: ["3:30 PM", "7:00 PM", "10:15 PM"],
      },
      {
        theatreId: "th-005",
        theatreName: "Landmark Cinemas (Surrey / Vancouver, BC)",
        city: "Surrey",
        province: "BC",
        times: ["1:00 PM", "4:15 PM", "7:30 PM", "10:45 PM"],
      },
      {
        theatreId: "th-006",
        theatreName: "Cineplex Sunridge Spectrum (Calgary, AB)",
        city: "Calgary",
        province: "AB",
        times: ["3:00 PM", "6:45 PM", "10:00 PM"],
      },
    ],
  },
  {
    id: "mov-002",
    slug: "viduthalai-part-2-vetrimaaran",
    title: "Viduthalai: Part 2",
    tamilTitle: "விடுதலை பகுதி 2",
    language: "Tamil (with English Subtitles)",
    certification: "18A",
    duration: "2h 45m",
    genre: ["Political Drama", "Action", "Social Realism"],
    director: "Vetrimaaran",
    cast: ["Vijay Sethupathi", "Soori", "Manju Warrier", "Bhavani Sre", "Gautham Vasudev Menon"],
    synopsis:
      "Vetrimaaran's critically acclaimed cinematic masterpiece continues, delving deeply into the backstory of Vaathiyaar Perumal and the intense socio-political struggle in the dense forests.",
    trailerYoutubeId: "dQw4w9WgXcQ",
    posterBg: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
    status: "Now Showing",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["2:30 PM", "6:00 PM", "9:15 PM"],
      },
      {
        theatreId: "th-003",
        theatreName: "Cineplex Odeon Eglinton (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["4:00 PM", "7:30 PM", "10:45 PM"],
      },
      {
        theatreId: "th-004",
        theatreName: "Cineplex Forum (Montreal, QC)",
        city: "Montreal",
        province: "QC",
        times: ["6:15 PM", "9:30 PM"],
      },
    ],
  },
  {
    id: "mov-003",
    slug: "canadian-tamil-indie-diaspora-film-roots",
    title: "Vergal - Roots of Diaspora (Canadian Tamil Independent Feature)",
    tamilTitle: "வேர்கள் - கனடிய புலம்பெயர் தமிழ் திரைப்படம்",
    language: "Tamil & English (Bilingual)",
    certification: "PG",
    duration: "1h 52m",
    genre: ["Drama", "Diaspora", "Family"],
    director: "K. Senthil Nathan (Toronto)",
    cast: ["Nirojan Shanmugam", "Kavitha Rajan", "S. Pathmanathan", "Shalini Mohan"],
    synopsis:
      "Shot entirely across Scarborough, Markham, and Jaffna, this poignant Canadian Tamil indie film follows two generations of a family grappling with cultural identity, immigrant struggles, and homecoming.",
    trailerYoutubeId: "dQw4w9WgXcQ",
    posterBg: "from-[#1A2980] via-[#26D0CE] to-[#0A4D92]",
    status: "Advance Booking",
    theatreShowtimes: [
      {
        theatreId: "th-001",
        theatreName: "Woodside Cinemas (Scarborough, ON)",
        city: "Scarborough",
        province: "ON",
        times: ["Special Premiere: Saturday 5:00 PM", "Sunday 2:00 PM & 6:00 PM"],
      },
      {
        theatreId: "th-004",
        theatreName: "Cineplex Forum (Montreal, QC)",
        city: "Montreal",
        province: "QC",
        times: ["Saturday 4:00 PM (Filmmaker Q&A)"],
      },
    ],
  },
  {
    id: "mov-004",
    slug: "thug-life-kamal-haasan-mani-ratnam",
    title: "Thug Life (Kamal Haasan & Mani Ratnam)",
    tamilTitle: "தக் லைஃப் (கமல்ஹாசன் - மணிரத்னம்)",
    language: "Tamil (with English Subtitles)",
    certification: "14A",
    duration: "2h 40m",
    genre: ["Gangster Epic", "Action", "Drama"],
    director: "Mani Ratnam",
    cast: ["Kamal Haasan", "Silambarasan TR", "Trisha Krishnan", "Ashok Selvan", "A.R. Rahman (Music)"],
    synopsis:
      "The legendary reunion of Kamal Haasan and Mani Ratnam after 36 years since Nayakan. A sweeping gangster saga featuring breathtaking cinematography and an iconic musical score by A.R. Rahman.",
    trailerYoutubeId: "dQw4w9WgXcQ",
    posterBg: "from-[#200122] via-[#6f0000] to-[#0B1D3A]",
    status: "Coming Soon",
    theatreShowtimes: [],
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

export function getTheatresByCity(city: string): CinemaTheatre[] {
  const norm = city.trim().toLowerCase();
  return THEATRES.filter((t) => t.city.toLowerCase() === norm);
}

export function getMovieBySlug(slug: string): MovieListing | null {
  return MOVIES.find((m) => m.slug === slug) ?? null;
}
