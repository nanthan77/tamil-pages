import SellPage from "@/components/SellPage";

export const metadata = {
  title: "7-day Boost — $49",
  description: "Pin your Tamil business to the top of its city for 7 days. Paid. Listing stays free.",
};

export default function BoostPage() {
  return (
    <SellPage
      kicker="Paid add-on"
      title="7-day Boost"
      price="$49"
      body="When the shop is quiet, owners will pay a small one-time fee to jump the queue — same idea as Instagram boosts. Faster to sell than a monthly contract."
      kind="boost"
      cta="Buy a 7-day Boost"
      points={[
        "Sits above free listings in your city for 7 days",
        "“Boosted” badge on the card",
        "One-time payment — no subscription",
        "Best for restaurants, salons, and weekend sales",
      ]}
    />
  );
}
