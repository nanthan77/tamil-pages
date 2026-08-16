export type Category = {
  slug: string;
  name: string;
  tamil: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  { slug: "restaurants-takeout", name: "Restaurants & Takeout", tamil: "உணவகங்கள்", icon: "fa-utensils" },
  { slug: "bakeries-sweets", name: "Bakeries & Sweets", tamil: "பேக்கரி & இனிப்பு", icon: "fa-bread-slice" },
  { slug: "catering-event-food", name: "Catering & Events Food", tamil: "விருந்தோம்பல்", icon: "fa-bowl-food" },
  { slug: "grocery-supermarkets", name: "Grocery & Supermarkets", tamil: "மளிகைக் கடைகள்", icon: "fa-basket-shopping" },
  { slug: "legal-immigration", name: "Legal & Immigration", tamil: "சட்டம் & குடியேற்றம்", icon: "fa-scale-balanced" },
  { slug: "accounting-financial", name: "Accounting & Financial", tamil: "கணக்கு & நிதி", icon: "fa-calculator" },
  { slug: "real-estate-property", name: "Real Estate & Property", tamil: "வீடு & சொத்து", icon: "fa-house" },
  { slug: "medical-dental", name: "Medical & Dental Clinics", tamil: "மருத்துவம்", icon: "fa-stethoscope" },
  { slug: "salons-beauty", name: "Salons & Beauty Care", tamil: "அழகு நிலையம்", icon: "fa-scissors" },
  { slug: "tuition-education", name: "Tuition & Education", tamil: "கல்வி", icon: "fa-graduation-cap" },
  { slug: "it-web", name: "IT & Web Development", tamil: "தகவல் தொழில்நுட்பம்", icon: "fa-laptop-code" },
  { slug: "auto-mechanics", name: "Auto Care & Mechanics", tamil: "வாகன சேவை", icon: "fa-car" },
  { slug: "photography-events", name: "Photography & Events", tamil: "புகைப்படம் & நிகழ்வு", icon: "fa-camera" },
  { slug: "temples-community", name: "Temples & Community", tamil: "கோயில் & சமூகம்", icon: "fa-om" },
  { slug: "media-publishing", name: "Media & Publishing", tamil: "ஊடகம்", icon: "fa-tower-broadcast" },
  { slug: "fashion-jewellery", name: "Fashion & Jewellery", tamil: "ஆடை & நகை", icon: "fa-gem" },
  { slug: "travel-tours", name: "Travel & Tour Operators", tamil: "பயணம்", icon: "fa-plane" },
  { slug: "construction-trades", name: "Construction & Trades", tamil: "கட்டுமானம்", icon: "fa-helmet-safety" },
  { slug: "transport-moving", name: "Transport & Moving", tamil: "போக்குவரத்து", icon: "fa-truck" },
  { slug: "fitness-wellness", name: "Fitness & Wellness", tamil: "உடற்பயிற்சி", icon: "fa-dumbbell" },
  { slug: "printing-design", name: "Printing & Graphic Design", tamil: "அச்சு & வடிவமைப்பு", icon: "fa-print" },
  { slug: "insurance", name: "Insurance", tamil: "காப்பீடு", icon: "fa-shield-halved" },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
