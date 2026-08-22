"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isSignInWithEmailLink, signInWithEmailLink, signOut, type User } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import {
  ALERT_CHANNELS,
  ALERT_DRAFT_STORAGE_KEY,
  ALERT_SUBSCRIPTIONS_COLLECTION,
  normalizeAlertEmail,
  parseAlertDraft,
  type AlertDraft,
} from "@/lib/alerts";
import { trackAlertSignupComplete } from "@/lib/analytics";

type ConfirmationState =
  | { status: "checking" }
  | { status: "success" }
  | { status: "error"; message: string };

let confirmationTask: Promise<ConfirmationState> | null = null;

function confirmationErrorMessage(error: unknown) {
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? String((error as { code?: unknown }).code)
      : "";

  if (code === "auth/expired-action-code" || code === "auth/invalid-action-code") {
    return "This confirmation link is invalid or has expired. Start again to receive a fresh link.";
  }
  if (code === "auth/invalid-email") {
    return "The confirmation email does not match this alert request. Start again with the correct address.";
  }
  if (code === "auth/network-request-failed" || code === "unavailable") {
    return "We could not reach Firebase. Check your connection, then reload this page to retry.";
  }
  if (code === "permission-denied") {
    return "Your email was confirmed, but the secure subscription could not be saved. Please try again later.";
  }

  return "We could not complete this confirmation. Start again or try the link once more.";
}

async function getConfirmedUser(draft: AlertDraft, href: string): Promise<User> {
  if (!isSignInWithEmailLink(auth, href)) {
    throw new Error("invalid-email-link");
  }

  const credential = await signInWithEmailLink(auth, draft.email, href);
  await credential.user.reload();
  await credential.user.getIdToken(true);
  return credential.user;
}

async function completeSubscription(): Promise<ConfirmationState> {
  let rawDraft: string | null = null;
  try {
    rawDraft = window.localStorage.getItem(ALERT_DRAFT_STORAGE_KEY);
  } catch {
    // The recovery message below explains why the same browser is needed.
  }

  const draft = parseAlertDraft(rawDraft);
  if (!draft) {
    try {
      window.localStorage.removeItem(ALERT_DRAFT_STORAGE_KEY);
    } catch {}
    return {
      status: "error",
      message:
        "Your short-lived alert draft is missing or expired. For privacy, preferences are not placed inside the email link. Please restart signup in this browser.",
    };
  }

  try {
    const user = await getConfirmedUser(draft, window.location.href);
    const confirmedEmail = normalizeAlertEmail(user.email || "");

    if (!user.emailVerified || confirmedEmail !== draft.email) {
      throw new Error("email-not-verified");
    }

    const subscriptionRef = doc(db, ALERT_SUBSCRIPTIONS_COLLECTION, user.uid);
    const existingSubscription = await getDoc(subscriptionRef);
    const createdAt = existingSubscription.exists()
      ? existingSubscription.get("createdAt")
      : serverTimestamp();

    if (existingSubscription.exists() && !createdAt) {
      throw new Error("invalid-existing-subscription");
    }

    await setDoc(subscriptionRef, {
      uid: user.uid,
      email: confirmedEmail,
      city: draft.city,
      topics: draft.topics,
      language: draft.language,
      frequency: draft.frequency,
      channels: [...ALERT_CHANNELS],
      status: "active",
      consentVersion: draft.consentVersion,
      consentText: draft.consentText,
      source: draft.source,
      createdAt,
      updatedAt: serverTimestamp(),
      confirmedAt: serverTimestamp(),
    });

    try {
      window.localStorage.removeItem(ALERT_DRAFT_STORAGE_KEY);
      window.history.replaceState(null, "", "/alerts/confirm");
    } catch {}

    void trackAlertSignupComplete(draft.topics.length, draft.language, draft.frequency);

    // The email link is used only to authorize this private write. The public
    // directory has a separate account system, so do not retain a Firebase
    // session after confirmation.
    await signOut(auth).catch(() => {});

    return { status: "success" };
  } catch (error) {
    return { status: "error", message: confirmationErrorMessage(error) };
  }
}

export default function EmailLinkConfirmation() {
  const [state, setState] = useState<ConfirmationState>({ status: "checking" });

  useEffect(() => {
    let active = true;
    confirmationTask ??= completeSubscription();
    void confirmationTask.then((result) => {
      if (active) setState(result);
    });
    return () => {
      active = false;
    };
  }, []);

  if (state.status === "checking") {
    return (
      <section
        aria-live="polite"
        aria-busy="true"
        className="mx-auto max-w-xl rounded-[2rem] border border-[#CBD5E1] bg-white p-8 text-center shadow-card sm:p-10"
      >
        <span className="mx-auto block h-10 w-10 animate-spin rounded-full border-4 border-[#CCE3F8] border-t-[#002D62]" aria-hidden="true" />
        <h1 className="mt-5 font-outfit text-2xl font-extrabold text-[#0F172A]">Confirming your email…</h1>
        <p className="mt-2 text-sm leading-6 text-[#64748B]">We are validating the secure link before saving your alert preferences.</p>
      </section>
    );
  }

  if (state.status === "error") {
    return (
      <section
        role="alert"
        className="mx-auto max-w-xl rounded-[2rem] border border-red-200 bg-white p-8 text-center shadow-card sm:p-10"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl text-[#B0041B]" aria-hidden="true">!</span>
        <h1 className="mt-5 font-outfit text-2xl font-extrabold text-[#0F172A]">Confirmation not completed</h1>
        <p className="mt-3 text-sm leading-6 text-[#475569]">{state.message}</p>
        <Link href="/alerts" className="btn-primary mt-6 inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-black">
          Start alert signup again
        </Link>
      </section>
    );
  }

  return (
    <section
      aria-live="polite"
      className="mx-auto max-w-xl rounded-[2rem] border border-emerald-200 bg-white p-8 text-center shadow-card sm:p-10"
    >
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl text-white" aria-hidden="true">✓</span>
      <h1 className="mt-5 font-outfit text-2xl font-extrabold text-[#0F172A]">Your alerts are confirmed</h1>
      <p className="mt-3 text-sm leading-6 text-[#475569]">
        Your private email preferences are saved for the email-alert pilot. Only the city, topics, language and frequency you selected will be used.
      </p>
      <p className="tamil mt-3 text-sm font-semibold text-emerald-800" lang="ta">
        உங்கள் மின்னஞ்சல் அறிவிப்பு விருப்பங்கள் வெற்றிகரமாக உறுதிப்படுத்தப்பட்டன.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-navy inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-black">
          Return to TamilCanadianPages
        </Link>
        <Link href="/alerts/manage" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#002D62] px-5 py-2.5 text-sm font-black text-[#002D62]">
          Manage or unsubscribe
        </Link>
      </div>
    </section>
  );
}
