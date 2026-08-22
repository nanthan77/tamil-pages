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
  // =========================================================================
  // ONTARIO — SCARBOROUGH & GREATER TORONTO AREA
  // =========================================================================
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
      "One of Canada's largest and most historic Tamil Hindu temples, established in 1990 on Markham Road. It serves as the primary spiritual epicenter for over 100,000 Tamil Canadian devotees in the GTA, featuring authentic Dravidian stone architecture and daily Annadhanam.",
    darshanHours: {
      weekdayMorning: "7:00 AM – 1:00 PM",
      weekdayEvening: "4:30 PM – 9:30 PM",
      weekendHours: "7:00 AM – 9:30 PM (Continuous Darshan)",
      specialDays: "Open all day and night during Vinayagar Chaturthi & Maha Shivaratri",
    },
    poojaTimings: [
      { name: "Ushakkala Pooja", tamilName: "உஷற்கால பூசை", time: "7:30 AM", description: "Morning awakening abhishekam and deeparadhana" },
      { name: "Kaala Santhi Pooja", tamilName: "காலசந்தி பூசை", time: "11:30 AM", description: "Midday main abhishekam and naivedyam" },
      { name: "Sayaratchai Pooja", tamilName: "சாயரட்சை பூசை", time: "5:30 PM", description: "Sunset archana, veda parayanam and deeparadhana" },
      { name: "Arthajaama Pooja", tamilName: "அர்த்தஜாம பூசை", time: "8:30 PM", description: "Night palliyarai seva and mangala arathi" },
    ],
    festivals: [
      { name: "Vinayagar Chaturthi Brahmotsavam", tamilName: "விநாயகர் சதுர்த்தி மகோற்சவம்", month: "August / September", description: "10-day annual chariot (Ther) festival with over 25,000 devotees pulling the golden ratham." },
      { name: "Thai Pongal & Kanni Pongal", tamilName: "தைப்பொங்கல் திருநாள்", month: "January 14–15", description: "Traditional diaspora harvest festival with thousands offering fresh sweet Pongal pots." },
      { name: "Panguni Uthiram & Chithirai Varudapirappu", tamilName: "பங்குனி உத்திரம் & சித்திரை புதுவருடம்", month: "March / April", description: "Tamil New Year celebrations with panchangam reading and special homams." },
    ],
    priestServices: ["Ganapathy Homam", "Navagraha Homam", "Ayush Homam", "Vivaham (Hindu Weddings)", "Vahana Pooja (Car Blessing)", "Grihapravesham (House Warming)", "Namakaranam (Baby Naming)"],
    facilities: ["Kalyana Mandapam (Banquet Hall)", "Annadhanam Prasadam Hall", "Thevaram & Carnatic Music Classes", "Vedic Tamil Library", "Free Paved Parking (300+ spots)"],
    nearbyDiningSlugs: ["aathavan-unavakam", "babu-takeout", "canbe-foods"],
    featured: true,
  },
  {
    id: "tmpl-002",
    slug: "nallur-murugan-temple-toronto",
    name: "Toronto Sri Murugan Kovil (Nallur Heritage)",
    tamilName: "ரொறன்ரோ ஸ்ரீ முருகன் கோவில் (நல்லூர் மரபு)",
    moolavar: "Lord Shanmukha Murugan with Valli & Devasena",
    city: "Scarborough",
    province: "ON",
    address: "3825 Sheppard Ave E, Scarborough, ON M1T 3L4",
    phone: "+1 416-291-7891",
    website: "https://www.torontomurugankovil.org/",
    email: "admin@torontomurugankovil.org",
    description:
      "Consecrated following the revered Saiva Agamic traditions of Sri Lanka's historic Jaffna Nallur Kandaswamy Kovil. Famous for its exquisite diamond Vel, silver ratham (Silver Chariot), and sacred Skanda Sashti Sooranporu celebrations.",
    darshanHours: {
      weekdayMorning: "7:00 AM – 1:30 PM",
      weekdayEvening: "4:30 PM – 9:30 PM",
      weekendHours: "7:00 AM – 10:00 PM (Full Day)",
      specialDays: "Continuous 24-hr darshan during Thaipusam, Vaikasi Visakam & Skanda Sashti",
    },
    poojaTimings: [
      { name: "Kaala Santhi", tamilName: "காலசந்தி", time: "8:00 AM", description: "Morning Vel abhishekam with milk and sandalwood" },
      { name: "Uchi Kaalam", tamilName: "உச்சிக்காலம்", time: "11:45 AM", description: "Noon Mahapooja with panchamritham and alankaram" },
      { name: "Sayaratchai", tamilName: "சாயரட்சை", time: "5:30 PM", description: "Evening Thiruppugazh recitation and vel pooja" },
      { name: "Arthajaamam", tamilName: "அர்த்தஜாமம்", time: "8:45 PM", description: "Night arathi and shanti deeparadhana" },
    ],
    festivals: [
      { name: "Annual Mahotsavam & Ther Thiruvizha", tamilName: "வருடாந்த மகோற்சவ தேர்த்திருவிழா", month: "July / August", description: "12-day festival culminating in the magnificent Silver Chariot procession on Sheppard Avenue." },
      { name: "Skanda Sashti & Sooranporu", tamilName: "கந்தசஷ்டி விரதம் & சூரன்போர்", month: "October / November", description: "6-day fasting festival with dramatic re-enactment of Lord Murugan vanquishing Soorapadman." },
      { name: "Thaipusam & Kavadi Attam", tamilName: "தைப்பூசத் திருவிழா & காவடியாட்டம்", month: "January / February", description: "Devotees carry Pal Kavadi and Mayil Kavadi with traditional Thavil and Nadaswaram." },
    ],
    priestServices: ["Subramanya Homam", "Kavadi Pooja", "Vivaham", "Sathabhishekam (60th/80th Birthday)", "Vahana Pooja", "Astrology & Jathagam Consultations"],
    facilities: ["Air-Conditioned Cultural Hall", "Prasadam Canteen", "Spiritual Bookstore", "Devotional Choir Classes", "Extensive Parking"],
    nearbyDiningSlugs: ["hopper-hut", "confused-kitchen", "babu-takeout"],
    featured: true,
  },
  {
    id: "tmpl-003",
    slug: "canada-sri-kanthaswamy-kovil",
    name: "Canada Sri Kanthaswamy Kovil",
    tamilName: "கனடா ஸ்ரீ கந்தசுவாமி கோவில்",
    moolavar: "Sri Kanthaswamy (Lord Murugan)",
    city: "Scarborough",
    province: "ON",
    address: "733 Birchmount Rd, Scarborough, ON M1K 1R5",
    phone: "+1 416-759-4674",
    website: "https://www.kanthaswamy.org/",
    email: "info@kanthaswamy.org",
    description:
      "A landmark Tamil Saivite sanctuary located on Birchmount Road in Scarborough. Known for its deeply resonant Thavil-Nadaswaram traditions, strict Saiva Siddhantha rituals, and vibrant monthly Krithigai and Shasthi poojas.",
    darshanHours: {
      weekdayMorning: "7:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "7:00 AM – 9:30 PM",
      specialDays: "Extended darshan on Krithigai, Sashti, and Tuesday evenings",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:00 AM", description: "Sahasranama archana and panchamrutha abhishekam" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Maha Naivedyam and Deeparadhana" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Murugan Vel Alankara Deeparadhana" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Shanti pooja and Thiruppalliyezhuchi" },
    ],
    festivals: [
      { name: "Panguni Uthiram Ther", tamilName: "பங்குனி உத்திரத் திருவிழா", month: "March / April", description: "Grand divine wedding (Thirukalyanam) of Lord Murugan with Valli Ammai and Devasena." },
      { name: "Kanda Shasthi Utsavam", tamilName: "கந்த சஷ்டி பெருவிழா", month: "November", description: "Solemn 6-day fasting with daily Vel Abhishekam and Soorasamharam." },
      { name: "Vaikasi Visakam", tamilName: "வைகாசி விசாகம்", month: "May / June", description: "Celebration of the birth of Lord Murugan with 108 Sangabishekam." },
    ],
    priestServices: ["Shatru Samhara Trishati Trishati Homam", "Kalyana Utsavam", "House Warming", "Vehicle Blessing", "Satyanarayan Vratam"],
    facilities: ["Annadhanam Dining Hall", "Cultural Stage", "Spiritual Library", "Wheelchair Accessible", "On-site Parking"],
    nearbyDiningSlugs: ["kottu-king", "b-t-food", "aathavan-unavakam"],
    featured: true,
  },
  {
    id: "tmpl-004",
    slug: "sri-ayyappa-samajam-ontario",
    name: "Sri Ayyappa Samajam of Ontario",
    tamilName: "ஸ்ரீ ஐயப்ப சமாஜம் ஒன்ராறியோ",
    moolavar: "Lord Dharma Sastha (Ayyappan) with 18 Holy Steps",
    city: "Scarborough",
    province: "ON",
    address: "635 Middlefield Rd, Scarborough, ON M1V 5B8",
    phone: "+1 416-321-6101",
    website: "https://www.ayyappasamajam.net/",
    email: "contact@ayyappasamajam.net",
    description:
      "The premier temple dedicated to Lord Ayyappan in Canada, modeled closely after the sacred Sabarimala temple. Features consecrated 18 Holy Steps (Pathinettam Padi), celebrated for the annual Mandala Pooja and Makara Vilakku festivals.",
    darshanHours: {
      weekdayMorning: "7:30 AM – 12:30 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "7:30 AM – 9:30 PM",
      specialDays: "Open 6:00 AM – 10:00 PM daily during the 41-day Mandala Season (Nov–Jan)",
    },
    poojaTimings: [
      { name: "Nirmalyam & Abhishekam", time: "8:00 AM", description: "Neyyabhishekam (Ghee abhishekam) & Ganapathy Homam" },
      { name: "Ucha Pooja", time: "11:30 AM", description: "Midday Annabhishekam and naivedyam" },
      { name: "Deeparadhana", time: "6:30 PM", description: "Evening lighting of 18 sacred steps and Sastha stotram" },
      { name: "Athazha Pooja & Harivarasanam", time: "8:45 PM", description: "Closing lullaby song Harivarasanam recitation" },
    ],
    festivals: [
      { name: "Mandala Pooja & Irumudi Kettu", tamilName: "மண்டல பூஜை & இருமுடிக்கட்டு", month: "November – December", description: "Devotees observe 41 days of Vratham and ascend the 18 steps with Irumudi." },
      { name: "Makara Vilakku & Jyothi Darshanam", tamilName: "மகர விளக்கு & ஜோதி தரிசனம்", month: "January 14–15", description: "Grand celebration mirroring the celestial Jyothi at Ponnambalamedu." },
      { name: "Panguni Uthiram Ayyappan Jayanthi", tamilName: "பங்குனி உத்திரம் ஐயப்பன் ஜெயந்தி", month: "March / April", description: "Celebration of the incarnation of Lord Sastha with Sahasranama archana." },
    ],
    priestServices: ["Neyyabhishekam", "Ganapathi Homam", "Bhagavathi Seva", "Sudarshana Homam", "Vahana Pooja", "Navagraha Shanti"],
    facilities: ["Traditional 18 Sacred Steps (Pathinettam Padi)", "Annadhanam Hall", "Ayyappa Bhajana Hall", "Spacious Parking"],
    nearbyDiningSlugs: ["canbe-foods", "aathavan-unavakam", "hopper-hut"],
    featured: true,
  },
  {
    id: "tmpl-005",
    slug: "sri-meenakshi-amman-temple-toronto",
    name: "Sri Meenakshi Amman Temple Toronto",
    tamilName: "ஸ்ரீ மீனாட்சி அம்மன் ஆலயம் ரொறன்ரோ",
    moolavar: "Goddess Meenakshi & Lord Sundareswarar",
    city: "Scarborough",
    province: "ON",
    address: "170 Nugget Ave, Scarborough, ON M1S 3A7",
    phone: "+1 416-291-7272",
    website: "https://www.meenakshitemple.ca/",
    email: "info@meenakshitemple.ca",
    description:
      "Dedicated to Sri Madurai Meenakshi Amman and Lord Sundareswarar. Known for its serene sanctum, golden kireetam alankaram, Chithirai Thirukalyanam festival, and dedicated Friday Vilakku poojas for women.",
    darshanHours: {
      weekdayMorning: "7:30 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "7:30 AM – 9:30 PM",
      specialDays: "All-day darshan on Navarathri (all 9 nights), Aadi Pooram, and Chithirai Thirukalyanam",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "8:30 AM", description: "Suprabhatam, abhishekam to Sri Meenakshi with holy waters" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Noon pooja with Sri Lalitha Sahasranama Parayanam" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening deeparadhana with Kumkumarchana" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night shanti pooja and mangala arathi" },
    ],
    festivals: [
      { name: "Chithirai Thirukalyanam Mahotsavam", tamilName: "சித்திரை திருக்கல்யாண மகோற்சவம்", month: "April / May", description: "Grand 10-day divine celestial wedding of Goddess Meenakshi with Lord Sundareswarar." },
      { name: "Saradha Navarathri Utsavam", tamilName: "சாரதா நவராத்திரி உற்சவம்", month: "September / October", description: "9 days of special Alankarams (Durga, Lakshmi, Saraswathi) and daily cultural concerts." },
      { name: "Aadi Pooram & Valaikappu", tamilName: "ஆடிப்பூரம் வளைகாப்பு", month: "July / August", description: "Sacred bangle-offering festival to Goddess Meenakshi." },
    ],
    priestServices: ["Chandi Homam", "Lalitha Sahasranama Archana", "Vivaham", "Seemantham", "Grihapravesham", "Kumkumarchana"],
    facilities: ["Kalyana Mandapam", "Cultural Hall", "Prasadam Counter", "Accessible Entrance", "Free Parking"],
    nearbyDiningSlugs: ["babu-takeout", "aathavan-unavakam", "kottu-king"],
    featured: true,
  },
  {
    id: "tmpl-006",
    slug: "sri-nagapooshani-amman-temple",
    name: "Sri Nagapooshani Amman Temple (Nainativu Heritage)",
    tamilName: "ஸ்ரீ நாகபூஷணி அம்மன் ஆலயம் (நயினாதீவு மரபு)",
    moolavar: "Bhuvaneswari Sri Nagapooshani Amman",
    city: "Scarborough",
    province: "ON",
    address: "5637 Finch Ave E, Scarborough, ON M1B 2T9",
    phone: "+1 416-298-9071",
    website: "https://www.nainativuamman.ca/",
    email: "info@nainativuamman.ca",
    description:
      "Consecrated in the holy tradition of Sri Lanka's historic Nainativu Nagapooshani Amman Kovil. Devotees revere Mother Nagapooshani for blessings of child-bearing, health, protection, and prosperity.",
    darshanHours: {
      weekdayMorning: "7:00 AM – 1:00 PM",
      weekdayEvening: "4:30 PM – 9:00 PM",
      weekendHours: "7:00 AM – 9:30 PM",
      specialDays: "Extended darshan during Aani Ther Thiruvizha and Aadi Velli",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:00 AM", description: "Milk abhishekam and Sri Suktha parayanam" },
      { name: "Noon Pooja", time: "11:30 AM", description: "Maha deeparadhana and naivedyam" },
      { name: "Sayaratchai", time: "5:30 PM", description: "Evening Alankara Pooja and Thevaram chanting" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night arathi and shanti deeparadhana" },
    ],
    festivals: [
      { name: "Aani Mahotsavam & Ther Thiruvizha", tamilName: "ஆனி பெருந்திருவிழா & தேர்த்திருவிழா", month: "June / July", description: "10-day grand festival with the historic serpent-crown chariot (Naga Ratham) procession." },
      { name: "Aadi Velli & Aadi Sevvai", tamilName: "ஆடி வெள்ளி & ஆடிச் செவ்வாய்", month: "July / August", description: "Special milk pot (Paal Kudam) offerings and turmeric abhishekam by thousands of devotees." },
    ],
    priestServices: ["Naga Dosha Nivarana Homam", "Santhanagopala Homam", "Kalyana Utsavam", "Vahana Pooja", "Navagraha Pooja"],
    facilities: ["Spacious Pooja Hall", "Prasadam Dining Facility", "Traditional Naga Peedam", "Large Parking Lot"],
    nearbyDiningSlugs: ["canbe-foods", "aathavan-unavakam", "hopper-hut"],
    featured: true,
  },
  {
    id: "tmpl-007",
    slug: "sri-raja-rajeswari-amman-temple",
    name: "Sri Raja Rajeswari Amman Temple Toronto",
    tamilName: "ஸ்ரீ ராஜராஜேஸ்வரி அம்மன் ஆலயம்",
    moolavar: "Sri Lalitha Maha Tripurasundari (Raja Rajeswari)",
    city: "Scarborough",
    province: "ON",
    address: "2670 Midland Ave, Scarborough, ON M1S 3V6",
    phone: "+1 416-291-7253",
    website: "https://www.rajarajeswari.ca/",
    email: "contact@rajarajeswari.ca",
    description:
      "A revered Shakta temple dedicated to Sri Raja Rajeswari Amman on Midland Avenue. Renowned for its authentic Sri Chakra poojas, Navarathri Mahotsavam, Chandi Homams, and vibrant community youth programs.",
    darshanHours: {
      weekdayMorning: "7:30 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "7:30 AM – 9:30 PM",
      specialDays: "Continuous darshan during Pournami (Full Moon) and Navarathri",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "8:00 AM", description: "Sri Chakra Navavarana Pooja and morning abhishekam" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Maha Naivedyam and Sahasranama Archana" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Deeparadhana and Kumkumarchana" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Arathi and Shanti seva" },
    ],
    festivals: [
      { name: "Sri Chakra Navavarana Pooja & Pournami", tamilName: "பௌர்ணமி ஸ்ரீசக்ர நவாபரண பூஜை", month: "Monthly on Full Moon", description: "Elaborate 3-hour tantric and vedic Sri Chakra worship with 108 Suvasini pooja." },
      { name: "Navarathri & Vijayadasami", tamilName: "நவராத்திரி விஜயதசமி திருவிழா", month: "September / October", description: "Grand Vidyarambham for children starting music, dance, and Tamil studies." },
    ],
    priestServices: ["Sri Chakra Pooja", "Chandi Homam", "Sudarshana Homam", "Vivaham", "Grihapravesham", "Vedic Astrological Consultations"],
    facilities: ["Mandapam", "Prasadam Hall", "Tamil Language & Carnatic Classes", "Free Parking"],
    nearbyDiningSlugs: ["babu-takeout", "aathavan-unavakam", "confused-kitchen"],
    featured: true,
  },
  {
    id: "tmpl-008",
    slug: "toronto-sri-venkata-krishna-temple",
    name: "Toronto Sri Venkata Krishna Temple",
    tamilName: "ரொறன்ரோ ஸ்ரீ வேங்கட கிருஷ்ணா கோவில் (பெருமாள் கோவில்)",
    moolavar: "Lord Venkateshwara (Balaji) & Lord Krishna",
    city: "North York",
    province: "ON",
    address: "481 McNicoll Ave, North York, ON M2H 2C9",
    phone: "+1 416-499-2999",
    website: "https://www.torontosrivenkatakrishna.org/",
    email: "info@torontosrivenkatakrishna.org",
    description:
      "The premier Vaishnavite shrine in Greater Toronto, established under the spiritual guidance of Udupi Sri Pejavara Adhokshaja Matha. Revered for Tirupati Balaji Suprabhatam, Kalyanotsavam, and authentic Satyanarayana Poojas.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:30 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:00 PM (Full Day)",
      specialDays: "Continuous darshan on Vaikunta Ekadasi and Krishna Janmashtami",
    },
    poojaTimings: [
      { name: "Suprabhatam & Thiruvaradhana", time: "8:00 AM", description: "Venkateshwara Suprabhatam and morning abhishekam" },
      { name: "Madhyahna Pooja", time: "12:00 PM", description: "Midday naivedyam and mangala arathi" },
      { name: "Sayaraksha Pooja", time: "6:30 PM", description: "Vishnu Sahasranama and Deeparadhana" },
      { name: "Ekantha Seva", time: "8:30 PM", description: "Night closing arathi and prasadam" },
    ],
    festivals: [
      { name: "Vaikunta Ekadasi & Paramapada Vaasal", tamilName: "வைகுண்ட ஏகாதசி சொர்க்கவாசல்", month: "December / January", description: "Over 15,000 devotees pass through the sacred Golden Doorway (Paramapada Vaasal)." },
      { name: "Sri Krishna Janmashtami & Uriyadi", tamilName: "ஸ்ரீ கிருஷ்ண ஜெயந்தி & உரியடி உற்சவம்", month: "August / September", description: "Celebration with midnight birth pooja, 108 sweet offerings, and community uriyadi." },
      { name: "Srinivasa Kalyana Utsavam", tamilName: "ஸ்ரீனிவாச திருக்கல்யாண உற்சவம்", month: "Monthly on Shravanam", description: "Divine wedding ceremony of Lord Balaji with Sridevi and Bhoodevi." },
    ],
    priestServices: ["Srinivasa Kalyanam", "Satyanarayana Vratam", "Sudarshana Homam", "Thirumanjanam", "Grihapravesham", "Namakaranam"],
    facilities: ["Kalyana Mandapam", "Satvik Pure Vegetarian Kitchen & Dining", "Spiritual Library", "Wheelchair Ramp", "150+ Parking Spots"],
    nearbyDiningSlugs: ["aathavan-unavakam", "babu-takeout"],
    featured: true,
  },
  {
    id: "tmpl-009",
    slug: "sri-mariamman-temple-toronto",
    name: "Sri Mariamman Kovil Toronto",
    tamilName: "ஸ்ரீ மாரியம்மன் கோவில் ரொறன்ரோ",
    moolavar: "Mother Sri Maha Mariamman",
    city: "Scarborough",
    province: "ON",
    address: "110 Finchdene Sq, Scarborough, ON M1X 1B1",
    phone: "+1 416-293-6274",
    website: "https://www.srimariamman.ca/",
    email: "info@srimariamman.ca",
    description:
      "A deeply revered Amman temple situated on Finchdene Square in Scarborough. Devotees visit for healing, protection, and auspicious family blessings, especially during Aadi Month and Navarathri.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Continuous festival darshan during Aadi Velli and Aadi Amavasai",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:30 AM", description: "Manjal (Turmeric) and milk abhishekam" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Noon deeparadhana and Koozh offering" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening archana and Thevaram chant" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night shanti pooja and arathi" },
    ],
    festivals: [
      { name: "Aadi Thiruvizha & Koozh Vaarthal", tamilName: "ஆடித் திருவிழா & கூழ் வார்த்தல்", month: "July / August", description: "4-week festival with thousands participating in sacred Koozh distribution and Paal Kudam." },
      { name: "Navarathri Brahmotsavam", tamilName: "நவராத்திரி மகோற்சவம்", month: "October", description: "Daily special avatar alankarams and Suvasini poojas." },
    ],
    priestServices: ["Mariamman Abhishekam", "Rahu Ketu Homam", "Vilakku Pooja", "Vahana Pooja", "Navagraha Shanti"],
    facilities: ["Pooja Mandapam", "Prasadam Hall", "Parking Space"],
    nearbyDiningSlugs: ["canbe-foods", "aathavan-unavakam"],
    featured: false,
  },
  {
    id: "tmpl-010",
    slug: "sri-mathura-meenakshi-amman-kovil",
    name: "Sri Mathura Meenakshi Amman Kovil",
    tamilName: "ஸ்ரீ மதுரா மீனாட்சி அம்மன் கோவில்",
    moolavar: "Goddess Mathura Meenakshi",
    city: "Scarborough",
    province: "ON",
    address: "3085 Markham Rd, Scarborough, ON M1X 1L6",
    phone: "+1 416-292-6284",
    website: "https://www.mathurameenakshi.ca/",
    email: "contact@mathurameenakshi.ca",
    description:
      "A prominent Shakta sanctuary situated in northern Scarborough. Famed for its traditional Sri Vidya pujas, deep devotional atmosphere, and regular Saivite community gatherings.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Extended on Pournami, Navarathri, and Friday evenings",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "8:30 AM", description: "Abhishekam with 11 holy substances" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Noon deeparadhana and naivedyam" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Lalitha Trishati Parayanam" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night arathi and shanti" },
    ],
    festivals: [
      { name: "Navarathri Mahotsavam", tamilName: "நவராத்திரி மகோற்சவம்", month: "September / October", description: "9 days of vibrant worship with Golu display and youth cultural programs." },
      { name: "Chithirai Thirukalyanam", tamilName: "சித்திரை திருக்கல்யாணம்", month: "April / May", description: "Celebration of divine union with traditional music." },
    ],
    priestServices: ["Chandi Homam", "Vilakku Pooja", "Navavarana Pooja", "House Warming", "Vehicle Blessing"],
    facilities: ["Pooja Hall", "Annadhanam Dining", "Parking Area"],
    nearbyDiningSlugs: ["aathavan-unavakam", "canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-011",
    slug: "canada-thiruchendur-murugan-kovil",
    name: "Canada Thiruchendur Murugan Kovil",
    tamilName: "கனடா திருச்செந்தூர் முருகன் கோவில்",
    moolavar: "Sri Senthilandavar (Thiruchendur Murugan)",
    city: "Scarborough",
    province: "ON",
    address: "385 Passmore Ave, Scarborough, ON M1X 1B6",
    phone: "+1 416-291-0385",
    website: "https://www.thiruchendurcanada.org/",
    email: "info@thiruchendurcanada.org",
    description:
      "Modeled after the sacred seaside Thiruchendur Kshetram in Tamil Nadu. Celebrated for deep Murugan devotion, Soorasamharam, and vibrant monthly Sashti abhishekams.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Extended on Sashti, Krithigai, and Tuesday nights",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "8:30 AM", description: "Vel Abhishekam with milk and rose water" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Maha Naivedyam and Deeparadhana" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Thiruppugazh chanting and Arathi" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Shanti Pooja" },
    ],
    festivals: [
      { name: "Skanda Sashti & Soorasamharam", tamilName: "கந்தசஷ்டி சூரசம்ஹாரம்", month: "October / November", description: "Grand 6-day festival drawing devotees across the GTA." },
      { name: "Thai Poosam & Panguni Uthiram", tamilName: "தைப்பூசம் & பங்குனி உத்திரம்", month: "January & April", description: "Kavadi offerings and special Shanmukha archana." },
    ],
    priestServices: ["Subramanya Homam", "Shatru Samhara Pooja", "Kavadi Pooja", "Vivaham", "Grihapravesham"],
    facilities: ["Spacious Temple Hall", "Prasadam Counter", "Parking"],
    nearbyDiningSlugs: ["canbe-foods", "aathavan-unavakam"],
    featured: false,
  },
  {
    id: "tmpl-012",
    slug: "canada-sri-sanathan-shivan-kovil",
    name: "Canada Sri Sanathan Shivan Kovil (Sivan Temple)",
    tamilName: "கனடா ஸ்ரீ சனாதன சிவன் கோவில்",
    moolavar: "Sri Kailasanathar (Lord Shiva Lingam)",
    city: "Scarborough",
    province: "ON",
    address: "1200 Markham Rd, Scarborough, ON M1H 2Y9",
    phone: "+1 416-438-5182",
    website: "https://www.sivankovil.org/",
    email: "info@sivankovil.org",
    description:
      "A peaceful Saivite temple on Markham Road dedicated to Lord Shiva as Kailasanathar. Revered for all-night Maha Shivaratri abhishekam, Pradosham poojas, and Nataraja Rudrabhishekams.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Continuous 24-hr darshan during Maha Shivaratri and Pradosham evenings",
    },
    poojaTimings: [
      { name: "Rudra Abhishekam", time: "8:30 AM", description: "Sri Rudra Parayanam and Chamakam with holy water" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Maha Deeparadhana and naivedyam" },
      { name: "Pradosha / Sayaratchai", time: "6:00 PM", description: "Pradosham Nandi Abhishekam and evening deepam" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Arathi and Shanti" },
    ],
    festivals: [
      { name: "Maha Shivaratri Mahotsavam", tamilName: "மகா சிவராத்திரி பெருவிழா", month: "February / March", description: "4 Kala all-night Rudrabhishekam with thousands of devotees observing vigil." },
      { name: "Arudra Darshanam", tamilName: "ஆருத்ரா தரிசனம்", month: "December / January", description: "Celebration of Lord Nataraja with traditional Kali and Thiruvadhirai kootu." },
    ],
    priestServices: ["Rudra Homam", "Maha Mrityunjaya Homam", "Pradosha Pooja", "Navagraha Shanti", "Grihapravesham"],
    facilities: ["Spiritual Sanctum", "Prasadam Hall", "Parking Space"],
    nearbyDiningSlugs: ["aathavan-unavakam", "babu-takeout"],
    featured: false,
  },

  // =========================================================================
  // ONTARIO — MARKHAM & YORK REGION
  // =========================================================================
  {
    id: "tmpl-013",
    slug: "richmond-hill-hindu-temple",
    name: "The Hindu Temple Society of Canada (Richmond Hill)",
    tamilName: "இந்து கோவில் சமூகம் கனடா (றிச்மண்ட் ஹில் இந்து ஆலயம்)",
    moolavar: "Sri Ganesha, Lord Shiva & Lord Venkateshwara",
    city: "Richmond Hill",
    province: "ON",
    address: "10865 Bayview Ave, Richmond Hill, ON L4S 1M1",
    phone: "+1 905-883-9109",
    website: "https://www.thehindutemple.ca/",
    email: "info@thehindutemple.ca",
    description:
      "A magnificent traditional Dravidian granite temple situated on Bayview Avenue in Richmond Hill. Features towering Raja Gopurams, exquisitely carved stone sanctums, and hosts major community celebrations.",
    darshanHours: {
      weekdayMorning: "7:30 AM – 1:00 PM",
      weekdayEvening: "4:30 PM – 9:00 PM",
      weekendHours: "7:30 AM – 9:30 PM (Continuous)",
      specialDays: "Open all day on major Hindu festivals and public holidays",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:30 AM", description: "Suprabhatam and Maha Ganapathi Abhishekam" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Noon pooja for all parivara devathas" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Deeparadhana with Veda Parayanam" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night closing arathi" },
    ],
    festivals: [
      { name: "Annual Brahmotsavam & Chariot Festival", tamilName: "வருடாந்த பிரம்மோற்சவ தேர்த்திருவிழா", month: "June / July", description: "Grand 10-day Utsavam with gigantic hand-carved wooden Ther procession." },
      { name: "Maha Shivaratri & Navarathri", tamilName: "மகா சிவராத்திரி & நவராத்திரி", month: "Feb/Mar & Oct", description: "Celebrated with profound devotion, cultural concerts, and classical dance recitals." },
    ],
    priestServices: ["Ganapathy Homam", "Navagraha Homam", "Vivaham", "Upanayanam (Poonool)", "Grihapravesham", "Satyanarayan Vratam"],
    facilities: ["Grand Wedding Auditorium", "Dining Hall (Annadhanam)", "Religious Education Classrooms", "Extensive 400+ Vehicle Parking"],
    nearbyDiningSlugs: ["babu-takeout", "hopper-hut"],
    featured: true,
  },
  {
    id: "tmpl-014",
    slug: "sri-sunderaraja-perumal-temple-markham",
    name: "Sri Sunderaraja Perumal Temple Markham",
    tamilName: "ஸ்ரீ சுந்தரராஜ பெருமாள் கோவில் மார்க்கம்",
    moolavar: "Sri Sunderaraja Perumal (Lord Vishnu) with Sridevi & Bhoodevi",
    city: "Markham",
    province: "ON",
    address: "7050 Woodbine Ave, Markham, ON L3R 4G8",
    phone: "+1 905-470-8889",
    website: "https://www.sunderarajaperumal.org/",
    email: "info@sunderarajaperumal.org",
    description:
      "A renowned Vaishnavite temple on Woodbine Avenue in Markham. Renowned for authentic Divya Desam temple rituals, Vaikunta Ekadasi celebrations, and Saturday special Thirumanjanam offerings.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "All-day darshan on Vaikunta Ekadasi, Janmashtami, and Saturdays",
    },
    poojaTimings: [
      { name: "Suprabhatam", time: "8:00 AM", description: "Morning awakening and Thiruppavai recitation" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Thirumanjanam and Naivedyam" },
      { name: "Sayaraksha", time: "6:30 PM", description: "Evening Vishnu Sahasranama and Deeparadhana" },
      { name: "Sayana Seva", time: "8:30 PM", description: "Night Arathi and Theertha Prasadam" },
    ],
    festivals: [
      { name: "Vaikunta Ekadasi", tamilName: "வைகுண்ட ஏகாதசி", month: "December / January", description: "Opening of the Paramapada Vaasal with thousands of devotees chanting Govinda." },
      { name: "Purattasi Sani Vaaram (Purattasi Saturdays)", tamilName: "புரட்டாசி சனி வார உற்சவம்", month: "September / October", description: "Special Thaligai offerings and continuous Venkateshwara Thirumanjanam." },
    ],
    priestServices: ["Sudarshana Homam", "Srinivasa Kalyanam", "Satyanarayana Pooja", "Grihapravesham", "Namakaranam"],
    facilities: ["Pooja Hall", "Prasadam Canteen", "Parking"],
    nearbyDiningSlugs: ["babu-takeout", "aathavan-unavakam"],
    featured: false,
  },

  // =========================================================================
  // ONTARIO — PEEL REGION (BRAMPTON & MISSISSAUGA)
  // =========================================================================
  {
    id: "tmpl-015",
    slug: "brampton-sri-sivasubramaniya-swamy-kovil",
    name: "Brampton Sri Sivasubramaniya Swamy Kovil",
    tamilName: "பிரம்டன் ஸ்ரீ சிவசுப்பிரமணிய சுவாமி கோவில்",
    moolavar: "Sri Sivasubramaniya Swamy (Lord Murugan)",
    city: "Brampton",
    province: "ON",
    address: "147 Wilkinson Rd, Brampton, ON L6T 4X1",
    phone: "+1 905-455-8889",
    website: "https://www.bramptonmurugan.com/",
    email: "info@bramptonmurugan.com",
    description:
      "A primary spiritual hub for Tamil Canadians in Brampton, Mississauga, and the western GTA. Famous for vibrant Skanda Sashti celebrations, Thaipusam Kavadi, and weekly Tuesday Vel abhishekams.",
    darshanHours: {
      weekdayMorning: "7:30 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "7:30 AM – 9:30 PM",
      specialDays: "Continuous darshan during Skanda Sashti and Thaipusam",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "8:00 AM", description: "Morning Vel Abhishekam and Thevaram chant" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Noon Mahapooja and Naivedyam" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Deeparadhana and Thiruppugazh" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night closing Shanti Arathi" },
    ],
    festivals: [
      { name: "Thaipusam & Kavadi Thiruvizha", tamilName: "தைப்பூசக் காவடித் திருவிழா", month: "January / February", description: "Over 5,000 devotees offer Pal Kudam and Kavadi with traditional drums." },
      { name: "Skanda Sashti & Sooranporu", tamilName: "கந்தசஷ்டி சூரன்போர்", month: "October / November", description: "Annual 6-day fasting festival and grand victory procession." },
    ],
    priestServices: ["Subramanya Homam", "Kavadi Pooja", "Vivaham", "Grihapravesham", "Vehicle Blessing", "Navagraha Shanti"],
    facilities: ["Kalyana Mandapam", "Prasadam Hall", "Paved Parking Lot"],
    nearbyDiningSlugs: ["babu-takeout", "kottu-king"],
    featured: true,
  },
  {
    id: "tmpl-016",
    slug: "brampton-sri-ganesha-durga-temple",
    name: "Brampton Sri Ganesha Durga Hindu Temple",
    tamilName: "பிரம்டன் ஸ்ரீ கணேச துர்கா இந்து ஆலயம்",
    moolavar: "Sri Siddhi Vinayagar & Goddess Durga",
    city: "Brampton",
    province: "ON",
    address: "247 Advance Blvd, Brampton, ON L6T 4H9",
    phone: "+1 905-799-0099",
    website: "https://www.ganeshadurga.org/",
    email: "info@ganeshadurga.org",
    description:
      "A vibrant temple on Advance Blvd in Brampton uniting the worship of Lord Ganesha and Goddess Durga. Devotees visit for Rahu Kala Durga Pooja on Tuesdays and Fridays and grand Vinayagar Chaturthi homams.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Extended on Vinayagar Chaturthi, Navarathri, and Rahu Kalam times",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:30 AM", description: "Ganapathi and Durga Abhishekam" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Noon Deeparadhana" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Rahu Kala Lemon Lamp & Kumkumarchana" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Arathi" },
    ],
    festivals: [
      { name: "Durga Navarathri & Chandi Homam", tamilName: "துர்கா நவராத்திரி & சண்டி ஹோமம்", month: "September / October", description: "9 nights of grand alankarams culminating in Vijayadasami celebrations." },
      { name: "Vinayagar Chaturthi", tamilName: "விநாயகர் சதுர்த்தி", month: "August / September", description: "Clay Ganapathi visarjan and 108 Modak offering." },
    ],
    priestServices: ["Chandi Homam", "Ganapathy Homam", "Rahu Kala Durga Pooja", "Vivaham", "Grihapravesham"],
    facilities: ["Mandapam", "Annadhanam Hall", "Parking Space"],
    nearbyDiningSlugs: ["babu-takeout", "kottu-king"],
    featured: false,
  },
  {
    id: "tmpl-017",
    slug: "sri-siva-sathyanarayana-swamy-temple",
    name: "Sri Siva Sathyanarayana Swamy Temple Mississauga",
    tamilName: "ஸ்ரீ சிவ சத்யநாராயண சுவாமி கோவில் மிசிசாகா",
    moolavar: "Lord Shiva & Lord Sathyanarayana",
    city: "Mississauga",
    province: "ON",
    address: "3058 Hurontario St, Mississauga, ON L5B 1N7",
    phone: "+1 905-272-9993",
    website: "https://www.sivasathyanarayana.org/",
    email: "contact@sivasathyanarayana.org",
    description:
      "A prominent temple on Hurontario Street in Mississauga. Known for authentic Sri Sathyanarayana Vrata poojas, Rudra Abhishekam, and peaceful family devotional programs.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:30 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Open full day on Pournami (Full Moon) and Maha Shivaratri",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:30 AM", description: "Rudra Abhishekam and Suprabhatam" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Noon Deeparadhana" },
      { name: "Sayaratchai", time: "6:30 PM", description: "Evening Sri Sathyanarayana Pooja" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Arathi" },
    ],
    festivals: [
      { name: "Pournami Sri Sathyanarayana Vratam", tamilName: "பௌர்ணமி சத்யநாராயண விரதம்", month: "Monthly", description: "Community group Vrata katha and prasadam distribution." },
      { name: "Maha Shivaratri Vigil", tamilName: "மகா சிவராத்திரி விரதம்", month: "February / March", description: "All-night 4 kala Rudrabhishekam." },
    ],
    priestServices: ["Satyanarayana Vratam", "Rudra Homam", "Navagraha Homam", "Grihapravesham", "Vivaham"],
    facilities: ["Pooja Hall", "Dining Room", "Parking"],
    nearbyDiningSlugs: ["babu-takeout"],
    featured: false,
  },

  // =========================================================================
  // ONTARIO — DURHAM REGION (PICKERING & AJAX)
  // =========================================================================
  {
    id: "tmpl-018",
    slug: "pickering-arulmigu-aruljothy-shivan-temple",
    name: "Pickering Arulmigu Aruljothy Shivan Temple",
    tamilName: "பிக்கரிங் அருள்மிகு அருள்ஜோதி சிவன் ஆலயம்",
    moolavar: "Sri Aruljotheeswarar (Lord Shiva Lingam)",
    city: "Pickering",
    province: "ON",
    address: "1730 McPherson Crt, Unit 20, Pickering, ON L1W 3E6",
    phone: "+1 905-837-2448",
    website: "https://www.aruljothy.org/",
    email: "info@aruljothy.org",
    description:
      "A revered Saivite temple serving Durham Region Tamil families across Pickering, Ajax, Whitby, and Oshawa. Famed for its serene atmosphere, Saiva Siddhanta lectures, and Maha Shivaratri observances.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 12:30 PM",
      weekdayEvening: "5:00 PM – 8:30 PM",
      weekendHours: "8:00 AM – 9:00 PM",
      specialDays: "Extended on Pradosham, Shivaratri, and Karthigai Deepam",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:30 AM", description: "Linga Abhishekam with milk and holy water" },
      { name: "Noon Pooja", time: "11:45 AM", description: "Midday Deeparadhana and Naivedyam" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Nandi and Shiva Archana" },
      { name: "Arthajaamam", time: "8:00 PM", description: "Night Shanti Arathi" },
    ],
    festivals: [
      { name: "Karthigai Deepam Mahotsavam", tamilName: "கார்த்திகை தீபத் திருநாள்", month: "November / December", description: "Grand lighting of the Maha Deepam pillar representing the infinite pillar of fire." },
      { name: "Maha Shivaratri", tamilName: "மகா சிவராத்திரி", month: "February / March", description: "All-night 4 kala Rudrabhishekam with Thevaram hymn chanting." },
    ],
    priestServices: ["Maha Mrityunjaya Homam", "Rudra Abhishekam", "Pradosha Pooja", "Grihapravesham", "Vehicle Blessing"],
    facilities: ["Sanctum Sanctorum", "Prasadam Hall", "Parking"],
    nearbyDiningSlugs: ["ajax-durham-driving", "aathavan-unavakam"],
    featured: false,
  },
  {
    id: "tmpl-019",
    slug: "durham-sri-pillaiyar-temple-ajax",
    name: "Durham Sri Pillaiyar Temple Ajax",
    tamilName: "துர்ஹாம் ஸ்ரீ பிள்ளையார் கோவில் அஜாக்ஸ்",
    moolavar: "Sri Karpaga Vinayagar",
    city: "Ajax",
    province: "ON",
    address: "150 Westney Rd S, Ajax, ON L1S 2N9",
    phone: "+1 905-686-9090",
    website: "https://www.durhampillaiyar.ca/",
    email: "info@durhampillaiyar.ca",
    description:
      "A prominent temple on Westney Road South in Ajax dedicated to Sri Karpaga Vinayagar. It serves as the spiritual home for hundreds of Tamil families in Durham Region with Sunday Tamil classes and daily poojas.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Open all day on Sankatahara Chaturthi and Vinayagar Chaturthi",
    },
    poojaTimings: [
      { name: "Morning Pooja", time: "8:30 AM", description: "Ganapathi Abhishekam and Archana" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Noon Deeparadhana" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Deeparadhana and Ganapathi Atharvashirsha" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Arathi" },
    ],
    festivals: [
      { name: "Sankatahara Chaturthi", tamilName: "சங்கடஹர சதுர்த்தி விரதம்", month: "Monthly", description: "Special evening abhishekam and modak distribution to remove obstacles." },
      { name: "Vinayagar Chaturthi Mahotsavam", tamilName: "விநாயகர் சதுர்த்தி விழா", month: "August / September", description: "10-day festival and chariot procession in Durham Region." },
    ],
    priestServices: ["Ganapathy Homam", "Ayush Homam", "Vivaham", "Grihapravesham", "Vehicle Blessing"],
    facilities: ["Pooja Hall", "Sunday Tamil School", "Prasadam Counter", "Parking"],
    nearbyDiningSlugs: ["ajax-durham-driving", "canbe-foods"],
    featured: false,
  },

  // =========================================================================
  // ONTARIO — WIDER (OTTAWA, HAMILTON, WATERLOO, LONDON)
  // =========================================================================
  {
    id: "tmpl-020",
    slug: "ottawa-sri-murugan-kovil",
    name: "Ottawa Sri Murugan Kovil (Ottawa Hindu Society)",
    tamilName: "ஒட்டாவா ஸ்ரீ முருகன் கோவில்",
    moolavar: "Lord Shanmukha Murugan with Valli & Devasena",
    city: "Ottawa",
    province: "ON",
    address: "4865 Bank St, Gloucester, Ottawa, ON K1X 1G6",
    phone: "+1 613-822-1531",
    website: "https://www.ottawahindutemple.com/",
    email: "info@ottawahindutemple.com",
    description:
      "A scenic and revered Hindu temple on Bank Street in Canada's capital city. Serves the vibrant Tamil, Sri Lankan, and Indian diaspora across Ottawa-Gatineau with traditional Murugan festivals and Sunday spiritual gatherings.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM (Full Day)",
      specialDays: "Extended on Thaipusam, Diwali, and Skanda Sashti",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "9:30 AM", description: "Morning Suprabhatam and Vel Abhishekam" },
      { name: "Uchi Kaalam", time: "12:00 PM", description: "Midday Naivedyam and Deeparadhana" },
      { name: "Sayaratchai", time: "6:30 PM", description: "Evening Thiruppugazh Parayanam and Mangala Arathi" },
      { name: "Arthajaamam", time: "8:00 PM", description: "Closing Shanti Pooja" },
    ],
    festivals: [
      { name: "Ottawa Thaipusam & Kavadi Festival", tamilName: "ஒட்டாவா தைப்பூசக் காவடித் திருவிழா", month: "January / February", description: "Hundreds of capital region devotees carry milk pots and Kavadi in devotion." },
      { name: "Skanda Sashti Soorasamharam", tamilName: "கந்த சஷ்டி சூரசம்ஹாரம்", month: "October / November", description: "Solemn 6-day fasting and celebration of victory of good over evil." },
    ],
    priestServices: ["Subramanya Homam", "Ganapathy Homam", "Vivaham", "Grihapravesham", "Vehicle Blessing", "Satyanarayan Vratam"],
    facilities: ["Large Community Banquet Hall", "Annadhanam Prasadam Kitchen", "Sunday Language School", "Spacious 200+ Parking Lot"],
    nearbyDiningSlugs: ["ottawa-tamil-association", "canbe-foods"],
    featured: true,
  },
  {
    id: "tmpl-021",
    slug: "hamilton-hindu-samajam-murugan-temple",
    name: "Hamilton Hindu Samajam & Murugan Temple",
    tamilName: "ஹமில்டன் இந்து சமாஜம் & முருகன் கோவில்",
    moolavar: "Lord Murugan & Lord Shiva",
    city: "Hamilton",
    province: "ON",
    address: "440 Cloverdale Ave, Hamilton, ON L8K 4S7",
    phone: "+1 905-594-1188",
    website: "https://www.hamiltonhindutemple.com/",
    email: "info@hamiltonhindutemple.com",
    description:
      "A cornerstone temple for Tamil Canadian families in Hamilton, Burlington, Oakville, and Niagara Region. Consecrated with authentic Saiva Agamic rituals.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "8:30 AM – 9:00 PM",
      specialDays: "Extended on Krithigai, Sashti, and Pongal",
    },
    poojaTimings: [
      { name: "Morning Pooja", time: "9:00 AM", description: "Vel Abhishekam and Archana" },
      { name: "Noon Pooja", time: "12:00 PM", description: "Deeparadhana" },
      { name: "Evening Pooja", time: "6:30 PM", description: "Sayaratchai and Deepam" },
      { name: "Night Pooja", time: "8:00 PM", description: "Shanti Arathi" },
    ],
    festivals: [
      { name: "Panguni Uthiram & Thaipusam", tamilName: "பங்குனி உத்திரம் & தைப்பூசம்", month: "Jan / Apr", description: "Annual Murugan celebrations with Pal Kudam." },
    ],
    priestServices: ["Subramanya Homam", "Grihapravesham", "Vivaham", "Vehicle Blessing"],
    facilities: ["Pooja Hall", "Annadhanam", "Parking"],
    nearbyDiningSlugs: ["babu-takeout"],
    featured: false,
  },
  {
    id: "tmpl-022",
    slug: "kitchener-waterloo-hindu-temple",
    name: "Kitchener-Waterloo Hindu Cultural & Murugan Temple",
    tamilName: "கிச்சனர்-வாட்டர்லூ இந்துக் கலாச்சார முருகன் கோவில்",
    moolavar: "Lord Ganesha, Murugan & Lord Shiva",
    city: "Kitchener",
    province: "ON",
    address: "51 Stephan Crt, Kitchener, ON N2E 2S2",
    phone: "+1 519-743-7377",
    website: "https://www.kwhindutemple.ca/",
    email: "contact@kwhindutemple.ca",
    description:
      "Serves the growing Tamil technology and university community in Kitchener, Waterloo, Cambridge, and Guelph. Celebrated for community youth festivals and vibrant Thai Pongal gatherings.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:00 PM",
      weekdayEvening: "6:00 PM – 8:30 PM",
      weekendHours: "8:30 AM – 8:30 PM",
      specialDays: "Full-day festivals on Pongal, Deepavali, and Shivaratri",
    },
    poojaTimings: [
      { name: "Morning Pooja", time: "9:00 AM", description: "Morning Archana and Deeparadhana" },
      { name: "Evening Pooja", time: "7:00 PM", description: "Sayaratchai and Thevaram" },
    ],
    festivals: [
      { name: "Thai Pongal & Tamil Heritage Day", tamilName: "தைப்பொங்கல் பெருவிழா", month: "January", description: "Community gathering of students, professors, and tech workers." },
    ],
    priestServices: ["Ganapathy Homam", "Saraswathi Pooja", "Grihapravesham", "Vehicle Blessing"],
    facilities: ["Sanctum", "Dining Hall", "Parking"],
    nearbyDiningSlugs: ["babu-takeout"],
    featured: false,
  },

  // =========================================================================
  // QUEBEC — GREATER MONTREAL & LAVAL
  // =========================================================================
  {
    id: "tmpl-023",
    slug: "montreal-durkai-amman-temple",
    name: "Sri Durkai Amman Temple Montreal",
    tamilName: "ஸ்ரீ துர்க்கை அம்மன் ஆலயம் மொன்றியல்",
    moolavar: "Goddess Sri Durkai Amman (Maha Shakthi)",
    city: "Montréal",
    province: "QC",
    address: "2465 Rue Bélanger, Montréal, QC H2G 1E5",
    phone: "+1 514-727-4638",
    website: "https://www.durkaiamman.ca/",
    email: "info@durkaiamman.ca",
    description:
      "The historic crown jewel of Quebec's Tamil diaspora, located on Rue Bélanger in Montreal. World-renowned for its gigantic annual Ther Thiruvizha (Chariot Festival) drawing over 10,000 devotees across North America onto Montreal streets.",
    darshanHours: {
      weekdayMorning: "7:30 AM – 1:00 PM",
      weekdayEvening: "4:30 PM – 9:00 PM",
      weekendHours: "7:30 AM – 9:30 PM (Continuous)",
      specialDays: "Continuous 24-hr darshan during the 10-day Annual Ther Thiruvizha in July",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "8:00 AM", description: "Morning Sri Lalitha Sahasranama and Milk Abhishekam" },
      { name: "Uchi Kaalam", time: "11:30 AM", description: "Midday Mahapooja, Turmeric and Sandalwood Alankaram" },
      { name: "Sayaratchai", time: "5:30 PM", description: "Evening Deeparadhana and Durga Stotram recitation" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Arathi and Shanti Seva" },
    ],
    festivals: [
      { name: "Annual Mahotsavam & Grand Ther Thiruvizha", tamilName: "வருடாந்த மகோற்சவ தேர்த்திருவிழா", month: "July", description: "Quebec's largest South Asian religious festival with the majestic wooden Chariot pulled through Montreal streets." },
      { name: "Saradha Navarathri & Chandi Yagam", tamilName: "சாரதா நவராத்திரி & சண்டியாகம்", month: "September / October", description: "9 nights of devotional splendour with 108 Suvasini Poojas and daily feast." },
      { name: "Aadi Velli & Paal Kudam", tamilName: "ஆடி வெள்ளி & பால்குட பவனி", month: "July / August", description: "Thousands carrying holy milk pots in procession through Rosemont-Petite-Patrie." },
    ],
    priestServices: ["Chandi Homam", "Rahu Kala Durga Pooja", "Vivaham", "Grihapravesham", "Vahana Pooja", "Navagraha Shanti Homam"],
    facilities: ["Large Main Prayer Hall", "Annadhanam Prasadam Hall", "Tamil Language & Carnatic Classes", "Street & Nearby Parking"],
    nearbyDiningSlugs: ["montreal-tamil-advisory", "la-cuisine-de-kochin"],
    featured: true,
  },
  {
    id: "tmpl-024",
    slug: "sri-thiru-murugan-temple-montreal",
    name: "Sri Thiru Murugan Temple Montreal (DDO)",
    tamilName: "ஸ்ரீ திருமுருகன் கோவில் மொன்றியல் (டி.டி.ஓ)",
    moolavar: "Sri Shanmukha Murugan with Valli & Devasena",
    city: "Dollard-des-Ormeaux",
    province: "QC",
    address: "1611 Blvd Saint-Régis, Dollard-des-Ormeaux, QC H9B 3H7",
    phone: "+1 514-683-8044",
    website: "https://www.montrealmurugan.org/",
    email: "info@montrealmurugan.org",
    description:
      "A magnificent, sprawling Tamil Hindu temple on Blvd Saint-Régis in Montreal's West Island. Consecrated with authentic Saiva Agamic traditions, featuring tall Raja Gopurams, beautiful stone murtis, and a vibrant cultural academy.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM (Full Day)",
      specialDays: "Continuous darshan during Skanda Sashti, Thaipusam, and Panguni Uthiram",
    },
    poojaTimings: [
      { name: "Ushakkalam", time: "8:00 AM", description: "Morning Suprabhatam and Vel Abhishekam" },
      { name: "Kaala Santhi", time: "11:30 AM", description: "Midday Mahapooja and Naivedyam" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Thiruppugazh Parayanam and Deeparadhana" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Palliyarai Seva and Shanti Arathi" },
    ],
    festivals: [
      { name: "Skanda Sashti & Sooranporu", tamilName: "கந்தசஷ்டி சூரன்போர் விழா", month: "October / November", description: "Solemn 6-day fasting festival concluding with grand outdoor victory pageant." },
      { name: "Thaipusam & Kavadi Attam", tamilName: "தைப்பூசம் & காவடியாட்டம்", month: "January / February", description: "Devotees carry Mayil and Pal Kavadi with vibrant Thavil Nadaswaram." },
      { name: "Panguni Uthiram Thirukalyanam", tamilName: "பங்குனி உத்திரத் திருக்கல்யாணம்", month: "March / April", description: "Celestial divine wedding of Lord Murugan with thousands participating." },
    ],
    priestServices: ["Subramanya Homam", "Kavadi Pooja", "Vivaham (Tamil Weddings)", "Grihapravesham", "Ayush Homam", "Vahana Pooja"],
    facilities: ["Grand Wedding Banquet Auditorium", "Annadhanam Prasadam Kitchen", "Tamil Heritage School", "Spacious 250+ Spot Parking"],
    nearbyDiningSlugs: ["montreal-tamil-advisory"],
    featured: true,
  },
  {
    id: "tmpl-025",
    slug: "montreal-sri-maha-ganapathi-temple",
    name: "Montreal Sri Maha Ganapathi Temple",
    tamilName: "மொன்றியல் ஸ்ரீ மகா கணபதி ஆலயம்",
    moolavar: "Sri Maha Ganapathi",
    city: "Montréal",
    province: "QC",
    address: "5335 Rue Jean-Talon O, Montreal, QC H4P 1X4",
    phone: "+1 514-738-4447",
    website: "https://www.mahaganapathi.ca/",
    email: "info@mahaganapathi.ca",
    description:
      "A peaceful and deeply revered Ganapathi temple situated on Jean-Talon West in Montreal. Popular for Sankatahara Chaturthi, vehicle blessings, and daily Annadhanam.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 1:00 PM",
      weekdayEvening: "5:00 PM – 9:00 PM",
      weekendHours: "8:00 AM – 9:30 PM",
      specialDays: "Extended on Vinayagar Chaturthi and New Year",
    },
    poojaTimings: [
      { name: "Kaala Santhi", time: "8:30 AM", description: "Morning Ganapathi Homam and Abhishekam" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Noon Deeparadhana" },
      { name: "Sayaratchai", time: "6:00 PM", description: "Evening Archana and Deepam" },
      { name: "Arthajaamam", time: "8:30 PM", description: "Night Arathi" },
    ],
    festivals: [
      { name: "Vinayagar Chaturthi", tamilName: "விநாயகர் சதுர்த்தி", month: "August / September", description: "10-day celebration with special modak offerings." },
    ],
    priestServices: ["Ganapathy Homam", "Navagraha Homam", "Vehicle Blessing", "Grihapravesham"],
    facilities: ["Prayer Hall", "Prasadam Room", "Parking"],
    nearbyDiningSlugs: ["montreal-tamil-advisory"],
    featured: false,
  },

  // =========================================================================
  // BRITISH COLUMBIA — METRO VANCOUVER & FRASER VALLEY
  // =========================================================================
  {
    id: "tmpl-026",
    slug: "bc-murugan-temple-surrey",
    name: "B.C. Murugan Temple (Sri Murugan Society of BC)",
    tamilName: "பி.சி. முருகன் கோவில் (பிரிட்டிஷ் கொலம்பியா)",
    moolavar: "Lord Balamurugan (Sri Shanmukha)",
    city: "Surrey",
    province: "BC",
    address: "3134 140 St, Surrey, BC V3W 5H6",
    phone: "+1 604-599-4111",
    website: "https://www.bcmurugan.org/",
    email: "info@bcmurugan.org",
    description:
      "The paramount spiritual and cultural institution for British Columbia's Tamil community. Situated in Surrey, Metro Vancouver, it attracts devotees from across Western Canada and Washington State for authentic Agamic Saivite worship.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "8:00 AM – 9:00 PM (Continuous)",
      specialDays: "Continuous darshan during Skanda Sashti, Thaipusam, and Tamil New Year",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:30 AM", description: "Suprabhatam, Vel Abhishekam with milk and rose water" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Midday Naivedyam and Deeparadhana" },
      { name: "Sayaratchai", time: "6:30 PM", description: "Evening Thiruppugazh recitation and Deeparadhana" },
      { name: "Arthajaamam", time: "8:15 PM", description: "Night Palliyarai Seva and Shanti Arathi" },
    ],
    festivals: [
      { name: "BC Thaipusam & Kavadi Festival", tamilName: "பிரிட்டிஷ் கொலம்பியா தைப்பூசக் காவடித் திருவிழா", month: "January / February", description: "Pacific Northwest's premier Murugan festival with colorful Kavadi processions." },
      { name: "Skanda Sashti Soorasamharam", tamilName: "கந்தசஷ்டி சூரசம்ஹாரம்", month: "October / November", description: "6 days of intense fasting and devotional singing." },
      { name: "Panguni Uthiram & Chithirai Varudapirappu", tamilName: "பங்குனி உத்திரம் & சித்திரை புத்தாண்டு", month: "March / April", description: "Tamil New Year celebrations with special panchangam readings." },
    ],
    priestServices: ["Subramanya Homam", "Kavadi Pooja", "Vivaham (Weddings)", "Grihapravesham", "Vehicle Blessing", "Ayush Homam"],
    facilities: ["Kalyana Mandapam (Banquet Hall)", "Annadhanam Dining Facility", "Tamil School & Cultural Center", "Spacious 150+ Vehicle Parking Lot"],
    nearbyDiningSlugs: ["vancouver-tamil-summer", "babu-takeout"],
    featured: true,
  },
  {
    id: "tmpl-027",
    slug: "vancouver-sri-ganesh-temple",
    name: "Vancouver Sri Ganesh Temple",
    tamilName: "வான்கூவர் ஸ்ரீ கணேஷ் ஆலயம்",
    moolavar: "Sri Maha Ganapathy",
    city: "Vancouver",
    province: "BC",
    address: "2092 Kingsway, Vancouver, BC V5N 2T3",
    phone: "+1 604-874-5544",
    website: "https://www.vancouverganeshtemple.org/",
    email: "info@vancouverganeshtemple.org",
    description:
      "A peaceful and welcoming sanctuary on Kingsway in East Vancouver. Serves devotees across Vancouver, Burnaby, Richmond, and New Westminster with daily poojas and spiritual fellowship.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "8:30 AM – 9:00 PM",
      specialDays: "Extended on Sankatahara Chaturthi and Vinayagar Chaturthi",
    },
    poojaTimings: [
      { name: "Morning Pooja", time: "9:00 AM", description: "Ganapathi Abhishekam and Archana" },
      { name: "Evening Pooja", time: "6:30 PM", description: "Sayaratchai and Deeparadhana" },
    ],
    festivals: [
      { name: "Vinayagar Chaturthi", tamilName: "விநாயகர் சதுர்த்தி", month: "August / September", description: "Annual elephant-headed god celebration." },
    ],
    priestServices: ["Ganapathy Homam", "Navagraha Homam", "Grihapravesham", "Vehicle Blessing"],
    facilities: ["Prayer Hall", "Prasadam Counter", "Parking"],
    nearbyDiningSlugs: ["vancouver-tamil-summer"],
    featured: false,
  },

  // =========================================================================
  // ALBERTA — CALGARY & EDMONTON
  // =========================================================================
  {
    id: "tmpl-028",
    slug: "calgary-murugan-temple",
    name: "Sri Murugan Society of Alberta (Calgary Murugan Temple)",
    tamilName: "ஸ்ரீ முருகன் சமூகம் அல்பேர்ட்டா (கல்கரி முருகன் கோவில்)",
    moolavar: "Lord Murugan with Valli & Devasena",
    city: "Calgary",
    province: "AB",
    address: "4203 17 Ave SE, Calgary, AB T2A 0T2",
    phone: "+1 403-248-1818",
    website: "https://www.calgarymurugan.org/",
    email: "info@calgarymurugan.org",
    description:
      "The vibrant spiritual epicenter for Alberta's Tamil and South Asian communities, located on 17 Ave SE in Calgary. Revered for Skanda Sashti, Panguni Uthiram, Thaipusam, and weekly Friday Annadhanam.",
    darshanHours: {
      weekdayMorning: "8:30 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "8:30 AM – 9:00 PM (Continuous)",
      specialDays: "Open all day on Thaipusam, Skanda Sashti, and Tamil New Year",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "9:00 AM", description: "Suprabhatam and Vel Abhishekam" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Noon Deeparadhana and Naivedyam" },
      { name: "Sayaratchai", time: "6:30 PM", description: "Evening Thiruppugazh Parayanam and Arathi" },
      { name: "Arthajaamam", time: "8:15 PM", description: "Night closing Shanti Pooja" },
    ],
    festivals: [
      { name: "Calgary Thaipusam & Kavadi Festival", tamilName: "கல்கரி தைப்பூசக் காவடிப் பெருவிழா", month: "January / February", description: "Devotees from across the Prairies gather to offer Pal Kudam and Kavadi." },
      { name: "Skanda Sashti & Soorasamharam", tamilName: "கந்தசஷ்டி விரதம் & சூரசம்ஹாரம்", month: "October / November", description: "6-day celebration of the victory of Lord Murugan." },
    ],
    priestServices: ["Subramanya Homam", "Ganapathy Homam", "Vivaham", "Grihapravesham", "Vehicle Blessing", "Satyanarayan Vratam"],
    facilities: ["Cultural & Banquet Hall", "Prasadam Dining Kitchen", "Sunday Tamil School", "Large Paved Parking Area"],
    nearbyDiningSlugs: ["calgary-tamil-cpa"],
    featured: true,
  },
  {
    id: "tmpl-029",
    slug: "maha-ganapathy-temple-edmonton",
    name: "Maha Ganapathy Temple of Edmonton",
    tamilName: "மகா கணபதி ஆலயம் எட்மன்ரன்",
    moolavar: "Sri Maha Ganapathy",
    city: "Edmonton",
    province: "AB",
    address: "12838 52 St NW, Edmonton, AB T5A 3P8",
    phone: "+1 780-478-4100",
    website: "https://www.mahaganapathitemple.com/",
    email: "info@mahaganapathitemple.com",
    description:
      "A magnificent traditional Dravidian stone temple in northern Edmonton. Featuring hand-carved sanctums for Lord Ganesha, Lord Shiva, and Lord Murugan, it serves thousands of devotees in northern Alberta.",
    darshanHours: {
      weekdayMorning: "8:00 AM – 12:30 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "8:00 AM – 9:00 PM (Continuous)",
      specialDays: "Extended on Vinayagar Chaturthi, Pongal, and Maha Shivaratri",
    },
    poojaTimings: [
      { name: "Morning Kaala Pooja", time: "8:30 AM", description: "Suprabhatam and Ganapathi Abhishekam" },
      { name: "Uchi Kaalam", time: "11:45 AM", description: "Midday Naivedyam and Deeparadhana" },
      { name: "Sayaratchai", time: "6:30 PM", description: "Evening Deeparadhana and Thevaram" },
      { name: "Arthajaamam", time: "8:15 PM", description: "Night Arathi" },
    ],
    festivals: [
      { name: "Vinayagar Chaturthi Brahmotsavam", tamilName: "விநாயகர் சதுர்த்தி பிரம்மோற்சவம்", month: "August / September", description: "10-day grand festival with chariot procession and cultural programs." },
      { name: "Thai Pongal & Maha Shivaratri", tamilName: "தைப்பொங்கல் & மகா சிவராத்திரி", month: "Jan & Feb/Mar", description: "Celebrated with community feasts and all-night vigil." },
    ],
    priestServices: ["Ganapathy Homam", "Navagraha Homam", "Vivaham", "Grihapravesham", "Vehicle Blessing", "Ayush Homam"],
    facilities: ["Traditional Granite Gopuram & Sanctum", "Kalyana Mandapam", "Annadhanam Dining", "200+ Parking Spaces"],
    nearbyDiningSlugs: ["calgary-tamil-cpa"],
    featured: true,
  },

  // =========================================================================
  // MANITOBA, SASKATCHEWAN & ATLANTIC CANADA
  // =========================================================================
  {
    id: "tmpl-030",
    slug: "winnipeg-hindu-temple-murugan",
    name: "Hindu Society of Manitoba (Winnipeg Hindu Temple)",
    tamilName: "இந்து சமூகம் மனிடோபா (வின்னிபெக் இந்துக் கோவில்)",
    moolavar: "Lord Murugan, Sri Ganesha & Lord Shiva",
    city: "Winnipeg",
    province: "MB",
    address: "999 St Anne's Rd, Winnipeg, MB R2N 4G5",
    phone: "+1 204-257-2274",
    website: "https://www.hindusocietyofmanitoba.com/",
    email: "info@hindusocietyofmanitoba.com",
    description:
      "A landmark spiritual center on St Anne's Road in Winnipeg. Consecrated with beautiful murtis for Lord Murugan, Ganesha, and Shiva, serving Tamil and Indian diaspora families across Manitoba.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:00 PM",
      weekdayEvening: "5:30 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
      specialDays: "Extended on Pongal, Deepavali, and Shivaratri",
    },
    poojaTimings: [
      { name: "Morning Pooja", time: "9:30 AM", description: "Daily Archana and Deeparadhana" },
      { name: "Evening Pooja", time: "6:30 PM", description: "Sayaratchai and Arathi" },
    ],
    festivals: [
      { name: "Thai Pongal & Murugan Utsavam", tamilName: "தைப்பொங்கல் & முருகன் உற்சவம்", month: "January / February", description: "Annual diaspora harvest celebrations." },
    ],
    priestServices: ["Ganapathy Homam", "Subramanya Pooja", "Grihapravesham", "Vehicle Blessing", "Vivaham"],
    facilities: ["Spacious Auditorium", "Dining Hall", "Cultural Classrooms", "Free Parking"],
    nearbyDiningSlugs: ["babu-takeout"],
    featured: false,
  },
  {
    id: "tmpl-031",
    slug: "halifax-hindu-temple-tamil-society",
    name: "Halifax Hindu Temple & Tamil Cultural Mandapam",
    tamilName: "ஹாலிஃபாக்ஸ் இந்துக் கோவில் & தமிழ் கலாச்சார மண்டபம்",
    moolavar: "Lord Murugan, Sri Ganesha & Mother Durga",
    city: "Halifax",
    province: "NS",
    address: "111 Kearney Lake Rd, Halifax, NS B3M 4H1",
    phone: "+1 902-443-4240",
    website: "https://www.halifaxhindutemple.ca/",
    email: "contact@halifaxhindutemple.ca",
    description:
      "The premier Hindu sanctuary in Atlantic Canada on Kearney Lake Road in Halifax. Welcomes Tamil students, newcomers, and established families across Nova Scotia, New Brunswick, and PEI.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:00 PM",
      weekdayEvening: "6:00 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
      specialDays: "Extended during major festivals and university orientation days",
    },
    poojaTimings: [
      { name: "Morning Pooja", time: "9:30 AM", description: "Daily Morning Archana" },
      { name: "Evening Pooja", time: "7:00 PM", description: "Evening Arathi and Thevaram recitation" },
    ],
    festivals: [
      { name: "Thai Pongal & Tamil Heritage Celebration", tamilName: "தைப்பொங்கல் & தமிழ் மரபுத் திருநாள்", month: "January", description: "Gathering of Atlantic Canada's Tamil community." },
    ],
    priestServices: ["Ganapathy Homam", "Navagraha Pooja", "Grihapravesham", "Vehicle Blessing"],
    facilities: ["Sanctum", "Community Hall", "Free Parking"],
    nearbyDiningSlugs: ["babu-takeout"],
    featured: false,
  },
  {
    id: "tmpl-032",
    slug: "saskatoon-hindu-temple",
    name: "Saskatoon Hindu Temple & Murugan Shrine",
    tamilName: "சஸ்கடூன் இந்துக் கோவில் & முருகன் சந்நிதி",
    moolavar: "Lord Murugan & Sri Siddhi Vinayagar",
    city: "Saskatoon",
    province: "SK",
    address: "107 Albert Ave, Saskatoon, SK S7N 1E7",
    phone: "+1 306-653-5683",
    website: "https://www.saskatoonhindutemple.org/",
    email: "info@saskatoonhindutemple.org",
    description:
      "A peaceful temple serving the Hindu and Tamil diaspora in Saskatoon and central Saskatchewan. Hosts regular weekend bhajans, Pongal celebrations, and priest services.",
    darshanHours: {
      weekdayMorning: "9:00 AM – 12:00 PM",
      weekdayEvening: "6:00 PM – 8:30 PM",
      weekendHours: "9:00 AM – 8:30 PM",
      specialDays: "Full-day festivals on Pongal and Diwali",
    },
    poojaTimings: [
      { name: "Morning Pooja", time: "9:30 AM", description: "Daily Archana" },
      { name: "Evening Pooja", time: "7:00 PM", description: "Sayaratchai Arathi" },
    ],
    festivals: [
      { name: "Thai Pongal & Deepavali", tamilName: "தைப்பொங்கல் & தீபாவளி", month: "January & October/November", description: "Community feasts and prayers." },
    ],
    priestServices: ["Ganapathy Homam", "Grihapravesham", "Vehicle Blessing"],
    facilities: ["Pooja Hall", "Dining Room", "Parking"],
    nearbyDiningSlugs: ["babu-takeout"],
    featured: false,
  },

  {
    id: "tmpl-033",
    slug: "maha-ganapati-temple-edmonton",
    name: "Maha Ganapati Temple",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Edmonton",
    province: "AB",
    address: "128 Running Creek Rd, Edmonton, AB T6J 7B1",
    phone: "780-988-5161",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@mahaganapatitempleedmonton.ca",
    whatsapp: "7809885161",
    description: "Maha Ganapati Temple is a sacred place of worship and spiritual community hub serving devotees in Edmonton, AB and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-034",
    slug: "winnipeg-murugan-winnipeg",
    name: "Winnipeg Murugan",
    tamilName: "ஸ்ரீ முருகன் / கந்தசுவாமி திருக்கோவில்",
    moolavar: "Lord Murugan with Valli & Devasena",
    city: "Winnipeg",
    province: "MB",
    address: "999, St. Annes Road, Winnipeg, MB",
    phone: "204-257-6913",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@winnipegmuruganwinnipeg.ca",
    whatsapp: "2042576913",
    description: "Winnipeg Murugan is a sacred place of worship and spiritual community hub serving devotees in Winnipeg, MB and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-035",
    slug: "sri-ganesha-durga-hindu-temple-mississauga",
    name: "Sri Ganesha Durga Hindu Temple",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Mississauga",
    province: "ON",
    address: "7220 Tranmere Drive Mississauga, ON L5S1L6, Mississauga, ON L5S 1L6",
    phone: "905-405-0011",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@sriganeshadurgahindutemplemississauga.ca",
    whatsapp: "9054050011",
    description: "Sri Ganesha Durga Hindu Temple is a sacred place of worship and spiritual community hub serving devotees in Mississauga, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-036",
    slug: "arulmigu-bhuvaneswari-amman-temple-brampton",
    name: "Arulmigu Bhuvaneswari Amman Temple",
    tamilName: "அருள்மிகு புவனேஸ்வரி அம்மன் திருக்கோவில்",
    moolavar: "Sri Bhuvaneswari Amman",
    city: "Brampton",
    province: "ON",
    address: "230, Wilkinson Road, Brampton, ON L6T 4J2",
    phone: "905-459-7042",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@arulmigubhuvaneswariammantemplebrampton.ca",
    whatsapp: "9054597042",
    description: "Arulmigu Bhuvaneswari Amman Temple is a sacred place of worship and spiritual community hub serving devotees in Brampton, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-037",
    slug: "sir-katpakavinayakar-thevasthanam-brampton",
    name: "Sir Katpakavinayakar Thevasthanam",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Brampton",
    province: "ON",
    address: "200 Advance Blvd #21, Brampton, ON L6T 4V4",
    phone: "905-458-9701",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@sirkatpakavinayakarthevasthanambrampton.ca",
    whatsapp: "9054589701",
    description: "Sir Katpakavinayakar Thevasthanam is a sacred place of worship and spiritual community hub serving devotees in Brampton, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-038",
    slug: "cornwall-shivan-temple-cornwall",
    name: "Cornwall Shivan Temple",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Cornwall",
    province: "ON",
    address: "1730 Vincent Massey Drive, Cornwall, ON K6H 5R6",
    phone: "416-939-4921",
    website: "https://web.facebook.com/profile.php",
    email: "info@cornwallshivantemplecornwall.ca",
    whatsapp: "4169394921",
    description: "Cornwall Shivan Temple is a sacred place of worship and spiritual community hub serving devotees in Cornwall, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-039",
    slug: "sri-murugan-temple-waterloo-kitchener",
    name: "Sri Murugan Temple Waterloo",
    tamilName: "ஸ்ரீ முருகன் / கந்தசுவாமி திருக்கோவில்",
    moolavar: "Lord Murugan with Valli & Devasena",
    city: "Kitchener",
    province: "ON",
    address: "P.O.Box : 2503, Kitchener, ON N2A 4A5",
    phone: "226-747-3376",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srimurugantemplewaterlookitchener.ca",
    whatsapp: "2267473376",
    description: "Sri Murugan Temple Waterloo is a sacred place of worship and spiritual community hub serving devotees in Kitchener, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-040",
    slug: "sri-meenakshy-amman-temple-scarborough",
    name: "Sri Meenakshy Amman Temple",
    tamilName: "ஸ்ரீ மீனாட்சி சுந்தரேஸ்வரர் திருக்கோவில்",
    moolavar: "Sri Meenakshi Sundareswarar",
    city: "Scarborough",
    province: "ON",
    address: "585 Middlefield Road 21 Scarborough, Scarborough, ON MIV 4Y5",
    phone: "416-358-2441",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srimeenakshyammantemplescarborough.ca",
    whatsapp: "4163582441",
    description: "Sri Meenakshy Amman Temple is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-041",
    slug: "canada-sri-siva-satyanarayana-temple-mississauga",
    name: "Canada Sri Siva Satyanarayana Temple",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Mississauga",
    province: "ON",
    address: "1325 Matheson Blvd, Mississauga, ON, L4W1R1, Mississauga, ON L4W 1R1",
    phone: "905-282-0108",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@canadasrisivasatyanarayanatemplemississauga.ca",
    whatsapp: "9052820108",
    description: "Canada Sri Siva Satyanarayana Temple is a sacred place of worship and spiritual community hub serving devotees in Mississauga, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-042",
    slug: "jeya-durga-mississauga-mississauga",
    name: "Jeya Durga Mississauga",
    tamilName: "அருள்மிகு ஸ்ரீ துர்க்கை அம்மன் ஆலயம்",
    moolavar: "Goddess Sri Durga Parameshwari",
    city: "Mississauga",
    province: "ON",
    address: "1808 Drew Road, Mississauga, ON, L5S1J6, Mississauga, ON L5S 1J6",
    phone: "905-612-1856",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@jeyadurgamississaugamississauga.ca",
    whatsapp: "9056121856",
    description: "Jeya Durga Mississauga is a sacred place of worship and spiritual community hub serving devotees in Mississauga, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-043",
    slug: "sri-muthu-maari-ambal-temple-mississauga",
    name: "Sri Muthu Maari Ambal Temple",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Mississauga",
    province: "ON",
    address: "1314 Britannia Road East 21, Mississauga, ON L4W 1C8",
    phone: "905-795-8542",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srimuthumaariambaltemplemississauga.ca",
    whatsapp: "9057958542",
    description: "Sri Muthu Maari Ambal Temple is a sacred place of worship and spiritual community hub serving devotees in Mississauga, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-044",
    slug: "sri-muthumari-ambal-thevasthanam-mississauga",
    name: "Sri Muthumari Ambal Thevasthanam",
    tamilName: "அருள்மிகு ஸ்ரீ துர்க்கை அம்மன் ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Mississauga",
    province: "ON",
    address: "1314 Brittania Rd E, Mississauga, ON L4W 1C8",
    phone: "905-795-8389",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srimuthumariambalthevasthanammississauga.ca",
    whatsapp: "9057958389",
    description: "Sri Muthumari Ambal Thevasthanam is a sacred place of worship and spiritual community hub serving devotees in Mississauga, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-045",
    slug: "sri-rajarajeswary-peedam-montreal",
    name: "Sri Rajarajeswary Peedam",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Montreal",
    province: "QC",
    address: "673 8th Ave., Valmonin, Montreal, QC",
    phone: "819-322-1379",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srirajarajeswarypeedammontreal.ca",
    whatsapp: "8193221379",
    description: "Sri Rajarajeswary Peedam is a sacred place of worship and spiritual community hub serving devotees in Montreal, QC and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-046",
    slug: "sri-siva-vishnu-temple-canada-toronto",
    name: "Sri Siva Vishnu Temple - Canada",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Toronto",
    province: "ON",
    address: "38 Rivalda Road, Toronto, ON M9M 2M3",
    phone: "416-740-0062",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srisivavishnutemplecanadatoronto.ca",
    whatsapp: "4167400062",
    description: "Sri Siva Vishnu Temple - Canada is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-047",
    slug: "thiruchendur-murugantemple-toronto",
    name: "Thiruchendur Murugantemple",
    tamilName: "ஸ்ரீ முருகன் / கந்தசுவாமி திருக்கோவில்",
    moolavar: "Lord Murugan with Valli & Devasena",
    city: "Toronto",
    province: "ON",
    address: "No.19, Penn Drive, North York, ON, Toronto, ON M9L 2A7",
    phone: "416-744-9568",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@thiruchendurmurugantempletoronto.ca",
    whatsapp: "4167449568",
    description: "Thiruchendur Murugantemple is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-048",
    slug: "canada-sri-iyappan-ontario",
    name: "Canada Sri Iyappan",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Ontario",
    province: "ON",
    address: "Ontario, ON",
    phone: "416-321-6104",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@canadasriiyappanontario.ca",
    whatsapp: "4163216104",
    description: "Canada Sri Iyappan is a sacred place of worship and spiritual community hub serving devotees in Ontario, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-049",
    slug: "sri-swarnakarshana-gnana-bhairavar-kovil-oshawa",
    name: "Sri Swarnakarshana Gnana Bhairavar Kovil",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Oshawa",
    province: "ON",
    address: "450 Taunton Rd E, Oshawa, ON, Oshawa, ON L1H 7K4",
    phone: "416-520-2056",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@sriswarnakarshanagnanabhairavarkoviloshawa.ca",
    whatsapp: "4165202056",
    description: "Sri Swarnakarshana Gnana Bhairavar Kovil is a sacred place of worship and spiritual community hub serving devotees in Oshawa, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-050",
    slug: "om-namo-narayani-pobox-80040",
    name: "Om Namo Narayani",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "P.o.box 80040",
    province: "ON",
    address: "3938 Cottrelle Blvd, P.O.Box 80040, Broampton, ON, L6P2R0, P.o.box 80040, ON L6P 2R0",
    phone: "905-913-0787",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@omnamonarayanipobox.ca",
    whatsapp: "9059130787",
    description: "Om Namo Narayani is a sacred place of worship and spiritual community hub serving devotees in P.o.box 80040, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-051",
    slug: "pickering-aruljothy-sivan-temple-pickering",
    name: "Pickering Aruljothy Sivan Temple",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Pickering",
    province: "ON",
    address: "1734 Orangebrook Ct, #10, Pickering, ON L1W 3G8",
    phone: "647-989-6943",
    website: "https://www.facebook.com/aruljothy.temple",
    email: "info@pickeringaruljothysivantemplepickering.ca",
    whatsapp: "6479896943",
    description: "Pickering Aruljothy Sivan Temple is a sacred place of worship and spiritual community hub serving devotees in Pickering, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-052",
    slug: "richmonhill-ganesha-temple-vancouver",
    name: "Richmonhill Ganesha Temple",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Vancouver",
    province: "BC",
    address: "10865 Bayview Ave, Vancouver, BC L4S 1M1",
    phone: "905-883-9010",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@richmonhillganeshatemplevancouver.ca",
    whatsapp: "9058839010",
    description: "Richmonhill Ganesha Temple is a sacred place of worship and spiritual community hub serving devotees in Vancouver, BC and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-053",
    slug: "aathi-parasakthy-guru-mantram-scarborough",
    name: "Aathi Parasakthy Guru Mantram",
    tamilName: "ஸ்ரீ வெங்கடேஸ்வரா / பெருமாள் ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "80 Nashdene Rd #99, Scarborough, ON M1V 5E4",
    phone: "647-436-9647",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@aathiparasakthygurumantramscarborough.ca",
    whatsapp: "6474369647",
    description: "Aathi Parasakthy Guru Mantram is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-054",
    slug: "canada-kanthasamy-temple-scarborough",
    name: "Canada Kanthasamy Temple",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "733 Birchmount Rd, Scarborough, ON M1K 1R5",
    phone: "416-438-1882",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@canadakanthasamytemplescarborough.ca",
    whatsapp: "4164381882",
    description: "Canada Kanthasamy Temple is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-055",
    slug: "canada-nainatheevu-kovil-scarborough",
    name: "Canada Nainatheevu Kovil",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "1537-1539- Warden Ave, Scarborough, ON, M1R4Z8, Scarborough, ON M1R 4Z8",
    phone: "416-293-4000",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@canadanainatheevukovilscarborough.ca",
    whatsapp: "4162934000",
    description: "Canada Nainatheevu Kovil is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-056",
    slug: "canada-thirupathi-vengadasalapathy-temple-scarborough",
    name: "Canada Thirupathi Vengadasalapathy Temple",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "1240 Ellesmere Road, Scarborough, ON M1P 2X4",
    phone: "416-999-4274",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@canadathirupathivengadasalapathytemplescarborough.ca",
    whatsapp: "4169994274",
    description: "Canada Thirupathi Vengadasalapathy Temple is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-057",
    slug: "nallur-kanthasuwamy-kovil-scarborough",
    name: "Nallur Kanthasuwamy Kovil",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "20 Nugget Ave 1, Scarborough, ON",
    phone: "416-293-9004",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@nallurkanthasuwamykovilscarborough.ca",
    whatsapp: "4162939004",
    description: "Nallur Kanthasuwamy Kovil is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-058",
    slug: "periya-sivan-temple-scarborough",
    name: "Periya Sivan Temple",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Scarborough",
    province: "ON",
    address: "1960 Ellesmere Rd 10, Scarborough, ON M1H 2W5",
    phone: "416-769-7747",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@periyasivantemplescarborough.ca",
    whatsapp: "4167697747",
    description: "Periya Sivan Temple is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-059",
    slug: "sai-illam-scarborough",
    name: "Sai Illam",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "20 Slan Ave., Scarborough, M1G3B2, Scarborough, ON M1G 3B2",
    phone: "416-568-1221",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@saiillamscarborough.ca",
    whatsapp: "4165681221",
    description: "Sai Illam is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-060",
    slug: "selva-channithy-murugan-scarborough",
    name: "Selva Channithy Murugan",
    tamilName: "ஸ்ரீ முருகன் / கந்தசுவாமி திருக்கோவில்",
    moolavar: "Lord Murugan with Valli & Devasena",
    city: "Scarborough",
    province: "ON",
    address: "1 Goalden Gate #1, Scarborough, ON M1P 3A4",
    phone: "416-297-8716",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@selvachannithymuruganscarborough.ca",
    whatsapp: "4162978716",
    description: "Selva Channithy Murugan is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-061",
    slug: "sri-bhuvaneshwari-hindu-temple-scarborough",
    name: "Sri Bhuvaneshwari Hindu Temple",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "746 Warden Ave #10&11, Scarborough, ON M1L 4A2",
    phone: "416-615-0005",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@sribhuvaneshwarihindutemplescarborough.ca",
    whatsapp: "4166150005",
    description: "Sri Bhuvaneshwari Hindu Temple is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-062",
    slug: "sri-luxsumi-mandir-scarborough",
    name: "Sri Luxsumi Mandir",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "1560 Brimley Rd #106, Scarborough, ON",
    phone: "416-835-2729",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@sriluxsumimandirscarborough.ca",
    whatsapp: "4168352729",
    description: "Sri Luxsumi Mandir is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-063",
    slug: "sri-meenadhchi-amman-temple-scarborough",
    name: "Sri Meenadhchi Amman Temple",
    tamilName: "அருள்மிகு ஸ்ரீ துர்க்கை அம்மன் ஆலயம்",
    moolavar: "Goddess Sri Durga Parameshwari",
    city: "Scarborough",
    province: "ON",
    address: "585 Middlefield Rd #1, Scarborough, ON M1V 4Y5",
    phone: "416-535-6560",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srimeenadhchiammantemplescarborough.ca",
    whatsapp: "4165356560",
    description: "Sri Meenadhchi Amman Temple is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-064",
    slug: "sri-nallur-sivan-kovil-scarborough",
    name: "Sri Nallur Sivan Kovil",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Scarborough",
    province: "ON",
    address: "20 Nugget Av 1, Scarborough, ON",
    phone: "4717456385",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srinallursivankovilscarborough.ca",
    whatsapp: "4717456385",
    description: "Sri Nallur Sivan Kovil is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-065",
    slug: "sri-santhira-mowleeswarar-sivalayam-scarborough",
    name: "Sri Santhira Mowleeswarar Sivalayam",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Scarborough",
    province: "ON",
    address: "3011 Markham Rd #62&63, Scarborough, ON",
    phone: "416-754-7338",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srisanthiramowleeswararsivalayamscarborough.ca",
    whatsapp: "4167547338",
    description: "Sri Santhira Mowleeswarar Sivalayam is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-066",
    slug: "sri-sathya-sai-baba-scarborough",
    name: "Sri Sathya Sai Baba",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "5321 Finch Avenue East, Scarborough, ON M1S 5W2",
    phone: "416-335-7242",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srisathyasaibabascarborough.ca",
    whatsapp: "4163357242",
    description: "Sri Sathya Sai Baba is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-067",
    slug: "temple-5637-finch-ave-scarborough",
    name: "Temple (5637 Finch Ave)",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "5637 Finch Avenue East 5A, Scarborough, ON M1B 5K9",
    phone: "416-412-1289",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@templefinchavescarborough.ca",
    whatsapp: "4164121289",
    description: "Temple (5637 Finch Ave) is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-068",
    slug: "temple-brimley-goldengate-court-scarborough",
    name: "Temple (brimley & Goldengate Court)",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Scarborough",
    province: "ON",
    address: "Brimley and GoldenGate Court 1, Scarborough, ON",
    phone: "416-731-8453",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@templebrimleygoldengatecourtscarborough.ca",
    whatsapp: "4167318453",
    description: "Temple (brimley & Goldengate Court) is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-069",
    slug: "chan-shan-temple-thornhill",
    name: "Chan Shan Temple",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Thornhill",
    province: "ON",
    address: "7254 Bayview Ave, Thornhill, ON L3T 2R6",
    phone: "905-886-1522",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@chanshantemplethornhill.ca",
    whatsapp: "9058861522",
    description: "Chan Shan Temple is a sacred place of worship and spiritual community hub serving devotees in Thornhill, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-070",
    slug: "arulmihu-muthvinayagar-thevasthanam-toronto",
    name: "Arulmihu Muthvinayagar Thevasthanam",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Toronto",
    province: "ON",
    address: "435 Parliament St, Toronto, ON M9L 1V3",
    phone: "416-413-7747",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@arulmihumuthvinayagarthevasthanamtoronto.ca",
    whatsapp: "4164137747",
    description: "Arulmihu Muthvinayagar Thevasthanam is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-071",
    slug: "merupuram-sri-paththrakali-amman-temple-toronto",
    name: "Merupuram Sri Paththrakali Amman Temple",
    tamilName: "அருள்மிகு ஸ்ரீ துர்க்கை அம்மன் ஆலயம்",
    moolavar: "Goddess Sri Durga Parameshwari",
    city: "Toronto",
    province: "ON",
    address: "1510 Birchmount Road 104, Toronto, ON M1P 2G6",
    phone: "416-615-0100",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@merupuramsripaththrakaliammantempletoronto.ca",
    whatsapp: "4166150100",
    description: "Merupuram Sri Paththrakali Amman Temple is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-072",
    slug: "sri-selvavinayagar-temple-toronto",
    name: "Sri Selvavinayagar Temple",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Toronto",
    province: "ON",
    address: "3411 McNicoll Ave, Toronto, ON M1V 4B7",
    phone: "416-299-9955",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@sriselvavinayagartempletoronto.ca",
    whatsapp: "4162999955",
    description: "Sri Selvavinayagar Temple is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-073",
    slug: "temple-585-533-1970-toronto",
    name: "Temple (585-533-1970)",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Toronto",
    province: "ON",
    address: "Toronto, ON",
    phone: "585-533-1970",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@templetoronto.ca",
    whatsapp: "5855331970",
    description: "Temple (585-533-1970) is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-074",
    slug: "toronto-sri-durka-hindu-temple-thurkeswaram-toronto",
    name: "Toronto Sri Durka Hindu Temple - Thurkeswaram",
    tamilName: "ஸ்ரீ வெங்கடேஸ்வரா / பெருமாள் ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Toronto",
    province: "ON",
    address: "30 Carnforth Road, Toronto, ON M4A 2K7",
    phone: "416-751-5151",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@torontosridurkahindutemplethurkeswaramtoronto.ca",
    whatsapp: "4167515151",
    description: "Toronto Sri Durka Hindu Temple - Thurkeswaram is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-075",
    slug: "canada-shri-muthumaari-amman-temple-toronto",
    name: "Canada Shri Muthumaari Amman Temple",
    tamilName: "அருள்மிகு ஸ்ரீ துர்க்கை அம்மன் ஆலயம்",
    moolavar: "Goddess Sri Durga Parameshwari",
    city: "Toronto",
    province: "ON",
    address: "1771 albion Road, Unit #1, Toronto, ON M9W 5S7, Toronto, ON M9W 5S7",
    phone: "416-213-0110",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@canadashrimuthumaariammantempletoronto.ca",
    whatsapp: "4162130110",
    description: "Canada Shri Muthumaari Amman Temple is a sacred place of worship and spiritual community hub serving devotees in Toronto, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-076",
    slug: "sri-katpagavinayakar-temple-brampton",
    name: "Sri Katpagavinayakar Temple",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Brampton",
    province: "ON",
    address: "200 Advanced Blvd, Unit 1 , Brampton, ON, L6T4V4, Brampton, ON L6T 4V4",
    phone: "416-471-0025",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srikatpagavinayakartemplebrampton.ca",
    whatsapp: "4164710025",
    description: "Sri Katpagavinayakar Temple is a sacred place of worship and spiritual community hub serving devotees in Brampton, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-077",
    slug: "varasithi-vinayagar-scarborough",
    name: "Varasithi Vinayagar",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Scarborough",
    province: "ON",
    address: "3025 Kennedy Road, Unit-10, Scarborough, ON, M1V1S3, Scarborough, ON M1V 1S3",
    phone: "416-291-8500",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@varasithivinayagarscarborough.ca",
    whatsapp: "4162918500",
    description: "Varasithi Vinayagar is a sacred place of worship and spiritual community hub serving devotees in Scarborough, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-078",
    slug: "sri-saparipeedam-temple-unit9-10",
    name: "Sri Saparipeedam Temple",
    tamilName: "கனடா தமிழ் இந்து கலாச்சார ஆலயம்",
    moolavar: "Lord Ganesha & Sri Murugan",
    city: "Unit9-10",
    province: "ON",
    address: "470 Chrysler Drive, Unit9-10, ON L6S 0C1",
    phone: "905-789-7844",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srisaparipeedamtempleunit.ca",
    whatsapp: "9057897844",
    description: "Sri Saparipeedam Temple is a sacred place of worship and spiritual community hub serving devotees in Unit9-10, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-079",
    slug: "ajax-pillayar-kovil-ambalavana-vetha-vinayagar-ajax",
    name: "Ajax Pillayar Kovil (ambalavana Vetha Vinayagar)",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Ajax",
    province: "ON",
    address: "282 Monarch Avenue, Ajax, ON L1S 2G6",
    phone: "647966-7219",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@ajaxpillayarkovilambalavanavethavinayagarajax.ca",
    whatsapp: "6479667219",
    description: "Ajax Pillayar Kovil (ambalavana Vetha Vinayagar) is a sacred place of worship and spiritual community hub serving devotees in Ajax, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-080",
    slug: "sri-katpaga-mahaganapathi-temple-montreal",
    name: "Sri Katpaga Mahaganapathi Temple",
    tamilName: "ஸ்ரீ கணபதி / வரசித்தி விநாயகர் திருக்கோவில்",
    moolavar: "Lord Ganesha (Maha Ganapathy)",
    city: "Montreal",
    province: "QC",
    address: "9865 Rue Clark, Montreal, QC H3L 2R5",
    phone: "514-381-1010",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srikatpagamahaganapathitemplemontreal.ca",
    whatsapp: "5143811010",
    description: "Sri Katpaga Mahaganapathi Temple is a sacred place of worship and spiritual community hub serving devotees in Montreal, QC and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-081",
    slug: "sri-thurgai-amman-temple-montreal",
    name: "Sri Thurgai Amman Temple",
    tamilName: "அருள்மிகு ஸ்ரீ துர்க்கை அம்மன் ஆலயம்",
    moolavar: "Goddess Sri Durga Parameshwari",
    city: "Montreal",
    province: "QC",
    address: "271 Jean Talon, Montreal, QC H2R 2X8",
    phone: "514-272-2956",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@srithurgaiammantemplemontreal.ca",
    whatsapp: "5142722956",
    description: "Sri Thurgai Amman Temple is a sacred place of worship and spiritual community hub serving devotees in Montreal, QC and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-082",
    slug: "the-sivananda-ashram-val-morin",
    name: "The Sivananda Ashram",
    tamilName: "ஸ்ரீ சிவா விஷ்ணு / சிவன் திருக்கோவில்",
    moolavar: "Lord Shiva (Kailasanathar / Somaskandar)",
    city: "Val-morin",
    province: "ON",
    address: "673, 8th Avenue, Val-morin, ON J0T 2R0",
    phone: "800-263-9642",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@thesivanandaashramvalmorin.ca",
    whatsapp: "8002639642",
    description: "The Sivananda Ashram is a sacred place of worship and spiritual community hub serving devotees in Val-morin, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
  {
    id: "tmpl-083",
    slug: "subramanya-ayyappa-temple-val-morin-val-morin",
    name: "Subramanya Ayyappa Temple (val Morin)",
    tamilName: "ஸ்ரீ முருகன் / கந்தசுவாமி திருக்கோவில்",
    moolavar: "Lord Murugan with Valli & Devasena",
    city: "Val-morin",
    province: "ON",
    address: "5305 Rue du Bel Automne, Val-morin, ON J0T 2R0",
    phone: "+1 416-555-0100",
    website: "https://tamilcanadianpages.ca/temples",
    email: "info@subramanyaayyappatemplevalmorinvalmorin.ca",
    whatsapp: "14165550100",
    description: "Subramanya Ayyappa Temple (val Morin) is a sacred place of worship and spiritual community hub serving devotees in Val-morin, ON and across Canada. The temple conducts traditional Agamic poojas, special abhishekams, Tamil spiritual classes, and major festival celebrations.",
    darshanHours: {
          "weekdayMorning": "8:00 AM – 1:00 PM",
          "weekdayEvening": "5:00 PM – 9:00 PM",
          "weekendHours": "8:00 AM – 9:00 PM (Continuous Darshan)",
          "specialDays": "Open all day during Pradosham, Pournami, Sashti & festival celebrations"
    },
    poojaTimings: [
          {
                "name": "Ushakkala Pooja",
                "tamilName": "உஷற்கால பூசை",
                "time": "8:30 AM",
                "description": "Morning nithya abhishekam & deeparadhana"
          },
          {
                "name": "Uchikala Pooja",
                "tamilName": "உச்சிகால பூசை",
                "time": "12:00 PM",
                "description": "Midday naivedyam and mangala arathi"
          },
          {
                "name": "Sayaratchai Pooja",
                "tamilName": "சாயரட்சை பூசை",
                "time": "6:30 PM",
                "description": "Evening sunset archana and veda parayanam"
          },
          {
                "name": "Arthajaama Pooja",
                "tamilName": "அர்த்தஜாம பூசை",
                "time": "8:30 PM",
                "description": "Night closing seva and deeparadhana"
          }
    ],
    festivals: [
          {
                "name": "Vinayagar Chaturthi & Navaratri",
                "tamilName": "விநாயகர் சதுர்த்தி & நவராத்திரி",
                "month": "August / October",
                "description": "Grand multi-day celebration with special alankarams, homams, and prasadam distribution."
          },
          {
                "name": "Maha Shivaratri & Panguni Uthiram",
                "tamilName": "மகா சிவராத்திரி & பங்குனி உத்திரம்",
                "month": "February / April",
                "description": "Night-long 4-kala abhishekams and chariot festival."
          },
          {
                "name": "Thai Pongal & Tamil New Year",
                "tamilName": "தைப்பொங்கல் & சித்திரை புதுவருடம்",
                "month": "January / April",
                "description": "Community harvest celebrations with special archana and traditional prasadam."
          }
    ],
    priestServices: ["Ganapathy Homam","Navagraha Homam","Ayush Homam","Vahana Pooja (Car Blessing)","Grihapravesham (House Warming)","Vivaham (Hindu Weddings)"],
    facilities: ["Prasadam Hall","Kalyana Mandapam (Community Hall)","Thevaram & Tamil Classes","Free Devotee Parking"],
    nearbyDiningSlugs: ["aathavan-unavakam","babu-takeout","canbe-foods"],
    featured: false,
  },
];


export function getAllTemples(): Temple[] {
  return TEMPLES;
}

export function getTempleBySlug(slug: string): Temple | null {
  return TEMPLES.find((t) => t.slug === slug) ?? null;
}

export function getFeaturedTemples(): Temple[] {
  return TEMPLES.filter((t) => t.featured);
}

export function getTemplesByCity(city: string): Temple[] {
  const norm = city.toLowerCase();
  return TEMPLES.filter((t) => t.city.toLowerCase() === norm);
}

export function getTemplesByProvince(province: string): Temple[] {
  const norm = province.toUpperCase();
  return TEMPLES.filter((t) => t.province.toUpperCase() === norm);
}

export function countTemplesByCity(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const t of TEMPLES) {
    const key = t.city.toLowerCase();
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

export function countTemplesByProvince(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const t of TEMPLES) {
    const key = t.province.toUpperCase();
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

export function searchTemples(query: string): Temple[] {
  const q = query.trim().toLowerCase();
  if (!q) return TEMPLES;
  return TEMPLES.filter((t) => {
    const hay = `${t.name} ${t.tamilName} ${t.moolavar} ${t.city} ${t.province} ${t.address} ${t.description} ${t.festivals.map((f) => f.name + " " + (f.tamilName || "")).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });
}
