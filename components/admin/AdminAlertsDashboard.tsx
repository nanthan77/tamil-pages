"use client";

import { collection, getDocs, limit, orderBy, query, type Timestamp } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { db } from "@/lib/firebase";

type AlertSubscription = {
  uid: string;
  email: string;
  city: string;
  topics: string[];
  language: string;
  frequency: string;
  status: string;
  createdAt?: Timestamp;
  confirmedAt?: Timestamp;
};

function formatTimestamp(value?: Timestamp) {
  return value?.toDate().toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short" }) || "—";
}

export default function AdminAlertsDashboard() {
  const [subscriptions, setSubscriptions] = useState<AlertSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const snapshot = await getDocs(
          query(collection(db, "alertSubscriptions"), orderBy("createdAt", "desc"), limit(100)),
        );
        setSubscriptions(snapshot.docs.map((item) => item.data() as AlertSubscription));
      } catch {
        setError("Subscriptions could not be loaded. Confirm the Firestore rules and administrator email before retrying.");
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, []);

  const activeCount = useMemo(
    () => subscriptions.filter((subscription) => subscription.status === "active").length,
    [subscriptions],
  );

  return (
    <main className="min-h-[70vh] bg-[#F8FAFC] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-3xl bg-[#002D62] p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">My Tamil Canada Alerts</p>
          <h1 className="mt-2 font-outfit text-3xl font-extrabold">Subscriber administration</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
            Private subscription data is read from Firestore only after a verified Firebase administrator signs in.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-3" aria-label="Subscription summary">
          <Metric label="Active subscribers" value={activeCount} />
          <Metric label="Loaded records" value={subscriptions.length} />
          <Metric label="Delivery channel" value="Email" />
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-outfit text-xl font-extrabold text-slate-900">Latest confirmed preferences</h2>
          </div>
          {loading ? <p className="p-6 text-sm text-slate-600" role="status">Loading subscriptions…</p> : null}
          {error ? <p className="m-5 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700" role="alert">{error}</p> : null}
          {!loading && !error && subscriptions.length === 0 ? (
            <p className="p-6 text-sm text-slate-600">No confirmed alert subscriptions yet.</p>
          ) : null}
          {!loading && !error && subscriptions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Email</th>
                    <th className="px-5 py-3">City</th>
                    <th className="px-5 py-3">Topics</th>
                    <th className="px-5 py-3">Language</th>
                    <th className="px-5 py-3">Frequency</th>
                    <th className="px-5 py-3">Confirmed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {subscriptions.map((subscription) => (
                    <tr key={subscription.uid}>
                      <td className="px-5 py-4 font-semibold text-slate-900">{subscription.email}</td>
                      <td className="px-5 py-4 text-slate-600">{subscription.city}</td>
                      <td className="px-5 py-4 text-slate-600">{subscription.topics.join(", ")}</td>
                      <td className="px-5 py-4 text-slate-600">{subscription.language}</td>
                      <td className="px-5 py-4 text-slate-600">{subscription.frequency}</td>
                      <td className="px-5 py-4 text-slate-600">{formatTimestamp(subscription.confirmedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 font-outfit text-3xl font-extrabold text-[#002D62]">{value}</p>
    </div>
  );
}
