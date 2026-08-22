export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "listing";
}

export function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "TP";
}

export function digitsPhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function whatsappLink(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  const full = digits.startsWith("1") ? digits : `1${digits}`;
  return `https://wa.me/${full}`;
}

export function mapsLink(address: string, name: string) {
  const q = encodeURIComponent(address || name);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function telLink(phone: string) {
  return `tel:${digitsPhone(phone)}`;
}

export function citySlug(city: string) {
  return slugify(city);
}

// Timezone-safe date formatting that never shifts day backwards
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return "";
  const clean = dateStr.split("T")[0];
  const [y, m, d] = clean.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export function formatDisplayDateShort(dateStr: string): string {
  if (!dateStr) return "";
  const clean = dateStr.split("T")[0];
  const [y, m, d] = clean.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ${d}, ${y}`;
}

export function getCanadianTodayFormatted(): string {
  return new Date().toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  try {
    const trimmed = url.trim();
    // 1. Shorts
    if (trimmed.includes("youtube.com/shorts/")) {
      const id = trimmed.split("youtube.com/shorts/")[1]?.split(/[?&]/)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // 2. youtu.be/ID
    if (trimmed.includes("youtu.be/")) {
      const id = trimmed.split("youtu.be/")[1]?.split(/[?&]/)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // 3. watch?v=ID
    if (trimmed.includes("watch?v=")) {
      const id = trimmed.split("watch?v=")[1]?.split(/[?&]/)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // 4. embed/ID
    if (trimmed.includes("youtube.com/embed/")) {
      return trimmed;
    }
    return null;
  } catch {
    return null;
  }
}

export interface CategoryTheme {
  icon: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  highlightTag: string;
  tamilTag: string;
  features: string[];
}

export function getCategoryTheme(categorySlug: string): CategoryTheme {
  switch (categorySlug) {
    case "restaurants-takeout":
    case "bakeries-sweets":
    case "catering-event-food":
    case "grocery-supermarkets":
      return {
        icon: "🍛",
        gradient: "from-[#991B1B] via-[#E00624] to-[#78350F]",
        badgeBg: "bg-red-50 border-red-200",
        badgeText: "text-[#B0041B]",
        borderColor: "border-red-200",
        highlightTag: "Authentic Ceylon & South Indian Flavors",
        tamilTag: "சுவையான தமிழ் உணவு & சுடச்சுட உபசரிப்பு",
        features: ["Takeout & Dine-In Available", "Pure Veg & Halal Options", "Authentic Spices & Recipes", "Catering & Bulk Party Trays"],
      };

    case "legal-immigration":
      return {
        icon: "⚖️",
        gradient: "from-[#001F45] via-[#002D62] to-[#0A4D92]",
        badgeBg: "bg-blue-50 border-blue-200",
        badgeText: "text-[#002D62]",
        borderColor: "border-blue-200",
        highlightTag: "Certified Legal Counsel & Notary Public",
        tamilTag: "நம்பகமான சட்ட ஆலோசனை & குடியுரிமை வழிகாட்டுதல்",
        features: ["Super Visa & Family Sponsorship", "Express Entry & Work Permits", "Real Estate Closings & Wills", "Notary Public & Affidavits"],
      };

    case "real-estate-property":
    case "insurance":
      return {
        icon: "🏡",
        gradient: "from-[#064E3B] via-[#047857] to-[#0F766E]",
        badgeBg: "bg-emerald-50 border-emerald-200",
        badgeText: "text-emerald-800",
        borderColor: "border-emerald-200",
        highlightTag: "Top-Tier Canadian Real Estate & Mortgages",
        tamilTag: "கனடா வீடு வாங்க & விற்க சிறந்த வழிகாட்டி",
        features: ["GTA & Pan-Canada Listings", "Pre-Construction VIP Access", "First-Time Home Buyer Rebates", "Competitive Mortgage Rates"],
      };

    case "accounting-financial":
      return {
        icon: "📊",
        gradient: "from-[#1E293B] via-[#334155] to-[#0F172A]",
        badgeBg: "bg-slate-100 border-slate-300",
        badgeText: "text-slate-800",
        borderColor: "border-slate-300",
        highlightTag: "Certified CPA Tax Advisory & Bookkeeping",
        tamilTag: "முறையான கணக்கியல் & வரி சேமிப்பு திட்டங்கள்",
        features: ["Personal T1 & Corporate T2 Filing", "CRA Audit Defense & Review", "Payroll & HST Reporting", "Business Incorporation Setup"],
      };

    case "medical-dental":
    case "fitness-wellness":
      return {
        icon: "🩺",
        gradient: "from-[#0E7490] via-[#0284C7] to-[#0369A1]",
        badgeBg: "bg-cyan-50 border-cyan-200",
        badgeText: "text-cyan-900",
        borderColor: "border-cyan-200",
        highlightTag: "Tamil-Speaking Healthcare & Wellness Clinic",
        tamilTag: "அக்கறையான தமிழ் மருத்துவர்கள் & குடும்ப நல மையம்",
        features: ["Walk-In & Family Medicine", "Dental Implants & Cleaning", "Physiotherapy & Rehab", "Direct Insurance Billing"],
      };

    case "tuition-education":
      return {
        icon: "🎓",
        gradient: "from-[#581C87] via-[#7E22CE] to-[#9333EA]",
        badgeBg: "bg-purple-50 border-purple-200",
        badgeText: "text-purple-900",
        borderColor: "border-purple-200",
        highlightTag: "MTO Certified Instruction & Academic Tutoring",
        tamilTag: "சிறந்த கல்வி வழிகாட்டல் & டிரைவிங் பயிற்சி",
        features: ["G2 & G Road Test Preparation", "High School Math & Science", "Tamil Language & Cultural Classes", "Defensive Driving Certificate"],
      };

    case "auto-mechanics":
    case "construction-trades":
      return {
        icon: "🔧",
        gradient: "from-[#B45309] via-[#D97706] to-[#78350F]",
        badgeBg: "bg-amber-50 border-amber-200",
        badgeText: "text-amber-900",
        borderColor: "border-amber-200",
        highlightTag: "Licensed Trades & Master Mechanics",
        tamilTag: "நம்பகமான மெக்கானிக் & கட்டட பழுதுபார்ப்பு சேவைகள்",
        features: ["Safety Inspection Certificates", "Emergency Breakdown & Towing", "HVAC, Plumbing & Electrical", "Full Home Renovations"],
      };

    default:
      return {
        icon: "🍁",
        gradient: "from-[#001F45] via-[#002D62] to-[#E00624]",
        badgeBg: "bg-slate-50 border-slate-200",
        badgeText: "text-[#002D62]",
        borderColor: "border-slate-200",
        highlightTag: "Verified Canadian Tamil Business",
        tamilTag: "கனடா வாழ் தமிழ் சமூகத்தின் அங்கீகரிக்கப்பட்ட வணிகம்",
        features: ["Direct Customer Connect", "Verified Business Details", "100% Commission-Free", "Fast Turnaround & Support"],
      };
  }
}

