"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
  type User,
} from "firebase/auth";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import {
  ALERT_SUBSCRIPTIONS_COLLECTION,
  isValidAlertEmail,
  normalizeAlertEmail,
} from "@/lib/alerts";

const MANAGEMENT_EMAIL_SESSION_KEY = "tamilpages.alerts.manage-email.v1";

type StoredPreferences = {
  city: string;
  topics: string[];
  language: string;
  frequency: string;
};

type ManageState =
  | "request"
  | "sending"
  | "sent"
  | "confirming"
  | "ready"
  | "deleting"
  | "not-found"
  | "unsubscribed";

function friendlyError(error: unknown) {
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? String((error as { code?: unknown }).code)
      : "";

  if (code === "auth/expired-action-code" || code === "auth/invalid-action-code") {
    return "This management link is invalid or expired. Request a fresh link below.";
  }
  if (code === "auth/invalid-email") {
    return "Enter the same email address that received this management link.";
  }
  if (code === "auth/too-many-requests" || code === "auth/quota-exceeded") {
    return "Too many requests were made. Please wait a little and try again.";
  }
  if (code === "auth/unauthorized-continue-uri" || code === "auth/unauthorized-domain") {
    return "Alert management is not available on this website address yet.";
  }
  if (code === "permission-denied") {
    return "Your email was confirmed, but the private preferences could not be accessed.";
  }
  return "We could not complete this request. Please try again.";
}

export default function AlertManagement() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<ManageState>("request");
  const [error, setError] = useState("");
  const [pendingEmailLink, setPendingEmailLink] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [preferences, setPreferences] = useState<StoredPreferences | null>(null);

  useEffect(() => {
    if (!isSignInWithEmailLink(auth, window.location.href)) return;

    const storedEmail = window.sessionStorage.getItem(MANAGEMENT_EMAIL_SESSION_KEY);
    setPendingEmailLink(true);
    if (storedEmail) {
      setEmail(storedEmail);
      void completeSignIn(storedEmail);
    }
    // The completion function intentionally runs only for the email-link URL
    // present at first load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function completeSignIn(value: string) {
    const normalizedEmail = normalizeAlertEmail(value);
    if (!isValidAlertEmail(normalizedEmail)) {
      setError("Enter the same valid email address that received this management link.");
      return;
    }

    setState("confirming");
    setError("");
    try {
      const credential = await signInWithEmailLink(auth, normalizedEmail, window.location.href);
      await credential.user.reload();
      await credential.user.getIdToken(true);

      if (!credential.user.emailVerified || normalizeAlertEmail(credential.user.email || "") !== normalizedEmail) {
        throw new Error("email-not-verified");
      }

      const subscriptionRef = doc(db, ALERT_SUBSCRIPTIONS_COLLECTION, credential.user.uid);
      const snapshot = await getDoc(subscriptionRef);

      window.sessionStorage.removeItem(MANAGEMENT_EMAIL_SESSION_KEY);
      window.history.replaceState(null, "", "/alerts/manage");
      setPendingEmailLink(false);

      if (!snapshot.exists()) {
        await signOut(auth).catch(() => undefined);
        setState("not-found");
        return;
      }

      const data = snapshot.data();
      setUser(credential.user);
      setPreferences({
        city: typeof data.city === "string" ? data.city : "",
        topics: Array.isArray(data.topics) ? data.topics.filter((item): item is string => typeof item === "string") : [],
        language: typeof data.language === "string" ? data.language : "",
        frequency: typeof data.frequency === "string" ? data.frequency : "",
      });
      setState("ready");
    } catch (caught) {
      await signOut(auth).catch(() => undefined);
      setState("request");
      setError(friendlyError(caught));
    }
  }

  async function handleRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = normalizeAlertEmail(email);
    if (!isValidAlertEmail(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    if (pendingEmailLink) {
      await completeSignIn(normalizedEmail);
      return;
    }

    setState("sending");
    setError("");
    try {
      await sendSignInLinkToEmail(auth, normalizedEmail, {
        url: `${window.location.origin}/alerts/manage`,
        handleCodeInApp: true,
      });
      window.sessionStorage.setItem(MANAGEMENT_EMAIL_SESSION_KEY, normalizedEmail);
      setState("sent");
    } catch (caught) {
      setState("request");
      setError(friendlyError(caught));
    }
  }

  async function handleUnsubscribe() {
    if (!user) return;
    setState("deleting");
    setError("");
    try {
      await deleteDoc(doc(db, ALERT_SUBSCRIPTIONS_COLLECTION, user.uid));
      await signOut(auth).catch(() => undefined);
      setUser(null);
      setPreferences(null);
      setState("unsubscribed");
    } catch (caught) {
      setState("ready");
      setError(friendlyError(caught));
    }
  }

  if (state === "confirming" || state === "deleting") {
    return (
      <section className="rounded-[2rem] border border-[#CBD5E1] bg-white p-8 text-center shadow-card" aria-live="polite">
        <span className="mx-auto block h-10 w-10 animate-spin rounded-full border-4 border-[#CCE3F8] border-t-[#002D62]" aria-hidden="true" />
        <h1 className="mt-5 font-outfit text-2xl font-extrabold text-[#0F172A]">
          {state === "deleting" ? "Removing your alert preferences…" : "Opening your private preferences…"}
        </h1>
      </section>
    );
  }

  if (state === "sent" || state === "not-found" || state === "unsubscribed") {
    const content = {
      sent: ["Check your email", "We sent a secure management link. Open it to view or remove the alert preferences for that address."],
      "not-found": ["No active preferences found", "The confirmed email address does not currently have a TamilCanadianPages alert subscription."],
      unsubscribed: ["You are unsubscribed", "Your alert preference document has been removed. No further pilot emails should be sent for this subscription."],
    }[state];

    return (
      <section className="rounded-[2rem] border border-emerald-200 bg-white p-8 text-center shadow-card" aria-live="polite">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl text-white" aria-hidden="true">✓</span>
        <h1 className="mt-5 font-outfit text-2xl font-extrabold text-[#0F172A]">{content[0]}</h1>
        <p className="mt-3 text-sm leading-6 text-[#475569]">{content[1]}</p>
        <Link href="/alerts" className="btn-navy mt-6 inline-flex min-h-11 items-center rounded-xl px-5 py-2.5 text-sm font-black">
          Return to alerts
        </Link>
      </section>
    );
  }

  if (state === "ready" && preferences) {
    return (
      <section className="rounded-[2rem] border border-[#CBD5E1] bg-white p-6 shadow-card sm:p-8">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#E00624]">Confirmed subscriber</p>
        <h1 className="mt-2 font-outfit text-3xl font-extrabold text-[#0F172A]">Manage your alerts</h1>
        <dl className="mt-6 grid gap-3 rounded-2xl bg-[#F8FAFC] p-5 text-sm sm:grid-cols-2">
          <Preference label="City" value={preferences.city} />
          <Preference label="Topics" value={preferences.topics.join(", ")} />
          <Preference label="Language" value={preferences.language} />
          <Preference label="Frequency" value={preferences.frequency} />
        </dl>
        {error ? <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-[#B0041B]" role="alert">{error}</p> : null}
        <p className="mt-5 text-sm leading-6 text-[#475569]">
          Removing these preferences unsubscribes this confirmed address from the email-alert pilot. You can join again later with a new confirmation.
        </p>
        <button type="button" onClick={handleUnsubscribe} className="mt-5 min-h-12 rounded-xl bg-[#B0041B] px-5 py-3 text-sm font-black text-white hover:bg-[#8D0316]">
          Unsubscribe and remove my preferences
        </button>
      </section>
    );
  }

  return (
    <section className="rounded-[2rem] border border-[#CBD5E1] bg-white p-6 shadow-card sm:p-8">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#E00624]">Private email verification</p>
      <h1 className="mt-2 font-outfit text-3xl font-extrabold text-[#0F172A]">Manage or unsubscribe</h1>
      <p className="mt-3 text-sm leading-6 text-[#475569]">
        {pendingEmailLink
          ? "Enter the same address that received this link to open its private preferences."
          : "Enter your subscribed email address. We will send a passwordless link before showing or changing anything."}
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleRequest}>
        <label className="block" htmlFor="manage-alert-email">
          <span className="text-sm font-extrabold text-[#0F172A]">Email address</span>
          <input
            id="manage-alert-email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
            className="mt-2 min-h-12 w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-base outline-none focus:bg-white"
          />
        </label>
        {error ? <p className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-[#B0041B]" role="alert">{error}</p> : null}
        <button type="submit" disabled={state === "sending"} className="btn-primary min-h-12 w-full rounded-2xl px-5 py-3 text-sm font-black disabled:opacity-70">
          {state === "sending" ? "Sending secure link…" : pendingEmailLink ? "Open my preferences" : "Email my management link"}
        </button>
      </form>
    </section>
  );
}

function Preference({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-black uppercase tracking-wide text-[#64748B]">{label}</dt>
      <dd className="mt-1 font-semibold capitalize text-[#0F172A]">{value || "—"}</dd>
    </div>
  );
}
