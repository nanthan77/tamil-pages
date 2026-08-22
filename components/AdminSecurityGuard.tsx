"use client";

import Link from "next/link";
import {
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { auth } from "@/lib/firebase";
import { isAuthorizedAdminEmail } from "@/lib/admin";

const ADMIN_EMAIL_SESSION_KEY = "tcp_admin_email_for_sign_in";

type GuardState = "loading" | "signed-out" | "link-sent" | "authorized";

export default function AdminSecurityGuard({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GuardState>("loading");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    let active = true;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!active) return;

      if (user && user.emailVerified && isAuthorizedAdminEmail(user.email)) {
        setState("authorized");
        return;
      }

      if (user) await signOut(auth).catch(() => undefined);
      setState("signed-out");
    });

    const completeStoredEmailLink = async () => {
      if (!isSignInWithEmailLink(auth, window.location.href)) return;
      const storedEmail = window.sessionStorage.getItem(ADMIN_EMAIL_SESSION_KEY);
      if (!storedEmail) {
        setState("signed-out");
        return;
      }

      try {
        setPending(true);
        await signInWithEmailLink(auth, storedEmail, window.location.href);
        window.sessionStorage.removeItem(ADMIN_EMAIL_SESSION_KEY);
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch {
        setError("This sign-in link is invalid or has expired. Request a new link below.");
        setState("signed-out");
      } finally {
        setPending(false);
      }
    };

    void completeStoredEmailLink();
    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();
    if (!isAuthorizedAdminEmail(normalizedEmail)) {
      setError("This email is not authorized for the TamilCanadianPages admin area.");
      return;
    }

    setPending(true);
    try {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        await signInWithEmailLink(auth, normalizedEmail, window.location.href);
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      }

      await sendSignInLinkToEmail(auth, normalizedEmail, {
        url: `${window.location.origin}/admin`,
        handleCodeInApp: true,
      });
      window.sessionStorage.setItem(ADMIN_EMAIL_SESSION_KEY, normalizedEmail);
      setState("link-sent");
    } catch {
      setError("Admin sign-in could not be started. Check the Firebase email-link configuration and try again.");
    } finally {
      setPending(false);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    setEmail("");
    setState("signed-out");
  }

  if (state === "loading" || pending) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-[#F8FAFC] px-4">
        <p className="flex items-center gap-3 text-sm font-bold text-slate-600" role="status">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#002D62] border-t-transparent" />
          Checking secure admin access…
        </p>
      </main>
    );
  }

  if (state !== "authorized") {
    return (
      <main className="min-h-[70vh] bg-[#F8FAFC] px-4 py-14">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <div className="mb-5 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">🔒</div>
            <h1 className="font-outfit text-2xl font-extrabold text-[#0F172A]">Secure admin sign-in</h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Passwordless access is limited to the verified SafeNet administrator account.
            </p>
          </div>

          {state === "link-sent" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900" role="status">
              A secure sign-in link has been sent. Open it in this browser to continue.
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSignIn}>
              <label className="block space-y-1.5">
                <span className="text-sm font-bold text-slate-800">Authorized admin email</span>
                <input
                  autoComplete="email"
                  className="min-h-12 w-full rounded-xl border border-slate-300 px-4 text-base outline-none focus:border-[#002D62] focus:ring-2 focus:ring-blue-100"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  type="email"
                  value={email}
                />
              </label>
              {error ? <p className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">{error}</p> : null}
              <button className="btn-navy min-h-12 w-full rounded-xl px-5 text-sm font-black" type="submit">
                Email me a secure sign-in link
              </button>
            </form>
          )}

          <Link className="mt-5 block text-center text-sm font-bold text-slate-500 hover:text-[#002D62]" href="/">
            ← Return to the public directory
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 bg-[#0F172A] px-4 py-2 text-xs text-white sm:px-8">
        <span className="font-bold text-emerald-300">Verified Firebase admin session</span>
        <button className="font-bold text-white underline underline-offset-2" onClick={handleLogout} type="button">
          Sign out
        </button>
      </div>
      {children}
    </div>
  );
}
