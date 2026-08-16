import SellPage from "@/components/SellPage";

export const metadata = {
  title: "Wedding vendor pack — $99/mo",
  description: "Paid package for Tamil wedding halls, catering, jewellery, photography and makeup in Canada.",
};

export default function WeddingsPage() {
  return (
    <SellPage
      kicker="Highest ticket add-on"
      title="Wedding vendor pack"
      price="$99 / month"
      body="A Tamil wedding in the GTA can spend $30k–$80k. Halls, catering, jewellery, photography, and makeup will pay to be in front of families who are booking."
      kind="wedding"
      cta="Join the wedding pack"
      points={[
        "Listed in a dedicated Weddings directory",
        "Featured on event and temple pages in season",
        "Enquiry form (quote lead) on your profile",
        "Annual option: $990 (2 months free)",
      ]}
    />
  );
}
