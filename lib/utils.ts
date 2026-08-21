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
