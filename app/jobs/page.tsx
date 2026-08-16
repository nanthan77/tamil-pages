import SellPage from "@/components/SellPage";

export const metadata = {
  title: "Post a job — $49",
  description: "Paid job posts for Tamil businesses hiring in Canada. Cooks, clerks, drivers, tutors.",
};

export default function JobsPage() {
  return (
    <SellPage
      kicker="Paid add-on"
      title="Job post"
      price="$49 / 30 days"
      body="Tamil restaurants, grocers, and warehouses hire constantly. Indeed charges more. A $49 post on a Tamil-only board is an easy yes."
      kind="job"
      cta="Post a paid job"
      points={[
        "Live for 30 days in Jobs + your city",
        "Applicants email or WhatsApp you directly",
        "Good for cooks, cashiers, drivers, cleaners, tutors",
        "Bundle 5 posts for $199",
      ]}
    />
  );
}
