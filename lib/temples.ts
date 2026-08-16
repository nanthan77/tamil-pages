export type PoojaTime = {
  name: string;
  tamilName?: string;
  time: string;
  description?: string;
};

export type SpecialFestival = {
  name: string;
  tamilName?: string;
  month: string;
  description: string;
};

export type Temple = {
  id: string;
  slug: string;
  name: string;
  tamilName: string;
  moolavar: string; // Main deity
  city: string;
  province: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  whatsapp?: string;
  description: string;
  darshanHours: {
    weekdayMorning: string;
    weekdayEvening: string;
    weekendHours: string;
    specialDays?: string;
  };
  poojaTimings: PoojaTime[];
  festivals: SpecialFestival[];
  priestServices: string[];
  facilities: string[];
  nearbyDiningSlugs: string[];
  featured: boolean;
};

export const TEMPLES: Temple[] = [
  // --- ONTARIO (GTA) ---
  {
    id: "tmpl-001",
    slug: "sri-varasiththi-vinaayagar-temple",
    name: "Sri Varasiththi Vinaayagar Hindu Temple",
    tamilName: "ஸ்ரீ வரசித்தி விநாயகர் ஆலயம்",
    moolavar: "Sri Varasiththi Vinaayagar (Maha Ganapathy)",
    city: "Scarborough",
    province: "ON",
    address: "2701 Markham Rd, Scarborough, ON M1X 1M4",
    phone: "+1 416-299-5006",
    website: "https://www.vinaayagar.com/",
    email: "info@vinaayagar.com",
    whatsapp: "+14162995006",
    description:
      "One of Canada’s largest and oldest Tamil Hindu temples, established in the late 1980s. Located on Markham Road in Scarborough, it serves as the spiritual epicenter for hundreds of thousands of Tamil Canadians across the Greater Toronto Area.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM (Continuous Darshan)",
      specialDays: "Fridays, Chaturthi & Festival Days open until 10:30 PM",
    },
    poojaTimings: [
      { name: "Kala Santhi Pooja", tamilName: "காலை சாந்தி பூஜை", time: "9:00 AM", description: "Morning traditional abhishekam & deeparadhana" },
      { name: "Uchi Kala Pooja", tamilName: "உச்சிகால பூஜை", time: "12:00 PM", description: "Midday archana & naivedyam offering" },
      { name: "Sayaratchai Pooja", tamilName: "சாயரட்சை பூஜை", time: "6:30 PM", description: "Evening grand aarthi & dharshan" },
      { name: "Arthajama Pooja", tamilName: "அர்த்தஜாம பூஜை", time: "8:30 PM", description: "Night closing pooja & palliyarai darshan" },
    ],
    festivals: [
      { name: "Annual Mahotsavam (Ther Thiruvizha)", tamilName: "வருடாந்த மஹோற்சவ தேர்த் திருவிழா", month: "July / August (Aani-Aadi)", description: "Grand 10-day festival featuring Sapparam, Ther (Chariot procession), Theertham water-cutting ceremony, and Poonkavadi." },
      { name: "Vinayagar Chaturthi", tamilName: "விநாயகர் சதுர்த்தி", month: "August / September (Aavani)", description: "10-day grand celebration with Modhaka naivedyam, Special Ganapathy Homam, and Sandhana Kaappu." },
      { name: "Maha Shivaratri", tamilName: "மகா சிவராத்திரி", month: "February / March (Maasi)", description: "All-night 4-Jaama Rudrabhishekam and continuous devotional chanting." },
      { name: "Navarathri Utsavam", tamilName: "நவராத்திரி விழா", month: "September / October (Purattasi)", description: "9 nights of Durga, Lakshmi, and Saraswathi alankaram with daily cultural performances." },
      { name: "Skanda Sashti", tamilName: "கந்த சஷ்டி சூரசம்ஹாரம்", month: "October / November (Aippasi)", description: "6-day fasting pooja culminating in live Soorasamharam enactment." },
    ],
    priestServices: [
      "Archana & Sahasranama Archana",
      "Special Ganapathy Homam & Navagraha Homam",
      "Kalyana Utsavam (Hindu Wedding Ceremonies)",
      "Grihapravesham (House Warming Poojas)",
      "Car Blessing / Vahana Pooja",
    ],
    facilities: [
      "Grand Wedding & Banquet Cultural Hall",
      "Annadhanam Prasadam Dining Hall",
      "Tamil Language & Thevaram Classrooms",
      "Large Free Parking Lot",
    ],
    nearbyDiningSlugs: ["martins-bakery", "babu-takeout-and-catering", "confused-kitchen", "eelam-fusion", "motherland-foods"],
    featured: true,
  },
  {
    id: "tmpl-002",
    slug: "richmond-hill-hindu-temple",
    name: "Hindu Temple Society of Canada (Richmond Hill)",
    tamilName: "ரிச்மண்ட் ஹில் இந்து ஆலயம்",
    moolavar: "Sri Ganesha, Venkateshwara & Shiva",
    city: "Richmond Hill",
    province: "ON",
    address: "10865 Bayview Ave, Richmond Hill, ON L4S 1M1",
    phone: "+1 905-883-9109",
    website: "https://www.thehindutemple.ca/",
    email: "info@thehindutemple.ca",
    whatsapp: "+19058839109",
    description:
      "A stunning traditional Chola & Dravidian stone architectural wonder in York Region, Ontario. Features hand-carved granite sanctums for Ganesha, Shiva, Parvathi, Venkateshwara, Murugan, and Durga.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM (All Day)",
      specialDays: "Holidays & Festival Days open all day",
    },
    poojaTimings: [
      { name: "Suprabhatham & Morning Pooja", tamilName: "சுப்ரபாதம் & காலை பூஜை", time: "9:00 AM", description: "Morning awakening prayers & abhishekam" },
      { name: "Madhyana Pooja", tamilName: "மதிய பூஜை", time: "12:00 PM", description: "Noon offering & aarthi" },
      { name: "Sayaratchai Pooja", tamilName: "சாயரட்சை தீபாராதனை", time: "6:30 PM", description: "Evening congregational prayers" },
      { name: "Ratri Pooja & Ekantha Seva", tamilName: "ராத்திரி பூஜை", time: "8:30 PM", description: "Night closing ceremony" },
    ],
    festivals: [
      { name: "Annual Brahmotsavam & Chariot Festival", tamilName: "வருடாந்த பிரம்மோற்சவம் & ரதோற்சவம்", month: "June / July", description: "10-day grand festival with Vahana processions and spectacular Ratham/Ther." },
      { name: "Navarathri Festival & Grand Kolu", tamilName: "நவராத்திரி பெருவிழா & கொலு", month: "September / October", description: "Grand 9-day Kolu exhibition with Carnatic concerts and Bharatanatyam dance." },
      { name: "Vaikunta Ekadasi", tamilName: "வைகுண்ட ஏகாதசி சொர்க்கவாசல்", month: "December / January", description: "Opening of the Swarga Vaasal with special Venkateshwara darshan." },
    ],
    priestServices: [
      "Venkateshwara Abhishekam & Kalyanotsavam",
      "Sathyanarayana Vratha Pooja",
      "Navagraha & Sudarshana Homam",
      "Hindu Marriage Solemnization",
    ],
    facilities: [
      "Traditional Kalyana Mandapam (Banquet Hall)",
      "Temple Canteen serving Fresh Prasadam",
      "Cultural Auditorium",
      "Extensive Parking Lot",
    ],
    nearbyDiningSlugs: ["subiksha-supermarket-markham", "gana-kadai-markham", "aaha-truly-south"],
    featured: true,
  },
  {
    id: "tmpl-003",
    slug: "nallur-murugan-temple-toronto",
    name: "Toronto Sri Murugan Kovil (Nallur Heritage)",
    tamilName: "ரொறன்ரோ நல்லூர் முருகன் கோவில்",
    moolavar: "Sri Shanmukanathar / Lord Murugan",
    city: "Scarborough",
    province: "ON",
    address: "3825 Sheppard Ave E, Scarborough, ON M1T 3L4",
    phone: "+1 416-754-0004",
    website: "",
    email: "",
    description:
      "Deeply revered by the Sri Lankan Tamil diaspora, this temple embodies the traditions and devotional fervor of the famed Nallur Kandaswamy Kovil in Jaffna. Known for vibrant festival processions, Kavadi, and soul-stirring Thevaram.",
    darshanHours: {
      weekdayMorning: "7:30 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:30 PM",
      weekendHours: "7:30 AM – 9:30 PM",
      specialDays: "Sashti & Karthigai days open until 10:00 PM",
    },
    poojaTimings: [
      { name: "Ushakkala Pooja", tamilName: "உஷக்கால பூஜை", time: "8:00 AM", description: "Early morning darshan and abhishekam" },
      { name: "Uchikala Pooja", tamilName: "உச்சிகால தீபாராதனை", time: "12:00 PM", description: "Noon naivedyam" },
      { name: "Sayaratchai Pooja", tamilName: "சாயரட்சை பூஜை", time: "6:30 PM", description: "Evening grand alankaram and song offering" },
      { name: "Arthajamam", tamilName: "அர்த்தஜாம பூஜை", time: "8:45 PM", description: "Night palliyarai seva" },
    ],
    festivals: [
      { name: "Nallur Ther Thiruvizha (Chariot Procession)", tamilName: "நல்லூர் தேர்த் திருவிழா", month: "August (Aavani)", description: "Mirrors the Jaffna Nallur Kanthan 25-day festival with Sapparam, Ther, and Theertham." },
      { name: "Skanda Sashti & Soorasamharam", tamilName: "கந்த சஷ்டி சூரசம்ஹாரம்", month: "October / November", description: "Intense 6-day fasting with the legendary battle of Lord Murugan vanquishing Soorapadman." },
      { name: "Thaipusam", tamilName: "தைப்பூசம் பால் குட பவனி", month: "January / February", description: "Paal Kudam (Milk Pot) procession, Alagu Kavadi, and grand Murugan archana." },
    ],
    priestServices: [
      "Murugan Sahasranama & Shatru Samhara Trishathi",
      "Kavadi Abhishekam & Paal Abhishekam",
      "Kalyana Uruthi & Vivaha Samskaram",
    ],
    facilities: [
      "Prasadam & Annadhanam Hall",
      "Spiritual Library & Thevaram Chanting Group",
      "Wheelchair Accessible Ramp",
    ],
    nearbyDiningSlugs: ["hopper-hut", "canbe-foods-inc", "new-kalyani-restaurant", "dindigul-thalappakattu-scarborough"],
    featured: true,
  },
  {
    id: "tmpl-004",
    slug: "sri-ayyappa-samajam-ontario",
    name: "Sri Ayyappa Samajam of Ontario",
    tamilName: "ஸ்ரீ ஐயப்ப சமாஜம் ஒன்ராறியோ",
    moolavar: "Lord Ayyappa (Sri Dharma Sastha)",
    city: "Scarborough",
    province: "ON",
    address: "635 Middlefield Rd, Scarborough, ON M1V 5B8",
    phone: "+1 416-321-6104",
    website: "https://ayyappasooriyam.com/",
    email: "info@ayyappasooriyam.com",
    whatsapp: "+14163216104",
    description:
      "The premier Lord Ayyappa pilgrimage and temple center in Canada. Hosts the 41-day Mandala season, 18 Holy Steps (Pathinettam Padi), Padi Pooja, and traditional Sabarimala rituals.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:30 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Mandala Season (Nov 15 - Jan 15): 6:00 AM – 1:30 PM & 5:00 PM – 10:00 PM",
    },
    poojaTimings: [
      { name: "Nirmalya Darshanam & Ushapooja", tamilName: "உஷ பூஜை", time: "8:30 AM", description: "Morning darshan with butter and sandal alankaram" },
      { name: "Uchikala Pooja", tamilName: "உச்சிகால பூஜை", time: "12:30 PM", description: "Midday naivedyam" },
      { name: "Deeparadhana", tamilName: "சாயரட்சை தீபாராதனை", time: "6:30 PM", description: "Evening oil lamp aarthi and bhajans" },
      { name: "Harivarasanam", tamilName: "ஹரிவராசனம் & நடை அடைப்பு", time: "8:45 PM", description: "Sacred lullaby chant before closing" },
    ],
    festivals: [
      { name: "Mandala Pooja Season", tamilName: "மண்டல பூஜை காலம்", month: "Nov 15 – Dec 26", description: "41 days of Irumudi Kettu, Vratam, Ghee Abhishekam, and daily Annadhanam." },
      { name: "Makara Vilakku & Padi Pooja", tamilName: "மகர விளக்கு & 18 படி பூஜை", month: "January 14 / 15", description: "Grand 18-step illumination with devotional Ayyappa bhajans." },
    ],
    priestServices: [
      "Irumudi Kattu & Ghee Coconut Abhishekam",
      "Padi Pooja (18 Holy Steps Special Archana)",
      "Ganapathy Homam & Mrityunjaya Homam",
    ],
    facilities: [
      "18 Sacred Holy Steps (Pathinettam Padi)",
      "Huge Annadhanam Dining Facility",
      "Spacious Parking Lot",
    ],
    nearbyDiningSlugs: ["babu-takeout-and-catering", "motherland-foods", "confused-kitchen"],
    featured: true,
  },
  {
    id: "tmpl-005",
    slug: "canada-sri-kanthaswamy-kovil",
    name: "Canada Sri Kanthaswamy Kovil",
    tamilName: "கனடா ஸ்ரீ கந்தசுவாமி கோவில்",
    moolavar: "Lord Murugan (Kanthaswamy)",
    city: "Scarborough",
    province: "ON",
    address: "733 Birchmount Rd, Scarborough, ON M1K 1R5",
    phone: "+1 416-759-9648",
    website: "",
    email: "srikanthaswamykovil@gmail.com",
    description:
      "A prominent traditional Murugan temple on Birchmount Road in Scarborough, celebrated for ancient Jaffna-style pooja agamas, monthly Karthigai deepam, and annual 10-day festival.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Karthigai & Sashti days open until 10:00 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை சாந்தி", time: "8:30 AM", description: "Morning darshan and Paal Abhishekam" },
      { name: "Uchi Kaalam", tamilName: "உச்சிகாலம்", time: "12:00 PM", description: "Noon prayer" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Annual Mahotsavam & Ther", tamilName: "வருடாந்த மகோற்சவம்", month: "July / August", description: "10-day chariot and water cutting celebration." },
      { name: "Thaipusam Kavadi", tamilName: "தைப்பூசம் காவடி", month: "January / February", description: "Grand milk pots and kavadi processions." },
    ],
    priestServices: ["Murugan Abhishekam", "Kavadi Pooja", "Vivaham", "Grihapravesham"],
    facilities: ["Banquet Mandapam", "Prasadam Hall", "Parking"],
    nearbyDiningSlugs: ["hopper-hut", "canbe-foods-inc"],
    featured: false,
  },
  {
    id: "tmpl-006",
    slug: "sri-meenakshi-amman-temple-toronto",
    name: "Sri Meenakshi Amman Temple Toronto",
    tamilName: "ஸ்ரீ மீனாட்சி அம்மன் ஆலயம் (ரொறன்ரோ)",
    moolavar: "Madurai Meenakshi Amman & Sundareswarar",
    city: "Scarborough",
    province: "ON",
    address: "170 Nugget Ave, Scarborough, ON M1S 3A7",
    phone: "+1 416-291-7667",
    website: "",
    email: "meenakshiammantemple@gmail.com",
    description:
      "Dedicated to Goddess Meenakshi of Madurai. Known for Chithirai Thiruvizha (Thirukalyanam), Navarathri Golu, Aadi Pooram, and maternal blessings.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM",
      specialDays: "Tuesdays & Fridays open until 10:00 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை சாந்தி", time: "9:00 AM", description: "Morning Amman alankaram" },
      { name: "Uchi Kaalam", tamilName: "உச்சிகாலம்", time: "12:00 PM", description: "Noon archana" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Chithirai Thirukalyanam", tamilName: "சித்திரை திருக்கல்யாணம்", month: "April / May", description: "Celebration of Meenakshi Sundareswarar divine wedding." },
      { name: "Navarathri Utsavam", tamilName: "நவராத்திரி கொலு", month: "September / October", description: "9 days of special Alankaram and music concerts." },
    ],
    priestServices: ["Amman Abhishekam", "Chandi Homam", "Kanya Pooja", "Marriage Ceremonies"],
    facilities: ["Prasadam Hall", "Thevaram School", "Parking"],
    nearbyDiningSlugs: ["babu-takeout-and-catering", "martins-bakery"],
    featured: false,
  },
  {
    id: "tmpl-007",
    slug: "sri-nagapooshani-amman-temple",
    name: "Sri Nagapooshani Amman Temple (Nainativu Heritage)",
    tamilName: "ஸ்ரீ நாகபூஷணி அம்மன் கோவில் (நயினாதீவு)",
    moolavar: "Nainativu Sri Nagapooshani Amman",
    city: "Scarborough",
    province: "ON",
    address: "5637 Finch Ave E, Unit 5, Scarborough, ON M1B 5K9",
    phone: "+1 416-299-1950",
    website: "",
    email: "",
    description:
      "Deeply connected to the sacred shrine of Nainativu Nagapooshani Amman in Northern Sri Lanka. Known for fulfilling prayers for family well-being, health, and children.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Aani Mahotsavam days open all day",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை சாந்தி", time: "8:30 AM", description: "Morning darshan" },
      { name: "Uchi Kaalam", tamilName: "உச்சிகாலம்", time: "12:00 PM", description: "Noon prayer" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Aani Ther Mahotsavam", tamilName: "ஆனி தேர்த் திருவிழா", month: "June / July", description: "10-day festival mirroring Nainativu island celebrations." },
    ],
    priestServices: ["Nagapooshani Archana", "Naga Dosha Nivarthi", "Abhishekam"],
    facilities: ["Prasadam Hall", "Wheelchair Access"],
    nearbyDiningSlugs: ["motherland-foods", "eelam-fusion"],
    featured: false,
  },
  {
    id: "tmpl-008",
    slug: "pickering-aruljothy-shivan-temple",
    name: "Pickering Arulmigu Aruljothy Shivan Temple",
    tamilName: "பிக்கரிங் அருள்மிகு அருள்ஜோதி சிவன் கோவில்",
    moolavar: "Sri Aruljotheeswarar (Lord Shiva)",
    city: "Pickering",
    province: "ON",
    address: "1730 McPherson Crt, Unit 20, Pickering, ON L1W 3E6",
    phone: "+1 905-837-1473",
    website: "",
    email: "aruljothyshivan@gmail.com",
    description:
      "A serene Shaivite sanctuary serving Durham Region Tamil families in Pickering, Ajax, Whitby, and Oshawa. Celebrates authentic Shiva agamic rituals, Pradosham, and Natarajar Abhishekam.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:30 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM",
      specialDays: "Pradosham and Shivaratri days open until 10:30 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை சாந்தி", time: "8:30 AM", description: "Morning Rudrabhishekam & Deeparadhana" },
      { name: "Uchi Kaalam", tamilName: "உச்சிகால பூஜை", time: "12:00 PM", description: "Midday archana" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாம பூஜை", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Maha Shivaratri (4-Jaama Pooja)", tamilName: "மகா சிவராத்திரி நான்கு கால பூஜை", month: "February / March", description: "Continuous 14-hour night prayer with Rudrabhishekam." },
      { name: "Bi-Monthly Pradosham", tamilName: "பிரதோஷ விரத பூஜை", month: "Twice Monthly", description: "Nandi Vahana procession and Bilva archana." },
    ],
    priestServices: ["Rudra Homam", "Pradosha Nandi Special Abhishekam", "Navagraha Shanti"],
    facilities: ["Durham Community Gathering Hall", "Free Parking"],
    nearbyDiningSlugs: ["durham-tamil-catering-ajax", "pickering-tamil-tuition-centre"],
    featured: true,
  },
  {
    id: "tmpl-009",
    slug: "brampton-sri-sivasubramaniya-swamy-kovil",
    name: "Brampton Sri Sivasubramaniya Swamy Kovil (Murugan Temple)",
    tamilName: "பிராம்ப்டன் ஸ்ரீ சிவசுப்பிரமணிய சுவாமி கோவில்",
    moolavar: "Lord Murugan (Sri Sivasubramaniyar)",
    city: "Brampton",
    province: "ON",
    address: "147 Wilkinson Rd, Brampton, ON L6T 4X1",
    phone: "+1 905-455-8889",
    website: "",
    email: "bramptonmurugantemple@gmail.com",
    description:
      "A vibrant spiritual epicenter for thousands of Tamil families in Peel Region (Brampton, Mississauga, Caledon). Celebrates Grand Thaipusam, Sashti, and annual chariot festivals.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM",
      specialDays: "Sashti days open until 10:00 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை சாந்தி", time: "8:30 AM", description: "Morning darshan" },
      { name: "Uchi Kaalam", tamilName: "உச்சிகாலம்", time: "12:00 PM", description: "Noon prayer" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Thaipusam Festival", tamilName: "தைப்பூச திருவிழா", month: "January / February", description: "Kavadi, milk pots, and community feasts." },
      { name: "Skanda Sashti", tamilName: "கந்த சஷ்டி சூரசம்ஹாரம்", month: "October / November", description: "6-day fasting and celebration." },
    ],
    priestServices: ["Murugan Abhishekam", "Vivaham", "Grihapravesham", "Car Puja"],
    facilities: ["Kalyana Mandapam", "Prasadam Canteen", "Large Parking"],
    nearbyDiningSlugs: ["vinayagar-vilas-take-outtering", "brampton-tamil-realtors"],
    featured: true,
  },
  {
    id: "tmpl-010",
    slug: "brampton-sri-ganesha-durga-hindu-temple",
    name: "Brampton Sri Ganesha Durga Hindu Temple",
    tamilName: "பிராம்ப்டன் ஸ்ரீ கணேச துர்கா இந்து கோவில்",
    moolavar: "Sri Siddhi Vinayagar & Goddess Durga",
    city: "Brampton",
    province: "ON",
    address: "247 Advance Blvd, Brampton, ON L6T 4T9",
    phone: "+1 905-793-4555",
    website: "",
    email: "",
    description:
      "Dedicated to Sri Ganesha and Goddess Durga. Known for weekly Rahu Kala Durga deepam, Navarathri alankarams, and Ganapathy Homams in Peel Region.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM",
    },
    poojaTimings: [
      { name: "Morning Pooja", tamilName: "காலை பூஜை", time: "9:00 AM", description: "Morning darshan" },
      { name: "Evening Deeparadhana", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Night Seva", tamilName: "அர்த்தஜாமம்", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Vinayagar Chaturthi & Navarathri", tamilName: "விநாயகர் சதுர்த்தி & நவராத்திரி", month: "Aug - Oct", description: "Major annual festivals with special poojas." },
    ],
    priestServices: ["Durga Deepam", "Ganapathy Homam", "House Warming", "Vehicle Blessing"],
    facilities: ["Prasadam Hall", "Parking"],
    nearbyDiningSlugs: ["vinayagar-vilas-take-outtering"],
    featured: false,
  },
  {
    id: "tmpl-011",
    slug: "mississauga-siva-sathyanarayana-temple",
    name: "Mississauga Sri Siva Sathyanarayana Swamy Temple",
    tamilName: "மிசிசாகா ஸ்ரீ சிவ சத்யநாராயண சுவாமி கோவில்",
    moolavar: "Lord Shiva & Sri Sathyanarayana Perumal",
    city: "Mississauga",
    province: "ON",
    address: "3058 Hurontario St, Mississauga, ON L5B 1N7",
    phone: "+1 905-272-9600",
    website: "",
    email: "mississaugasivatemple@gmail.com",
    description:
      "A landmark temple uniting Shaivite and Vaishnavite devotional traditions in the heart of Mississauga on Hurontario Street. Celebrates monthly Pournami Sathyanarayana Pooja and Maha Shivaratri.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை சாந்தி", time: "9:00 AM", description: "Morning prayers" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Monthly Pournami Vratha Pooja", tamilName: "பௌர்ணமி சத்யநாராயண பூஜை", month: "Monthly", description: "Grand community vratam and Katha." },
      { name: "Maha Shivaratri", tamilName: "சிவராத்திரி", month: "Feb / Mar", description: "All-night 4-kala worship." },
    ],
    priestServices: ["Sathyanarayana Pooja", "Rudra Homam", "Kalyanam", "Grihapravesham"],
    facilities: ["Community Hall", "Parking"],
    nearbyDiningSlugs: ["athisty-s-supermarket-halal-meat"],
    featured: false,
  },
  {
    id: "tmpl-012",
    slug: "ottawa-sri-murugan-temple",
    name: "Ottawa Sri Murugan Kovil (Ottawa Hindu Society)",
    tamilName: "ஒட்டாவா ஸ்ரீ முருகன் கோவில்",
    moolavar: "Lord Murugan & Sri Ganesha",
    city: "Ottawa",
    province: "ON",
    address: "4865 Bank St, Gloucester, Ottawa, ON K1X 1G6",
    phone: "+1 613-822-1531",
    website: "",
    email: "ottawamurugan@gmail.com",
    description:
      "The premier spiritual haven for Tamil families in Canada's National Capital Region (Ottawa-Gatineau). Shrines for Murugan, Ganesha, Shiva, Parvathi, and Venkateshwara.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:00 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை பூஜை", time: "9:30 AM", description: "Morning darshan" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:15 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Ottawa Thaipusam & Kavadi", tamilName: "ஒட்டாவா தைப்பூசம்", month: "Jan / Feb", description: "Paal Kudam and Kavadi procession." },
      { name: "Skanda Sashti", tamilName: "கந்த சஷ்டி", month: "Oct / Nov", description: "6-day fasting and celebration." },
    ],
    priestServices: ["Murugan Abhishekam", "House Blessing", "Weddings"],
    facilities: ["Cultural Hall", "Park Grounds", "Parking"],
    nearbyDiningSlugs: ["tamarind-tiffin-ottawa", "taara-pan-indian-resto-bar"],
    featured: true,
  },
  {
    id: "tmpl-013",
    slug: "hamilton-hindu-samaj-temple",
    name: "Hamilton Hindu Samajam Temple",
    tamilName: "ஹாமில்டன் இந்து ஆலயம்",
    moolavar: "Lord Murugan, Ganesha & Shiva",
    city: "Hamilton",
    province: "ON",
    address: "440 Cloverdale Ave, Hamilton, ON L8K 4S7",
    phone: "+1 905-594-1188",
    website: "",
    email: "hamiltonhindusamaj@gmail.com",
    description:
      "Serving Tamil and South Asian families across Hamilton, Burlington, and Niagara Region with regular poojas and festival celebrations.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
    },
    poojaTimings: [
      { name: "Morning Pooja", tamilName: "காலை பூஜை", time: "9:30 AM", description: "Morning prayers" },
      { name: "Evening Deeparadhana", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
    ],
    festivals: [
      { name: "Thaipusam & Panguni Uthiram", tamilName: "தைப்பூசம் & பங்குனி உத்திரம்", month: "Jan - Apr", description: "Grand festivals and community lunch." },
    ],
    priestServices: ["Archana", "Abhishekam", "Grihapravesham"],
    facilities: ["Community Hall", "Parking"],
    nearbyDiningSlugs: ["my-roti-place-my-dosa-place-hamilton", "parikar-indian-and-nepali-cuisine-previously-known-as-the-bombay-grill"],
    featured: false,
  },

  // --- QUEBEC ---
  {
    id: "tmpl-014",
    slug: "sri-durkai-amman-temple-montreal",
    name: "Sri Durkai Amman Temple Montreal",
    tamilName: "மொண்ட்ரியால் ஸ்ரீ துர்க்கை அம்மன் கோவில்",
    moolavar: "Sri Durkai Amman (Goddess Durga)",
    city: "Montreal",
    province: "QC",
    address: "2465 Rue Bélanger, Montréal, QC H2G 1E4",
    phone: "+1 514-722-7779",
    website: "",
    email: "durkaiammanmontreal@gmail.com",
    whatsapp: "+15147227779",
    description:
      "The spiritual pillar of Quebec’s Tamil community since the 1990s. Its annual Chariot Festival (Ther Thiruvizha) draws over 10,000 devotees onto the streets of Montreal with colorful Kavadi, floral floats, and community feasts.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:30 PM",
      weekdayEvening: "5:00 PM – 9:30 PM",
      weekendHours: "8:00 AM – 9:30 PM (All Day)",
      specialDays: "Tuesdays & Fridays special Rahu Kala pooja until 10:00 PM",
    },
    poojaTimings: [
      { name: "Kala Santhi", tamilName: "காலை சாந்தி பூஜை", time: "8:30 AM", description: "Morning mother goddess alankaram" },
      { name: "Uchi Kalam", tamilName: "உச்சிகாலம்", time: "12:00 PM", description: "Noon pooja" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை தீபாராதனை", time: "6:30 PM", description: "Evening grand aarthi" },
      { name: "Arthajamam", tamilName: "அர்த்தஜாமம்", time: "8:45 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Montreal Grand Chariot Festival (Ther)", tamilName: "மொண்ட்ரியால் பிரம்மாண்ட தேர்த் திருவிழா", month: "July (Aadi)", description: "Quebec's largest South Asian religious festival drawing devotees from across Canada and the US." },
      { name: "Navarathri (9 Sacred Nights)", tamilName: "நவராத்திரி விழா", month: "October (Purattasi)", description: "Nine days of distinct Amman alankarams and Vijayadashami." },
      { name: "Aadi Pooram & Valaikappu", tamilName: "ஆடிப் பூரம் வளைகாப்பு", month: "July / August", description: "Bangles offering and special goddess procession." },
    ],
    priestServices: ["Chandi Homam", "Durga Abhishekam", "Rahu Kala Lamp Pooja", "Wedding Blessings"],
    facilities: ["Annadhanam Hall", "Language Classrooms", "Metro Nearby (Fabre)"],
    nearbyDiningSlugs: ["nanthus-bakery-montreal", "colombo-curry-house-montreal", "march-murugan"],
    featured: true,
  },
  {
    id: "tmpl-015",
    slug: "sri-thiru-murugan-temple-montreal",
    name: "Sri Thiru Murugan Temple Montreal (DDO)",
    tamilName: "மொண்ட்ரியால் ஸ்ரீ திருமுருகன் கோவில்",
    moolavar: "Lord Murugan with Valli & Devasena",
    city: "Montreal",
    province: "QC",
    address: "1611 Boulevard Saint-Régis, Dollard-des-Ormeaux, QC H9B 3H7",
    phone: "+1 514-683-8044",
    website: "",
    email: "thirumuruganmontreal@gmail.com",
    description:
      "A beautiful temple in Montreal's West Island (DDO) offering traditional Murugan worship, Skanda Sashti, Thaipusam, and Vedic poojas.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை சாந்தி", time: "8:30 AM", description: "Morning darshan" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:30 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Skanda Sashti & Thaipusam", tamilName: "கந்த சஷ்டி & தைப்பூசம்", month: "Oct - Feb", description: "Grand celebrations with Kavadi and Annadhanam." },
    ],
    priestServices: ["Murugan Abhishekam", "Kavadi Pooja", "Vivaham", "Grihapravesham"],
    facilities: ["Banquet Hall", "Parking"],
    nearbyDiningSlugs: ["nanthus-bakery-montreal", "colombo-curry-house-montreal"],
    featured: false,
  },

  // --- BRITISH COLUMBIA ---
  {
    id: "tmpl-016",
    slug: "bc-murugan-temple-vancouver",
    name: "B.C. Murugan Temple (Sri Murugan Society)",
    tamilName: "பிரிட்டிஷ் கொலம்பியா ஸ்ரீ முருகன் கோவில்",
    moolavar: "Lord Balamurugan / Shanmukhar",
    city: "Surrey",
    province: "BC",
    address: "3134 140 St, Surrey, BC V4P 2B3",
    phone: "+1 604-536-7494",
    website: "https://bcmurugantemple.com/",
    email: "info@bcmurugantemple.com",
    whatsapp: "+16045367494",
    description:
      "The focal temple for British Columbia’s Tamil diaspora, nestled in Surrey near South Surrey/White Rock. Known for its serene setting, authentic agamic poojas, Thaipusam Kavadi, and annual chariot celebration.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "8:30 AM – 8:30 PM",
      specialDays: "Karthigai & Sashti days open until 9:30 PM",
    },
    poojaTimings: [
      { name: "Kala Santhi", tamilName: "காலை பூஜை", time: "9:00 AM", description: "Morning darshan and Paal Abhishekam" },
      { name: "Uchi Kalam", tamilName: "உச்சிகால தீபாராதனை", time: "12:00 PM", description: "Midday naivedyam" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை பூஜை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajamam", tamilName: "அர்த்தஜாம பூஜை", time: "8:15 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "B.C. Thaipusam Festival", tamilName: "தைப்பூச திருவிழா", month: "January / February", description: "Fraser Valley's primary Thaipusam celebration with Kavadi, Milk Pots, and Thevaram chanting." },
      { name: "Skanda Sashti & Soorasamharam", tamilName: "கந்த சஷ்டி விழா", month: "October / November", description: "6-day observance with Soorasamharam battle and Thirukalyanam." },
      { name: "Annual Ratha Yatra / Ther", tamilName: "ரதோற்சவம்", month: "July / August", description: "Chariot procession through the temple grounds with prasadam feast." },
    ],
    priestServices: ["Subramanya Trishathi Archana", "Ganapathy & Navagraha Homam", "Vivaham", "House Blessing"],
    facilities: ["Annadhanam Community Hall", "Surrey Green Landscape Courtyard", "Spacious Parking"],
    nearbyDiningSlugs: ["lanka-palace-surrey", "thurga-foods-vancouver", "nukkad-indian-street-eats-pure-vegetarian-food-truck-richmond-vancouver"],
    featured: true,
  },
  {
    id: "tmpl-017",
    slug: "vancouver-sri-ganesh-temple",
    name: "Vancouver Sri Ganesh Temple",
    tamilName: "வான்கூவர் ஸ்ரீ கணேஷ் ஆலயம்",
    moolavar: "Sri Maha Ganapathy",
    city: "Vancouver",
    province: "BC",
    address: "2092 Kingsway, Vancouver, BC V5N 2T3",
    phone: "+1 604-874-9214",
    website: "",
    email: "",
    description:
      "A welcoming Hindu shrine on Kingsway in Vancouver serving Tamil, Fijian, and broader South Asian devotees with regular Vinayagar and Murugan poojas.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 8:30 PM",
      weekendHours: "8:00 AM – 8:30 PM",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலை பூஜை", time: "8:30 AM", description: "Morning darshan" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
    ],
    festivals: [
      { name: "Vinayagar Chaturthi", tamilName: "விநாயகர் சதுர்த்தி", month: "Aug / Sep", description: "10-day Ganesha festival." },
    ],
    priestServices: ["Ganapathy Homam", "Archana", "New Car Blessing"],
    facilities: ["Prasadam Hall", "Street Parking"],
    nearbyDiningSlugs: ["thurga-foods-vancouver"],
    featured: false,
  },

  // --- ALBERTA ---
  {
    id: "tmpl-018",
    slug: "calgary-murugan-temple",
    name: "Sri Murugan Society of Alberta (Calgary)",
    tamilName: "கல்கரி ஸ்ரீ முருகன் கோவில்",
    moolavar: "Lord Murugan (Sri Shanmukanathar)",
    city: "Calgary",
    province: "AB",
    address: "4203 17 Ave SE, Calgary, AB T2A 0T2",
    phone: "+1 403-248-2838",
    website: "https://calgarymurugantemple.ca/",
    email: "info@calgarymurugantemple.ca",
    whatsapp: "+14032482838",
    description:
      "The spiritual beacon of Alberta’s Tamil community, uniting Tamil families across Calgary, Red Deer, Lethbridge, and the Prairies. Celebrates deep devotional traditions with grand annual festivals and cultural school.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "8:00 AM – 8:30 PM",
      specialDays: "Holidays and festival days open all day",
    },
    poojaTimings: [
      { name: "Kala Santhi", tamilName: "காலை சாந்தி", time: "9:00 AM", description: "Morning abhishekam & archana" },
      { name: "Uchikala Pooja", tamilName: "உச்சிகால தீபாராதனை", time: "12:00 PM", description: "Noon offering" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Arthajamam", tamilName: "அர்த்தஜாமம்", time: "8:15 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Calgary Annual Ther Thiruvizha", tamilName: "கல்கரி தேர்த் திருவிழா", month: "July / August", description: "Prairie Tamil community chariot festival with cultural procession and free Annadhanam." },
      { name: "Skanda Sashti", tamilName: "கந்த சஷ்டி சூரசம்ஹாரம்", month: "October / November", description: "6-day fasting and victory celebration of Lord Murugan." },
    ],
    priestServices: ["Murugan Abhishekam", "Grihapravesham", "Weddings", "Sathyanarayana Vratham"],
    facilities: ["Alberta Tamil Cultural & Language School", "Prasadam Dining Hall", "Free Parking"],
    nearbyDiningSlugs: ["ceylon-flavours-calgary", "kerala-palace-restaurant"],
    featured: true,
  },
  {
    id: "tmpl-019",
    slug: "edmonton-maha-ganapathy-temple",
    name: "Maha Ganapathy Temple of Edmonton",
    tamilName: "எட்மண்டன் மகா கணபதி ஆலயம்",
    moolavar: "Sri Maha Ganapathy",
    city: "Edmonton",
    province: "AB",
    address: "12838 52 St NW, Edmonton, AB T5A 3P8",
    phone: "+1 780-478-2244",
    website: "https://mahaganapathy.com/",
    email: "info@mahaganapathy.com",
    whatsapp: "+17804782244",
    description:
      "A landmark Northern Alberta Hindu temple built with traditional granite sanctums. Serves Tamil and broader Hindu families across Edmonton, Fort McMurray, and Northern Alberta with traditional Vedic and Agamic worship.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:00 PM",
      weekdayEvening: "6:00 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
      specialDays: "Chaturthi and major holidays open all day",
    },
    poojaTimings: [
      { name: "Morning Pooja", tamilName: "காலை பூஜை", time: "9:30 AM", description: "Morning prayers and archana" },
      { name: "Madhyana Pooja", tamilName: "மதிய பூஜை", time: "12:00 PM", description: "Midday naivedyam" },
      { name: "Evening Deeparadhana", tamilName: "சாயரட்சை தீபாராதனை", time: "6:30 PM", description: "Evening aarthi" },
      { name: "Night Seva", tamilName: "அர்த்தஜாம பூஜை", time: "8:15 PM", description: "Night closing" },
    ],
    festivals: [
      { name: "Vinayagar Chaturthi Grand Brahmotsavam", tamilName: "விநாயகர் சதுர்த்தி பிரம்மோற்சவம்", month: "August / September", description: "10-day festival with Ratham procession, Ganapathy Homam, and community banquet." },
      { name: "Maha Shivaratri", tamilName: "சிவராத்திரி நான்கு கால பூஜை", month: "February / March", description: "Four-jaama Linga abhishekam throughout the holy night." },
    ],
    priestServices: ["Ganapathy Homam", "Kalyana Utsavam", "New Vehicle Puja", "Navagraha Shanti"],
    facilities: ["Edmonton Community Banquet Hall", "Youth Classrooms", "Ample Parking"],
    nearbyDiningSlugs: ["jaffna-tiffins-edmonton"],
    featured: true,
  },

  // --- MANITOBA & SASKATCHEWAN ---
  {
    id: "tmpl-020",
    slug: "winnipeg-hindu-temple",
    name: "Winnipeg Hindu Temple & Tamil Association",
    tamilName: "வின்னிபெக் இந்து ஆலயம்",
    moolavar: "Lord Murugan, Ganesha & Shiva",
    city: "Winnipeg",
    province: "MB",
    address: "999 St Anne's Rd, Winnipeg, MB R2N 4G5",
    phone: "+1 204-255-0810",
    website: "https://manitobatamils.com/",
    email: "info@winnipegtemple.ca",
    description:
      "Serving the Manitoba Tamil and South Asian community for over 30 years. Hosts grand celebrations of Thaipusam, Pongal, Shivaratri, and Diwali on St. Anne's Road.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
    },
    poojaTimings: [
      { name: "Morning Prayers", tamilName: "காலை பூஜை", time: "9:30 AM", description: "Morning archana" },
      { name: "Evening Deeparadhana", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
    ],
    festivals: [
      { name: "Thaipusam & Pongal", tamilName: "தைப்பூசம் & தைப்பொங்கல்", month: "January", description: "Traditional sweet pongal cooking and Murugan darshan." },
    ],
    priestServices: ["Archana", "Grihapravesham", "Vedic Weddings"],
    facilities: ["Manitoba Tamil Cultural Hall", "Ample Parking"],
    nearbyDiningSlugs: ["spicy-banana-leaf-winnipeg", "manitoba-tamil-cultural-association"],
    featured: true,
  },
  {
    id: "tmpl-021",
    slug: "saskatoon-hindu-temple",
    name: "Saskatoon Hindu Society & Tamil Cultural Center",
    tamilName: "சஸ்கட்டூன் இந்து ஆலயம்",
    moolavar: "Sri Ganesha & Lord Murugan",
    city: "Saskatoon",
    province: "SK",
    address: "107 La Ronge Rd, Saskatoon, SK S7K 5T3",
    phone: "+1 306-653-5240",
    website: "",
    email: "saskatoontamils@gmail.com",
    description:
      "A serene spiritual home for Saskatchewan Tamil families, University of Saskatchewan scholars, and healthcare professionals in Saskatoon.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:00 PM",
      weekdayEvening: "6:00 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
    },
    poojaTimings: [
      { name: "Morning Prayers", tamilName: "காலை பூஜை", time: "9:30 AM", description: "Morning prayers" },
      { name: "Evening Deeparadhana", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
    ],
    festivals: [
      { name: "Deepavali & Pongal", tamilName: "தீபாவளி & பொங்கல்", month: "Oct / Jan", description: "Community celebrations." },
    ],
    priestServices: ["Archana", "Housewarming Blessings"],
    facilities: ["Community Hall", "Parking"],
    nearbyDiningSlugs: [],
    featured: false,
  },

  // --- ATLANTIC CANADA ---
  {
    id: "tmpl-022",
    slug: "halifax-tamil-hindu-temple",
    name: "Halifax Hindu Temple & Tamil Cultural Society",
    tamilName: "நோவா ஸ்கோஷியா இந்து ஆலயம் (ஹாலிஃபாக்ஸ்)",
    moolavar: "Sri Ganesha & Lord Murugan",
    city: "Halifax",
    province: "NS",
    address: "442 Parkland Dr, Halifax, NS B3S 1N9",
    phone: "+1 902-443-4215",
    website: "",
    email: "halifaxtamils@gmail.com",
    description:
      "The premier spiritual and community gathering center for Tamils and Hindus in Nova Scotia, Dalhousie & Saint Mary’s university scholars, and healthcare professionals in Atlantic Canada.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:00 PM",
      weekdayEvening: "6:00 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
    },
    poojaTimings: [
      { name: "Morning Prayers", tamilName: "காலை பூஜை", time: "9:30 AM", description: "Morning darshan" },
      { name: "Evening Deeparadhana", tamilName: "சாயரட்சை", time: "6:30 PM", description: "Evening aarthi" },
    ],
    festivals: [
      { name: "Thaipusam & Tamil New Year", tamilName: "தைப்பூசம் & சித்திரை புத்தாண்டு", month: "Jan / Apr", description: "Atlantic Canada Tamil gathering." },
    ],
    priestServices: ["Archana & Family Blessings", "Grihapravesham & Vehicle Blessings"],
    facilities: ["Maritime Cultural Hall", "Free Parking"],
    nearbyDiningSlugs: ["halifax-tamil-cultural-society"],
    featured: true,
  },
];

export function getAllTemples(): Temple[] {
  return TEMPLES;
}

export function getTempleBySlug(slug: string): Temple | null {
  return TEMPLES.find((t) => t.slug === slug) ?? null;
}

export function getTemplesByCity(city: string): Temple[] {
  const norm = city.trim().toLowerCase();
  return TEMPLES.filter((t) => t.city.toLowerCase() === norm);
}

export function countTemplesByCity(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const t of TEMPLES) {
    const key = t.city.toLowerCase();
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

export function searchTemples(q: string): Temple[] {
  const query = q.trim().toLowerCase();
  if (!query) return getAllTemples();
  return TEMPLES.filter(
    (t) =>
      t.name.toLowerCase().includes(query) ||
      t.tamilName.toLowerCase().includes(query) ||
      t.moolavar.toLowerCase().includes(query) ||
      t.city.toLowerCase().includes(query) ||
      t.province.toLowerCase().includes(query) ||
      t.address.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query),
  );
}
