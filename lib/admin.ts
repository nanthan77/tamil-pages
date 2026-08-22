export const AUTHORIZED_ADMIN_EMAILS = (
  process.env.NEXT_PUBLIC_ADMIN_EMAILS || "info@safenetcreations.com"
)
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export function isAuthorizedAdminEmail(email: string | null | undefined) {
  return Boolean(email && AUTHORIZED_ADMIN_EMAILS.includes(email.trim().toLowerCase()));
}
