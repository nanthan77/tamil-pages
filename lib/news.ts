export type NewsCategory =
  | "Community"
  | "Immigration & Settlement"
  | "Culture & Heritage"
  | "Business & Economy"
  | "Youth & Education"
  | "Sports & Health";

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  tamilTitle?: string;
  category: NewsCategory;
  summary: string;
  content: string[];
  author: string;
  publishedAt: string; // ISO date string
  city: string;
  province: string;
  readTime: string;
  featured: boolean;
  tags: string[];
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-001",
    slug: "tamil-heritage-month-celebrations-across-canada",
    title: "Tamil Heritage Month 2026: Nationwide Celebrations Across Canada Highlight Diaspora Contributions",
    tamilTitle: "கனடா முழுவதும் தமிழ் மரபுத் திங்கள் கொண்டாட்டங்கள்: புலம்பெயர் தமிழ் சமூகத்தின் சாதனைகள்",
    category: "Culture & Heritage",
    summary:
      "From Parliament Hill in Ottawa to municipal halls in Toronto, Scarborough, Markham, Montreal, and Vancouver, Canadians mark Tamil Heritage Month with cultural showcases, historical exhibits, and community banquets.",
    content: [
      "January marks Tamil Heritage Month across Canada, recognizing Tamil history, culture, literature, and community contributions.",
      "In Toronto and Scarborough, community celebrations kicked off with the raising of the traditional Tamil cultural flag at City Hall and the Scarborough Civic Centre, attended by provincial and federal representatives, municipal leaders, and community elders.",
      "Cultural organizations, including the Canadian Tamil Congress (CTC), Tamil Cultural Association of Waterloo, and Montreal Tamil Sangam, have organized classical music concerts, Bharatanatyam showcases, Tamil poetry recitals, and academic symposiums exploring the preservation of Tamil language in second- and third-generation Canadian youth.",
      "The month-long celebrations also emphasize philanthropic initiatives, including food bank drives, winter clothing collections for new immigrant families, and blood donation drives organized in partnership with Canadian Blood Services.",
    ],
    author: "Canadian Tamil News Desk",
    publishedAt: "2026-08-20T10:00:00Z",
    city: "Toronto",
    province: "ON",
    readTime: "4 min read",
    featured: true,
    tags: ["Tamil Heritage Month", "Diaspora", "Toronto", "Ottawa", "Culture"],
  },
  {
    id: "news-002",
    slug: "canadian-tamil-chamber-of-commerce-annual-awards",
    title: "Canadian Tamil Chamber of Commerce (CTCC) Unveils 2026 Business Excellence Finalists",
    tamilTitle: "கனடிய தமிழர் வர்த்தக சம்மேளனம்: 2026 சிறந்த வணிக விருதுகள் அறிவிப்பு",
    category: "Business & Economy",
    summary:
      "The prestigious annual awards recognize groundbreaking achievements among Tamil entrepreneurs in technology, real estate, hospitality, accounting, and healthcare across Canada.",
    content: [
      "The Canadian Tamil Chamber of Commerce (CTCC) has officially unveiled the nominees for its 2026 Annual Business Awards Gala, set to take place at the Metro Toronto Convention Centre.",
      "This year's nominations reflect the remarkable evolution of Tamil-owned businesses in Canada, expanding rapidly from traditional retail, bakeries, and restaurants into high-growth sectors such as artificial intelligence, medical clinics, logistics, commercial construction, and green energy.",
      "Key award categories include Entrepreneur of the Year, Young Entrepreneur Award, Business Excellence in Hospitality, Professional of the Year, and the Lifetime Community Impact Award.",
      "'Tamil Canadian entrepreneurs have built an economic ecosystem generating tens of thousands of jobs nationwide,' noted the CTCC executive committee. 'Our businesses continue to bridge Canadian trade with global South Asian markets.'",
    ],
    author: "Business & Economy Bureau",
    publishedAt: "2026-08-20T08:30:00Z",
    city: "Markham",
    province: "ON",
    readTime: "3 min read",
    featured: true,
    tags: ["CTCC", "Business", "Entrepreneurs", "Markham", "Economy"],
  },
  {
    id: "news-003",
    slug: "canada-new-parent-grandparent-sponsorship-settlement-guide",
    title: "Immigration Canada Settlement Update: Family Reunification & Super Visa Guidelines for Tamil Families",
    tamilTitle: "கனடா குடிவரவு & குடும்ப மீள்இணைப்பு வழிகாட்டி: பெற்றோர் & தாத்தா பாட்டி ஸ்பான்சர்ஷிப்",
    category: "Immigration & Settlement",
    summary:
      "Comprehensive breakdown for Canadian Tamil families navigating the 2026 Super Visa requirements, medical insurance updates, and permanent residency sponsorships for parents and grandparents.",
    content: [
      "Navigating family sponsorship in Canada remains one of the top priorities for Tamil families settled in Ontario, Quebec, British Columbia, and Alberta.",
      "Immigration, Refugees and Citizenship Canada (IRCC) has introduced streamlined processing for the multi-entry Super Visa, allowing parents and grandparents to stay in Canada for up to 5 consecutive years per visit, with options to extend while within Canada.",
      "Key requirements highlighted by Toronto and Montreal immigration consultants include valid Canadian medical insurance from approved providers, minimum necessary income (MNI) proof for sponsors, and complete biometric and medical clearances.",
      "Local settlement agencies across Scarborough (such as Tamil Eelam Society of Canada) and Brampton provide free document translation, notarization assistance, and orientation workshops for newly arrived seniors to help them adapt to Canadian healthcare and community transit systems.",
    ],
    author: "Settlement & Legal Advisory Desk",
    publishedAt: "2026-08-18T16:00:00Z",
    city: "Scarborough",
    province: "ON",
    readTime: "5 min read",
    featured: false,
    tags: ["Immigration", "Super Visa", "Settlement", "IRCC", "Family"],
  },
  {
    id: "news-004",
    slug: "canadian-tamil-youth-hackathon-technology-summit",
    title: "Tamil Youth Tech Summit 2026: University Students Build AI Tools for Community Heritage & Translation",
    tamilTitle: "கனடிய தமிழ் இளைஞர் தொழில்நுட்ப உச்சிமாநாடு: செயற்கை நுண்ணறிவு மற்றும் மொழி வளர்ச்சி",
    category: "Youth & Education",
    summary:
      "Over 300 engineering and computer science students from U of T, Waterloo, McMaster, York, and McGill gathered in Markham for a 36-hour hackathon focused on Tamil NLP and healthcare accessibility.",
    content: [
      "The annual Canadian Tamil Youth in Tech Conference brought together top undergraduate and graduate students, tech founders, and software engineers from across Canadian universities.",
      "Top winning projects included an AI-powered real-time speech translation system designed to help elderly Tamil immigrants communicate seamlessly in Ontario hospitals, as well as an interactive digital archive digitizing centuries of historical Tamil literature and oral diaspora testimonies.",
      "Tech mentors from leading Canadian tech enterprises and Silicon Valley firms hosted workshops on AI model fine-tuning, venture capital fundraising, and startup incubators in Toronto and Vancouver.",
    ],
    author: "Technology & Youth Desk",
    publishedAt: "2026-08-17T11:00:00Z",
    city: "Markham",
    province: "ON",
    readTime: "4 min read",
    featured: true,
    tags: ["Youth", "Tech", "Waterloo", "AI", "University of Toronto"],
  },
  {
    id: "news-005",
    slug: "montreal-tamil-cultural-festival-parc-extension",
    title: "Montreal Tamil Cultural Street Festival Draws Record Devotee & Food Enthusiast Crowds",
    tamilTitle: "மொண்ட்ரியால் தமிழ் கலாச்சார திருவிழா: பல்லாயிரக்கணக்கான மக்கள் பங்கேற்பு",
    category: "Community",
    summary:
      "Jean-Talon and Rue Bélanger came alive with the vibrant sights, sounds, and flavors of Tamil street cuisine, Kothu Roti showcases, and traditional Carnatic rhythm ensembles.",
    content: [
      "Montreal’s Parc-Extension and Côte-des-Neiges neighborhoods celebrated the annual Montreal Tamil Cultural Street Festival, bringing together thousands of Quebec residents from diverse multicultural backgrounds.",
      "Visitors enjoyed freshly made Jaffna-style string hoppers, spicy mutton rolls, hot filter coffee, and live street demonstrations of Kothu Roti making.",
      "The event featured live performances of traditional Parai Isai drumming, Karagattam folk dance, and musical concerts featuring local Montreal Tamil youth choirs and international guest artists.",
    ],
    author: "Quebec Cultural Bureau",
    publishedAt: "2026-08-16T09:30:00Z",
    city: "Montreal",
    province: "QC",
    readTime: "3 min read",
    featured: false,
    tags: ["Montreal", "Street Festival", "Quebec", "Kothu Roti", "Music"],
  },
  {
    id: "news-006",
    slug: "canadian-tamil-cricket-league-championship-finals",
    title: "Canadian Tamil Cricket League (CTCL) 2026 Finals: Scarborough Lions Clinch Championship Trophy",
    tamilTitle: "கனடிய தமிழர் கிரிக்கெட் லீக் 2026: சாம்பியன் கோப்பையை வென்றது ஸ்கார்பரோ லயன்ஸ்",
    category: "Sports & Health",
    summary:
      "A thrilling super-over finish at the Sunnybrook Park Cricket Grounds in Toronto concludes the largest Tamil diaspora summer sporting tournament in North America.",
    content: [
      "The 2026 Canadian Tamil Cricket League (CTCL) season concluded this weekend with a nail-biting final match between the Scarborough Lions and the Brampton Strikers.",
      "With over 48 teams competing across Premier, Elite, and Masters divisions throughout the summer, the CTCL represents one of Canada's most organized and competitive amateur cricket leagues.",
      "Thousands of families cheered from the boundaries, enjoying traditional picnic lunches, cold drinks, and community fellowship. The league also announced expansion plans for youth cricket academies in Markham and Mississauga next spring.",
    ],
    author: "Sports Bureau",
    publishedAt: "2026-08-05T18:00:00Z",
    city: "Toronto",
    province: "ON",
    readTime: "3 min read",
    featured: false,
    tags: ["Cricket", "CTCL", "Sports", "Toronto", "Brampton"],
  },
];

export function getAllNews(): NewsArticle[] {
  return NEWS_ARTICLES;
}

export function getNewsBySlug(slug: string): NewsArticle | null {
  return NEWS_ARTICLES.find((a) => a.slug === slug) ?? null;
}

export function getNewsByCategory(category: string): NewsArticle[] {
  const norm = category.trim().toLowerCase();
  return NEWS_ARTICLES.filter((a) => a.category.toLowerCase() === norm);
}

export function getLatestNews(limit = 6): NewsArticle[] {
  return [...NEWS_ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function searchNews(q: string): NewsArticle[] {
  const query = q.trim().toLowerCase();
  if (!query) return getAllNews();
  return NEWS_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(query) ||
      a.summary.toLowerCase().includes(query) ||
      (a.tamilTitle && a.tamilTitle.toLowerCase().includes(query)) ||
      a.city.toLowerCase().includes(query) ||
      a.category.toLowerCase().includes(query) ||
      a.tags.some((t) => t.toLowerCase().includes(query)),
  );
}
