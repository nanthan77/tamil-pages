export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
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
