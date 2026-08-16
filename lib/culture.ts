export type CulturalCategory =
  | "Tamil Language School"
  | "Bharatanatyam Dance"
  | "Bharatanatyam & Dance"
  | "Carnatic Vocal & Music"
  | "Miruthangam & Percussion"
  | "Veena & Instrumental"
  | "Violin & Flute"
  | "School Board Heritage Program";

export type CulturalSchool = {
  id: string;
  slug: string;
  name: string;
  tamilName?: string;
  category: CulturalCategory;
  discipline: string; // e.g. "Tamil Language & Literature", "Bharatanatyam (Kalakshetra / Pandanallur)", "Carnatic Vocal", "Miruthangam & Kanjira"
  city: string;
  province: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  ageGroups: string; // e.g. "JK - Grade 12 & Adults"
  curriculum: string; // e.g. "Ontario Ministry of Education Credit / Traditional Agam"
  description: string;
  branches?: string[];
  featured: boolean;
};

export const CULTURAL_SCHOOLS: CulturalSchool[] = [
  // --- TAMIL LANGUAGE SCHOOLS & BOARDS ---
  {
    id: "cult-001",
    slug: "thamil-cholai-scarborough-central",
    name: "Thamil Cholai Tamil Language Academy (Birchmount Campus)",
    tamilName: "தமிழ்ச் சோலை தமிழ் மொழிப் பள்ளி (ரொறன்ரோ)",
    category: "Tamil Language School",
    discipline: "Tamil Language, Grammar, Literature & Public Speaking",
    city: "Scarborough",
    province: "ON",
    address: "2050 Birchmount Rd, Scarborough, ON M1T 2K9",
    phone: "+1 416-291-7640",
    email: "info@thamilcholai.ca",
    website: "https://thamilcholai.ca",
    ageGroups: "JK to Grade 12, Youth & Adult Classes",
    curriculum: "Structured Graded Tamil Curriculum & Ontario High School Credit Preparation",
    description:
      "One of Canada's oldest and largest Tamil heritage schools, teaching reading, writing, classical literature, Thirukkural recitation, and public speaking to over 1,500 students each weekend.",
    branches: ["Scarborough", "Markham", "Brampton", "Mississauga", "Pickering"],
    featured: true,
  },
  {
    id: "cult-002",
    slug: "thamil-cholai-markham-campus",
    name: "Thamil Cholai Markham Campus (McCowan)",
    tamilName: "தமிழ்ச் சோலை மார்க்கம் வளாகம்",
    category: "Tamil Language School",
    discipline: "Tamil Reading, Writing, Poetry & Speech",
    city: "Markham",
    province: "ON",
    address: "7690 McCowan Rd, Markham, ON L3P 7H9",
    phone: "+1 905-471-8890",
    email: "markham@thamilcholai.ca",
    ageGroups: "Kindergarten to Grade 12",
    curriculum: "York Region Tamil Heritage & High School Credit Pathway",
    description:
      "Serving Markham and Richmond Hill families with weekend language immersion, speech contests, and annual Tamil cultural showcases.",
    featured: true,
  },
  {
    id: "cult-003",
    slug: "thamil-cholai-brampton-campus",
    name: "Thamil Cholai Brampton Campus (Steeles)",
    tamilName: "தமிழ்ச் சோலை பிராம்ப்டன் வளாகம்",
    category: "Tamil Language School",
    discipline: "Tamil Language & Cultural Heritage",
    city: "Brampton",
    province: "ON",
    address: "510 Steeles Ave E, Brampton, ON L6W 4S3",
    phone: "+1 905-456-1122",
    email: "brampton@thamilcholai.ca",
    ageGroups: "Ages 4 to 18",
    curriculum: "Peel Region Tamil Curriculum with Oral Fluency Training",
    description:
      "Dedicated Brampton campus empowering Western GTA students with reading, writing, Tamil drama, and traditional heritage.",
    featured: true,
  },
  {
    id: "cult-004",
    slug: "tdsb-international-languages-tamil-program",
    name: "TDSB International Languages Tamil Credit Program",
    tamilName: "ரொறன்ரோ மாவட்டக் கல்விச் சபை தமிழ் மொழித் திட்டம்",
    category: "School Board Heritage Program",
    discipline: "Ontario Ministry of Education High School Tamil Credit Courses",
    city: "Toronto",
    province: "ON",
    address: "5050 Yonge St, Toronto, ON M2N 5N8",
    phone: "+1 416-397-3000",
    website: "https://www.tdsb.on.ca/community/community-languages",
    ageGroups: "Elementary (JK-8) and High School Credit (Grades 9-12)",
    curriculum: "Ontario Ministry of Education Official Credit Curriculum (LTAAD, LTABD, LTACD, LTADO)",
    description:
      "Official high school credit courses and elementary weekend programs offered across dozens of TDSB high schools and elementary centers in Scarborough and North York.",
    featured: true,
  },
  {
    id: "cult-005",
    slug: "pdsb-international-languages-tamil-classes",
    name: "Peel District School Board (PDSB) Tamil Heritage Program",
    tamilName: "பீல் மாவட்டக் கல்விச் சபை தமிழ் மொழி வகுப்புகள்",
    category: "School Board Heritage Program",
    discipline: "Elementary & Secondary Tamil Language Credits",
    city: "Mississauga",
    province: "ON",
    address: "5650 Hurontario St, Mississauga, ON L5R 1C6",
    phone: "+1 905-890-1010",
    website: "https://www.peelschools.org",
    ageGroups: "JK to Grade 12",
    curriculum: "Ontario Ministry of Education High School Credits",
    description:
      "Weekend international languages Tamil classes across Mississauga and Brampton schools, enabling students to gain official university-recognized Ontario Secondary School Diploma (OSSD) language credits.",
    featured: false,
  },
  {
    id: "cult-006",
    slug: "montreal-tamil-vidyalayam",
    name: "Montreal Tamil Vidyalayam (Quebec Tamil School)",
    tamilName: "மொண்ட்ரியால் தமிழ் வித்தியாலயம்",
    category: "Tamil Language School",
    discipline: "Tamil Language, French-Tamil Bilingual Literacy & Arts",
    city: "Montreal",
    province: "QC",
    address: "4995 Rue Bélanger, Montréal, QC H1T 1C8",
    phone: "+1 514-727-8899",
    email: "info@montrealtamilvidyalayam.org",
    website: "https://montrealtamilvidyalayam.org",
    ageGroups: "Ages 4 to Adults",
    curriculum: "Quebec Heritage Language Framework & Jaffna University Graded System",
    description:
      "Quebec's flagship Tamil language academy founded in 1988. Teaches Tamil literacy, poetry, debates, drama, and classical music to hundreds of students in Greater Montreal and Laval.",
    featured: true,
  },
  {
    id: "cult-007",
    slug: "vancouver-thiruvalluvar-tamil-school",
    name: "Vancouver Thiruvalluvar Tamil School (BC Tamil Academy)",
    tamilName: "வான்கூவர் திருவள்ளுவர் தமிழ்ப் பள்ளி",
    category: "Tamil Language School",
    discipline: "Tamil Language, Thirukkural & Canadian Tamil Heritage",
    city: "Surrey",
    province: "BC",
    address: "13880 72 Ave, Surrey, BC V3W 2E7",
    phone: "+1 604-590-3434",
    email: "thiruvalluvarschool@gmail.com",
    website: "https://bctamilsangam.com",
    ageGroups: "Ages 5 to 17",
    curriculum: "BC Heritage Language Association Curriculum",
    description:
      "The premier Tamil language academy for Metro Vancouver and the Fraser Valley, operating weekend classes in Surrey and Burnaby.",
    featured: true,
  },
  {
    id: "cult-008",
    slug: "calgary-tamil-academy",
    name: "Calgary Tamil Academy (Alberta Heritage School)",
    tamilName: "கல்கரி தமிழ்க் கல்வி நிலையம்",
    category: "Tamil Language School",
    discipline: "Tamil Reading, Writing, Speech & Debate",
    city: "Calgary",
    province: "AB",
    address: "333 17 Ave SE, Calgary, AB T2A 0Y3",
    phone: "+1 403-568-1290",
    email: "calgarytamilacademy@gmail.com",
    ageGroups: "Kindergarten to Grade 12",
    curriculum: "Southern Alberta Heritage Language Framework",
    description:
      "Nurturing Tamil linguistic proficiency and cultural roots for youth across Calgary, Airdrie, Chestermere, and Cochrane.",
    featured: true,
  },
  {
    id: "cult-009",
    slug: "edmonton-tamil-school",
    name: "Edmonton Tamil Academy (Northern Alberta)",
    tamilName: "எட்மண்டன் தமிழ்ப் பள்ளி",
    category: "Tamil Language School",
    discipline: "Tamil Language & Cultural Studies",
    city: "Edmonton",
    province: "AB",
    address: "12838 52 St NW, Edmonton, AB T5A 3P8",
    phone: "+1 780-478-2244",
    email: "edmontontamilschool@gmail.com",
    ageGroups: "Ages 5 to 16",
    curriculum: "Alberta Community Heritage Language Guidelines",
    description:
      "Held every weekend at the Maha Ganapathy Temple cultural wing, teaching Tamil grammar, literature, and speech to Northern Alberta youth.",
    featured: false,
  },
  {
    id: "cult-010",
    slug: "winnipeg-tamil-school-manitoba",
    name: "Winnipeg Tamil School (Manitoba Cultural Program)",
    tamilName: "வின்னிபெக் தமிழ்ப் பள்ளி (மனிடோபா)",
    category: "Tamil Language School",
    discipline: "Tamil Language & Fine Arts",
    city: "Winnipeg",
    province: "MB",
    address: "999 St Anne's Rd, Winnipeg, MB R2N 4G5",
    phone: "+1 204-255-0810",
    email: "manitobatamils@gmail.com",
    ageGroups: "Ages 4 to 17",
    curriculum: "Manitoba Heritage Language Association Program",
    description:
      "Preserving Tamil heritage on the Prairies with reading, writing, Tamil oratory, and Annual Pongal cultural showcases.",
    featured: false,
  },
  {
    id: "cult-011",
    slug: "halifax-tamil-school-nova-scotia",
    name: "Halifax Tamil Academy (Nova Scotia)",
    tamilName: "ஹாலிஃபாக்ஸ் தமிழ்ப் பள்ளி (நோவா ஸ்கோஷியா)",
    category: "Tamil Language School",
    discipline: "Tamil Language Basics, Grammar & Heritage",
    city: "Halifax",
    province: "NS",
    address: "442 Parkland Dr, Halifax, NS B3S 1N9",
    phone: "+1 902-443-4215",
    email: "halifaxtamilacademy@gmail.com",
    ageGroups: "All Youth & Adults",
    curriculum: "Atlantic Canada Heritage Language Program",
    description:
      "Weekend Tamil classes connecting the growing Tamil diaspora community in Nova Scotia and Atlantic Canada.",
    featured: false,
  },

  // --- BHARATANATYAM DANCE ACADEMIES ---
  {
    id: "cult-012",
    slug: "kala-darshana-institute-fine-arts-markham",
    name: "Kala Darshana Institute of Fine Arts (Bharatanatyam)",
    tamilName: "கலா தர்ஷனா நுண்கலைக் கல்லூரி (பரதநாட்டியம்)",
    category: "Bharatanatyam Dance",
    discipline: "Classical Bharatanatyam (Kalakshetra Bani), Theory & Nattuvangam",
    city: "Markham",
    province: "ON",
    address: "7270 Woodbine Ave, Markham, ON L3R 4B9",
    phone: "+1 905-477-9200",
    email: "admissions@kaladarshana.ca",
    website: "https://kaladarshana.ca",
    ageGroups: "Ages 5 to Adults (Beginner to Arangetram & Post-Graduate)",
    curriculum: "Kalakshetra Foundation & Annamalai University Fine Arts Examination Board",
    description:
      "One of Canada's most prestigious Bharatanatyam institutions. Trained over 200 dancers to their maiden solo Arangetram debut with live orchestral accompaniment.",
    featured: true,
  },
  {
    id: "cult-013",
    slug: "abhinayakshetra-school-of-dance-scarborough",
    name: "Abhinayakshetra School of Classical Dance",
    tamilName: "அபிநயக்ஷேத்ரா நடனப் பள்ளி (ரொறன்ரோ)",
    category: "Bharatanatyam Dance",
    discipline: "Bharatanatyam, Abhinaya, Nattuvangam & Folk Dance",
    city: "Scarborough",
    province: "ON",
    address: "2450 Lawrence Ave E, Scarborough, ON M1P 2R7",
    phone: "+1 416-751-8822",
    email: "info@abhinayakshetra.ca",
    ageGroups: "Ages 5 to Adults",
    curriculum: "Traditional Thanjavur / Kalakshetra Style & Grade Exams",
    description:
      "Renowned for rigorous adavu training, expressive bhavam, masterclasses by visiting gurus from Chennai, and grand annual dance drama productions in the GTA.",
    featured: true,
  },
  {
    id: "cult-014",
    slug: "nirthana-dance-academy-toronto",
    name: "Nirthana Classical Dance Academy",
    tamilName: "நர்த்தனா நடனக் கல்லூரி (ரொறன்ரோ)",
    category: "Bharatanatyam Dance",
    discipline: "Bharatanatyam (Vazhuvoor Bani) & Carnatic Rhythm",
    city: "Scarborough",
    province: "ON",
    address: "1150 Ellesmere Rd, Scarborough, ON M1P 2X4",
    phone: "+1 416-298-4450",
    email: "contact@nirthana.com",
    ageGroups: "Ages 4 to 25",
    curriculum: "Vazhuvoor Tradition & Bridgepoint Fine Arts Certification",
    description:
      "Specializing in graceful Vazhuvoor style Bharatanatyam, rhythm coordination, and preparing advanced disciples for solo Arangetrams.",
    featured: false,
  },
  {
    id: "cult-015",
    slug: "natya-kala-mandhir-brampton",
    name: "Natya Kala Mandhir School of Dance",
    tamilName: "நாட்டிய கலா மந்திர் (பிராம்ப்டன்)",
    category: "Bharatanatyam Dance",
    discipline: "Bharatanatyam, Semi-Classical & South Indian Folk",
    city: "Brampton",
    province: "ON",
    address: "140 Advance Blvd, Brampton, ON L6T 4Z8",
    phone: "+1 905-791-6677",
    email: "natyakala.brampton@gmail.com",
    ageGroups: "Ages 5 to Adults",
    curriculum: "Graded Bharatanatyam Examination Board of Ontario",
    description:
      "Leading dance school in Brampton and Mississauga offering year-round classes, stage recitals, and competitive youth festival training.",
    featured: true,
  },
  {
    id: "cult-016",
    slug: "nrithyalaya-dance-school-mississauga",
    name: "Nrithyalaya School of Bharatanatyam (Mississauga & Oakville)",
    tamilName: "நிருத்யாலயா நடனப் பள்ளி (மிசிசாகா)",
    category: "Bharatanatyam Dance",
    discipline: "Bharatanatyam & Indian Classical Dance Choreography",
    city: "Mississauga",
    province: "ON",
    address: "3038 Hurontario St, Mississauga, ON L5B 3K7",
    phone: "+1 905-276-8800",
    email: "nrithyalaya.mississauga@gmail.com",
    ageGroups: "Ages 4 to 22",
    curriculum: "Traditional Margam Structure & Arangetram Certification",
    description:
      "Dedicated to fostering classical discipline, rhythm awareness, and stage confidence for young Canadian dancers in Peel and Halton regions.",
    featured: false,
  },
  {
    id: "cult-017",
    slug: "natyarpana-dance-academy-richmond-hill",
    name: "Natyarpana Dance Academy (Richmond Hill & Markham)",
    tamilName: "நாட்டியார்ப்பணா நடன அகாடமி",
    category: "Bharatanatyam Dance",
    discipline: "Bharatanatyam, Tala System & Abhinaya Studies",
    city: "Richmond Hill",
    province: "ON",
    address: "10865 Bayview Ave, Richmond Hill, ON L4S 1M1",
    phone: "+1 905-883-9110",
    email: "natyarpana.rh@gmail.com",
    ageGroups: "Ages 5 to Adults",
    curriculum: "Annamalai University Canada Directorate",
    description:
      "Located adjacent to the Richmond Hill Hindu Temple cultural wing, providing pure classical dance training in York Region.",
    featured: false,
  },
  {
    id: "cult-018",
    slug: "montreal-natya-niketan",
    name: "Montreal Natya Niketan (Quebec Indian Classical Dance)",
    tamilName: "மொண்ட்ரியால் நாட்டிய நிகேதன்",
    category: "Bharatanatyam Dance",
    discipline: "Bharatanatyam & Fusion Classical Dance",
    city: "Montreal",
    province: "QC",
    address: "2465 Rue Bélanger, Montréal, QC H2G 1E4",
    phone: "+1 514-722-7780",
    email: "natyaniketan.mtl@gmail.com",
    ageGroups: "All Ages",
    curriculum: "Kalakshetra Classical Tradition",
    description:
      "Quebec's premier classical Tamil dance academy, frequently featured at Montreal international cultural festivals and temple events.",
    featured: true,
  },
  {
    id: "cult-019",
    slug: "shri-nritya-dance-academy-vancouver",
    name: "Shri Nritya Dance Academy (Vancouver & Surrey)",
    tamilName: "ஸ்ரீ நிருத்தியா நடனப் பள்ளி (வான்கூவர்)",
    category: "Bharatanatyam Dance",
    discipline: "Classical Bharatanatyam & Carnatic Rhythms",
    city: "Surrey",
    province: "BC",
    address: "14050 72 Ave, Surrey, BC V3W 2P6",
    phone: "+1 604-599-1212",
    email: "shrinrityadance@gmail.com",
    ageGroups: "Ages 5 to Adults",
    curriculum: "Classical Margam & Royal Academy of Indian Dance Guidelines",
    description:
      "British Columbia's foremost Tamil classical dance school, producing acclaimed dancers, Arangetrams, and annual stage festivals across Metro Vancouver.",
    featured: true,
  },
  {
    id: "cult-020",
    slug: "alberta-natya-kala-academy-calgary",
    name: "Alberta Natya Kala Academy (Calgary)",
    tamilName: "அல்பெர்ட்டா நாட்டிய கலா அகாடமி",
    category: "Bharatanatyam Dance",
    discipline: "Bharatanatyam & Classical South Indian Dance",
    city: "Calgary",
    province: "AB",
    address: "4203 17 Ave SE, Calgary, AB T2A 0T2",
    phone: "+1 403-248-2839",
    email: "albertanatyakala@gmail.com",
    ageGroups: "Ages 5 to 20",
    curriculum: "Traditional Indian Classical Examination Syllabus",
    description:
      "Training Western Canadian youth in classical adavus, jatis, varnams, and tillanas at the Calgary Murugan Temple Cultural wing.",
    featured: false,
  },

  // --- CARNATIC VOCAL & THEVARAM INSTITUTES ---
  {
    id: "cult-021",
    slug: "shruthi-laya-music-academy-scarborough",
    name: "Shruthi Laya Carnatic Music Academy",
    tamilName: "சுருதி லய கர்நாடக இசைக் கல்லூரி (ரொறன்ரோ)",
    category: "Carnatic Vocal & Music",
    discipline: "Carnatic Classical Vocal, Thevaram, Thiruvasagam & Keerthanas",
    city: "Scarborough",
    province: "ON",
    address: "2250 Midland Ave, Scarborough, ON M1P 4R9",
    phone: "+1 416-292-3344",
    email: "info@shruthilayamusic.ca",
    website: "https://shruthilayamusic.ca",
    ageGroups: "Ages 5 to Adults (Beginner to Vidwan Diploma)",
    curriculum: "Bridgepoint Fine Arts Examination & Annamalai Music Diploma",
    description:
      "Teaching Sarali Varisais, Janta Varisais, Geethams, Varnams, and saint Thyagaraja / Dikshitar / Papanasam Sivan / Tamil Thevaram compositions. Annual Tyagaraja Aradhana participation.",
    featured: true,
  },
  {
    id: "cult-022",
    slug: "sangeetha-kalamandram-mississauga",
    name: "Sangeetha Kalamandram Classical Music School",
    tamilName: "சங்கீத கலாமன்றம் (மிசிசாகா)",
    category: "Carnatic Vocal & Music",
    discipline: "Carnatic Vocal & Classical Theory",
    city: "Mississauga",
    province: "ON",
    address: "1100 Central Pkwy W, Mississauga, ON L5C 4E5",
    phone: "+1 905-270-3400",
    email: "sangeethakalamandram@gmail.com",
    ageGroups: "Ages 5 to Adults",
    curriculum: "Graded Classical Music Syllabus",
    description:
      "Western GTA center of excellence for classical vocal music, voice culture training, raga identification, and stage performance preparation.",
    featured: true,
  },
  {
    id: "cult-023",
    slug: "naadha-inbam-vocal-institute-markham",
    name: "Naadha Inbam Carnatic Vocal Institute (Markham)",
    tamilName: "நாத இன்பம் சங்கீத கல்லூரி (மார்க்கம்)",
    category: "Carnatic Vocal & Music",
    discipline: "Vocal Music, Devotional Songs & Manodharma Sangeetham",
    city: "Markham",
    province: "ON",
    address: "7690 McCowan Rd, Markham, ON L3P 7H9",
    phone: "+1 905-471-9988",
    email: "naadhainbam.markham@gmail.com",
    ageGroups: "Ages 6 to Adults",
    curriculum: "Traditional Guru-Shishya Classical Method",
    description:
      "Specializing in pitch precision (shruti), laya mastery, and training students for vocal Arangetrams and youth concert platforms.",
    featured: false,
  },
  {
    id: "cult-024",
    slug: "ottawa-carnatic-sangeetha-vidyalayam",
    name: "Ottawa Carnatic Sangeetha Vidyalayam",
    tamilName: "ஒட்டாவா கர்நாடக சங்கீத வித்தியாலயம்",
    category: "Carnatic Vocal & Music",
    discipline: "Carnatic Vocal & Devotional Music",
    city: "Ottawa",
    province: "ON",
    address: "4865 Bank St, Gloucester, Ottawa, ON K1X 1G6",
    phone: "+1 613-822-1532",
    email: "ottawamusicvidyalayam@gmail.com",
    ageGroups: "All Ages",
    curriculum: "National Capital Classical Music Syllabus",
    description:
      "Connecting Tamil children and music lovers in Ottawa-Gatineau with classical vocal training and Tyagaraja Aradhana celebrations.",
    featured: false,
  },
  {
    id: "cult-025",
    slug: "montreal-isai-manram",
    name: "Montreal Isai Manram (Quebec Carnatic Academy)",
    tamilName: "மொண்ட்ரியால் இசை மன்றம்",
    category: "Carnatic Vocal & Music",
    discipline: "Vocal, Violin Accompaniment & Thevaram Recitations",
    city: "Montreal",
    province: "QC",
    address: "4995 Rue Bélanger, Montréal, QC H1T 1C8",
    phone: "+1 514-727-8890",
    email: "isaimanram.mtl@gmail.com",
    ageGroups: "Ages 5 to Adults",
    curriculum: "Quebec South Asian Classical Sangeetham Board",
    description:
      "Nurturing classical vocalists in Montreal with regular chamber concerts, Navarathri music festivals, and student recitals.",
    featured: true,
  },

  // --- MIRUTHANGAM & PERCUSSION ---
  {
    id: "cult-026",
    slug: "laya-vadya-miruthangam-academy-toronto",
    name: "Laya Vadya Academy of Miruthangam & Percussion",
    tamilName: "லய வாத்யா மிருதங்கக் கல்லூரி (ரொறன்ரோ & மார்க்கம்)",
    category: "Miruthangam & Percussion",
    discipline: "Miruthangam (Pudukkottai & Thanjavur Bani), Ghatam, Kanjira & Morsing",
    city: "Scarborough",
    province: "ON",
    address: "3850 Sheppard Ave E, Scarborough, ON M1T 3L4",
    phone: "+1 416-754-8899",
    email: "layavadya.toronto@gmail.com",
    website: "https://layavadya.ca",
    ageGroups: "Ages 6 to Adults",
    curriculum: "Tala Shastram, Konnakol (Vocal Percussion) & Arangetram Diploma",
    description:
      "Canada's premier percussion school led by senior vidwans. Students learn basic fingering, Tha-Dhi-Gi-Na-Thom solkattu, intricate korvais, and concert accompaniment for vocalists and Bharatanatyam dancers.",
    featured: true,
  },
  {
    id: "cult-027",
    slug: "brampton-laya-percussion-school",
    name: "Peel Miruthangam & Rhythm Academy (Brampton)",
    tamilName: "பீல் மிருதங்க இசைப் பள்ளி (பிராம்ப்டன்)",
    category: "Miruthangam & Percussion",
    discipline: "Miruthangam, Thavil & Konnakol Rhythms",
    city: "Brampton",
    province: "ON",
    address: "147 Wilkinson Rd, Brampton, ON L6T 4X1",
    phone: "+1 905-455-8890",
    email: "peelmiruthangam@gmail.com",
    ageGroups: "Ages 6 to Adults",
    curriculum: "Graded Percussion Examinations",
    description:
      "Western GTA training center for young percussionists, offering step-by-step tala mastery, accompaniment skills, and stage debuts.",
    featured: false,
  },
  {
    id: "cult-028",
    slug: "prairie-rhythms-miruthangam-calgary",
    name: "Prairie Rhythms Miruthangam Academy (Calgary & Edmonton)",
    tamilName: "கல்கரி மிருதங்கப் பள்ளி (அல்பெர்ட்டா)",
    category: "Miruthangam & Percussion",
    discipline: "Miruthangam & South Indian Classical Rhythm",
    city: "Calgary",
    province: "AB",
    address: "4203 17 Ave SE, Calgary, AB T2A 0T2",
    phone: "+1 403-248-2840",
    email: "calgarymiruthangam@gmail.com",
    ageGroups: "Ages 7 to Adults",
    curriculum: "Traditional Tala System & Solo Recital Prep",
    description:
      "Alberta's dedicated school for Miruthangam, training rhythm artists for classical vocal and dance accompaniments in the Prairies.",
    featured: false,
  },

  // --- VEENA, VIOLIN & INSTRUMENTAL ---
  {
    id: "cult-029",
    slug: "swaralayam-veena-academy-scarborough",
    name: "Swaralayam Saraswathi Veena Academy",
    tamilName: "ஸ்வரலயம் சரஸ்வதி வீணைக் கல்லூரி (ரொறன்ரோ)",
    category: "Veena & Instrumental",
    discipline: "Saraswathi Veena (Mysore & Thanjavur Bani), Gamakas & Instrumental Solo",
    city: "Scarborough",
    province: "ON",
    address: "170 Nugget Ave, Scarborough, ON M1S 3A7",
    phone: "+1 416-291-7668",
    email: "veena.swaralayam@gmail.com",
    ageGroups: "Ages 7 to Adults",
    curriculum: "Traditional Veena Notation & Concert Arangetram Syllabus",
    description:
      "Dedicated to the sacred divine instrument Saraswathi Veena. Teaches finger plucking (Meetu), fretting precision, subtle gamakas, and major classical compositions.",
    featured: true,
  },
  {
    id: "cult-030",
    slug: "nada-laya-carnatic-violin-institute-markham",
    name: "Nada Laya Carnatic Violin Institute (Markham)",
    tamilName: "நாத லய கர்நாடக வயலின் கல்லூரி (மார்க்கம்)",
    category: "Violin & Flute",
    discipline: "Carnatic Classical Violin (Solo & Vocal Accompaniment)",
    city: "Markham",
    province: "ON",
    address: "7270 Woodbine Ave, Markham, ON L3R 4B9",
    phone: "+1 905-477-9201",
    email: "violin.nadalaya@gmail.com",
    ageGroups: "Ages 6 to Adults",
    curriculum: "Indian Classical Violin Fingering & Bowing Technique",
    description:
      "Training disciples in the traditional sitting posture, gamaka intonation, raga alapana, and concert accompaniment for vocalists and dancers.",
    featured: true,
  },
  {
    id: "cult-031",
    slug: "vancouver-carnatic-sangeetha-sangam",
    name: "Vancouver Carnatic Sangeetha Sangam (Violin & Vocal)",
    tamilName: "வான்கூவர் கர்நாடக சங்கீத சங்கம்",
    category: "Carnatic Vocal & Music",
    discipline: "Carnatic Vocal, Violin, Veena & Flute",
    city: "Vancouver",
    province: "BC",
    address: "2092 Kingsway, Vancouver, BC V5N 2T3",
    phone: "+1 604-874-9215",
    email: "vancouvercarnatic@gmail.com",
    ageGroups: "All Ages",
    curriculum: "Pacific Rim Classical South Asian Music Syllabus",
    description:
      "Serving British Columbia with classical vocal, violin, and instrumental training, hosting annual Tyagaraja Aradhana and chamber concerts.",
    featured: true,
  },
];

export function getAllCulturalSchools(): CulturalSchool[] {
  return CULTURAL_SCHOOLS;
}

export function getSchoolBySlug(slug: string): CulturalSchool | null {
  return CULTURAL_SCHOOLS.find((s) => s.slug === slug) ?? null;
}

export function getSchoolsByCity(city: string): CulturalSchool[] {
  const norm = city.trim().toLowerCase();
  return CULTURAL_SCHOOLS.filter((s) => s.city.toLowerCase() === norm);
}

export function getSchoolsByCategory(cat: CulturalCategory): CulturalSchool[] {
  return CULTURAL_SCHOOLS.filter((s) => s.category.toLowerCase() === cat.toLowerCase());
}

export function searchCulturalSchools(query: string): CulturalSchool[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllCulturalSchools();
  return CULTURAL_SCHOOLS.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      (s.tamilName && s.tamilName.toLowerCase().includes(q)) ||
      s.category.toLowerCase().includes(q) ||
      s.discipline.toLowerCase().includes(q) ||
      s.city.toLowerCase().includes(q) ||
      s.province.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q) ||
      s.curriculum.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q),
  );
}
