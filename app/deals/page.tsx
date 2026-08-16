import SellPage from "@/components/SellPage";

export const metadata = {
  title: "Weekly deals — $39",
  description: "Pay to push a coupon or weekend deal to Tamil shoppers in your city.",
};

export default function DealsPage() {
  return (
    <SellPage
      kicker="Paid add-on"
      title="Weekly deal / coupon"
      price="$39 / week"
      body="Yellow Pages sold coupons for decades. Tamil grocers and takeout shops already run weekend specials — they will pay to put that deal on the homepage and in the city feed."
      kind="deal"
      cta="Submit a paid deal"
      points={[
        "Deal card on the city page and homepage strip",
        "Runs Saturday–Sunday or a full week",
        "You write the offer (e.g. “Free drink with kothu”)",
        "Listing itself stays free",
      ]}
    />
  );
}
