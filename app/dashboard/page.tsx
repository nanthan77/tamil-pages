import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { listingsForOwner } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  const listings = listingsForOwner(user.id);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div className="bg-white rounded-[2.5rem] border border-[#CBD5E1] p-6 sm:p-8 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F7FF] text-[#002D62] border border-[#CCE3F8] text-[11px] font-black uppercase tracking-wider mb-2">
            <span>🍁</span> Vendor Dashboard
          </div>
          <h1 className="font-outfit font-extrabold text-2xl text-[#0F172A]">Welcome, {user.name}</h1>
          <p className="text-xs text-[#64748B] mt-0.5">{user.email}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/add-business"
            className="btn-primary rounded-xl px-5 py-2.5 text-xs font-black shadow"
          >
            + Add New Business
          </Link>
          <Link
            href="/pricing#reserve"
            className="rounded-xl px-5 py-2.5 text-xs font-black border border-[#E00624] text-[#E00624]"
          >
            Buy Featured ($29/mo)
          </Link>
        </div>
      </div>

      {listings.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#CBD5E1] p-10 text-center space-y-3 shadow-xs">
          <p className="text-[#0F172A] font-extrabold text-lg">You haven&apos;t posted any businesses yet.</p>
          <p className="text-[#64748B] text-xs max-w-sm mx-auto">
            Get your business listed in front of thousands of Tamil families in your city today.
          </p>
          <div className="pt-2">
            <Link
              href="/add-business"
              className="btn-primary inline-flex rounded-xl px-5 py-2.5 text-xs font-black shadow"
            >
              Post Your First Free Listing →
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <h2 className="font-outfit font-bold text-sm text-[#64748B] uppercase tracking-wider px-1">
            Your Active Canadian Listings ({listings.length})
          </h2>
          {listings.map((b) => (
            <div
              key={b.slug}
              className="bg-white rounded-2xl border border-[#CBD5E1] p-5 flex items-center justify-between gap-4 shadow-xs hover:border-[#002D62] transition"
            >
              <div>
                <Link
                  href={`/directory/${b.slug}`}
                  className="font-outfit font-extrabold text-base text-[#0F172A] hover:text-[#002D62]"
                >
                  {b.name}
                </Link>
                <p className="text-xs text-[#64748B] mt-0.5">
                  📍 {b.city}, {b.province} · 📞 {b.phone}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={`/directory/${b.slug}`}
                  className="text-xs font-bold text-[#002D62] hover:underline"
                >
                  View
                </Link>
                <form action="/api/businesses/delete" method="post">
                  <input type="hidden" name="slug" value={b.slug} />
                  <button className="text-xs font-bold text-[#E00624] hover:underline cursor-pointer">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
