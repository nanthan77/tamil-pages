import Link from "next/link";
import { getSessionUser } from "@/lib/auth";
import { listingsForOwner } from "@/lib/store";

export default async function DashboardPage() {
  const user = await getSessionUser();
  const listings = user ? listingsForOwner(user.id) : [];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-8 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider mb-2">
            <span>🍁</span> Vendor Dashboard
          </div>
          <h1 className="font-outfit font-extrabold text-2xl text-[#0F172A]">
            {user ? `Welcome, ${user.name}` : "Canadian Business Portal"}
          </h1>
          <p className="text-xs text-[#64748B] mt-0.5">
            {user?.email || "Manage and update your listings across Canada"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/add-business"
            className="btn-primary rounded-xl px-5 py-2.5 text-xs font-black shadow"
          >
            + Add New Business
          </Link>
          <Link
            href="/pricing"
            className="btn-navy rounded-xl px-4 py-2.5 text-xs font-bold"
          >
            Upgrade Ad Slot
          </Link>
        </div>
      </div>

      <section className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-8 space-y-6 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="font-outfit font-extrabold text-lg text-[#0F172A]">Your Active Listings</h2>
          <span className="text-xs font-bold text-[#64748B]">{listings.length} live</span>
        </div>

        {listings.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-[#CBD5E1] rounded-3xl space-y-3">
            <span className="text-3xl">🏬</span>
            <p className="text-sm font-bold text-[#0F172A]">
              {user ? "You haven't posted any business listings yet." : "Sign in to manage your Canadian listings."}
            </p>
            <p className="text-xs text-[#64748B]">
              Add your store, restaurant, clinic, or service in under 2 minutes.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              {!user && (
                <Link href="/login" className="btn-navy rounded-xl px-4 py-2 text-xs font-bold">
                  Sign In
                </Link>
              )}
              <Link
                href="/add-business"
                className="btn-primary rounded-xl px-4 py-2 text-xs font-bold shadow"
              >
                + Post Business Free
              </Link>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-[#E2E8F0]">
            {listings.map((b) => (
              <div key={b.id} className="py-4 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-sm text-[#0F172A]">{b.name}</h3>
                  <p className="text-xs text-[#64748B]">
                    🍁 {b.city}, {b.province} · {b.category}
                  </p>
                </div>
                <Link
                  href={`/directory/${b.slug}`}
                  className="text-xs font-bold text-[#002D62] hover:text-[#E00624] underline"
                >
                  View Listing →
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
