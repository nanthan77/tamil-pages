"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { CITIES } from "@/lib/cities";
import {
  ALERT_CONSENT_TEXT,
  ALERT_DRAFT_STORAGE_KEY,
  ALERT_FREQUENCIES,
  ALERT_LANGUAGES,
  ALERT_TOPICS,
  createAlertDraft,
  isValidAlertEmail,
  normalizeAlertEmail,
  validateAlertPreferences,
  type AlertFrequency,
  type AlertLanguage,
  type AlertTopic,
} from "@/lib/alerts";
import {
  trackAlertConfirmationLinkSent,
  trackAlertSignupView,
  trackAlertTopicSelected,
} from "@/lib/analytics";

type FormErrors = Partial<Record<"email" | "city" | "topics" | "language" | "frequency" | "consent" | "form", string>>;

function friendlyAuthError(error: unknown) {
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? String((error as { code?: unknown }).code)
      : "";

  if (code === "auth/invalid-email" || code === "auth/missing-email") {
    return "Enter a valid email address.";
  }
  if (code === "auth/too-many-requests" || code === "auth/quota-exceeded") {
    return "Too many confirmation requests were made. Please wait a little and try again.";
  }
  if (code === "auth/network-request-failed") {
    return "We could not reach the confirmation service. Check your connection and try again.";
  }
  if (code === "auth/unauthorized-continue-uri" || code === "auth/unauthorized-domain") {
    return "Email confirmation is not available on this website address yet. Please try again later.";
  }
  if (code === "auth/operation-not-allowed") {
    return "Passwordless email confirmation has not been enabled yet. Please try again later.";
  }

  return "We could not send the confirmation email. Please try again.";
}

export default function AlertSignupForm() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("scarborough");
  const [topics, setTopics] = useState<AlertTopic[]>(["movies", "weekend"]);
  const [language, setLanguage] = useState<AlertLanguage>("bilingual");
  const [frequency, setFrequency] = useState<AlertFrequency>("friday");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void trackAlertSignupView();
  }, []);

  useEffect(() => {
    if (Object.values(errors).some(Boolean)) {
      errorSummaryRef.current?.focus();
    }
  }, [errors]);

  function toggleTopic(topic: AlertTopic) {
    setTopics((current) => {
      const selected = current.includes(topic);
      const next = selected ? current.filter((item) => item !== topic) : [...current, topic];
      void trackAlertTopicSelected(topic, !selected);
      return next;
    });
    setErrors((current) => ({ ...current, topics: undefined, form: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const normalizedEmail = normalizeAlertEmail(email);
    const preferenceErrors = validateAlertPreferences({ city, topics, language, frequency });
    const nextErrors: FormErrors = { ...preferenceErrors };

    if (!isValidAlertEmail(normalizedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!consent) {
      nextErrors.consent = "Confirm that you agree to receive the selected alert emails.";
    }

    if (Object.keys(nextErrors).length > 0) {
      nextErrors.form = "Please review the highlighted fields.";
      setErrors(nextErrors);
      return;
    }

    const draft = createAlertDraft({
      email: normalizedEmail,
      city,
      topics,
      language,
      frequency,
    });

    setErrors({});
    setStatus("sending");

    try {
      // The email link may open in a new tab, so keep only this short-lived,
      // validated confirmation draft in local storage and remove it on failure.
      window.localStorage.setItem(ALERT_DRAFT_STORAGE_KEY, JSON.stringify(draft));

      const confirmationUrl = new URL("/alerts/confirm", window.location.origin);
      await sendSignInLinkToEmail(auth, normalizedEmail, {
        url: confirmationUrl.toString(),
        handleCodeInApp: true,
      });

      void trackAlertConfirmationLinkSent(draft.topics.length, draft.language, draft.frequency);
      setStatus("sent");
    } catch (error) {
      try {
        window.localStorage.removeItem(ALERT_DRAFT_STORAGE_KEY);
      } catch {}
      setStatus("idle");
      setErrors({ form: friendlyAuthError(error) });
    }
  }

  if (status === "sent") {
    return (
      <section
        aria-labelledby="confirmation-sent-title"
        className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 sm:p-8 shadow-card"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl text-white" aria-hidden="true">
          ✓
        </div>
        <h2 id="confirmation-sent-title" className="mt-5 font-outfit text-2xl font-extrabold text-[#0F172A]">
          Check your email to confirm
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#334155]">
          We sent a secure passwordless confirmation link. Your alert preferences are not written to Firestore until you open that link.
        </p>
        <p className="tamil mt-3 text-sm font-semibold text-emerald-900" lang="ta">
          உறுதிப்படுத்தும் இணைப்பைத் திறந்த பிறகே உங்கள் அறிவிப்பு விருப்பங்கள் சேமிக்கப்படும்.
        </p>
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-white p-4 text-xs leading-5 text-[#475569]">
          The link should arrive shortly. Check your spam folder if needed, and open it in this browser so the short-lived preference draft can be completed securely.
        </div>
        <button
          type="button"
          onClick={() => {
            try {
              window.localStorage.removeItem(ALERT_DRAFT_STORAGE_KEY);
            } catch {}
            setStatus("idle");
            setConsent(false);
          }}
          className="mt-5 min-h-11 rounded-xl border border-[#002D62] bg-white px-4 py-2.5 text-sm font-extrabold text-[#002D62] transition hover:bg-[#F0F7FF]"
        >
          Use a different email
        </button>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "sending"}
      className="rounded-[2rem] border border-[#CBD5E1] bg-white p-5 shadow-card sm:p-8"
    >
      <div className="border-b border-[#E2E8F0] pb-5">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#E00624]">Email alerts</p>
        <h2 className="mt-1 font-outfit text-2xl font-extrabold text-[#0F172A]">Choose what reaches your inbox</h2>
        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          No password, no WhatsApp opt-in and no cold broadcasts. Confirm once by email to activate your choices.
        </p>
      </div>

      {Object.values(errors).some(Boolean) && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-[#B0041B] outline-none focus:ring-2 focus:ring-[#E00624]"
        >
          {errors.form || "Please review the highlighted fields."}
        </div>
      )}

      <div className="mt-6 space-y-7">
        <label className="block" htmlFor="alert-email">
          <span className="block text-sm font-extrabold text-[#0F172A]">Email address</span>
          <span className="mt-1 block text-xs leading-5 text-[#64748B]">We will send a passwordless confirmation link to this address.</span>
          <input
            id="alert-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={254}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((current) => ({ ...current, email: undefined, form: undefined }));
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "alert-email-error" : "alert-email-help"}
            className="mt-2 min-h-12 w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-base outline-none focus:bg-white"
            placeholder="you@example.ca"
          />
          <span id="alert-email-help" className="sr-only">Enter the email address where you want to receive alerts.</span>
          {errors.email && <span id="alert-email-error" className="mt-1.5 block text-xs font-bold text-[#B0041B]">{errors.email}</span>}
        </label>

        <label className="block" htmlFor="alert-city">
          <span className="block text-sm font-extrabold text-[#0F172A]">Your city</span>
          <span className="mt-1 block text-xs leading-5 text-[#64748B]">We use this only to make alerts locally relevant.</span>
          <select
            id="alert-city"
            name="city"
            required
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
              setErrors((current) => ({ ...current, city: undefined, form: undefined }));
            }}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "alert-city-error" : undefined}
            className="mt-2 min-h-12 w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-base outline-none focus:bg-white"
          >
            {CITIES.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}, {item.province}
              </option>
            ))}
          </select>
          {errors.city && <span id="alert-city-error" className="mt-1.5 block text-xs font-bold text-[#B0041B]">{errors.city}</span>}
        </label>

        <fieldset aria-describedby={errors.topics ? "alert-topics-error" : undefined}>
          <legend className="text-sm font-extrabold text-[#0F172A]">What would you like to follow?</legend>
          <p className="mt-1 text-xs leading-5 text-[#64748B]">Choose one or more topics. Movie and weekend alerts are selected by default.</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {ALERT_TOPICS.map((topic) => {
              const selected = topics.includes(topic.id);
              return (
                <label
                  key={topic.id}
                  className={`flex min-h-28 cursor-pointer gap-3 rounded-2xl border p-4 transition focus-within:ring-2 focus-within:ring-[#002D62] ${
                    selected ? "border-[#002D62] bg-[#F0F7FF]" : "border-[#CBD5E1] bg-white hover:border-[#94A3B8]"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="topics"
                    value={topic.id}
                    checked={selected}
                    onChange={() => toggleTopic(topic.id)}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#002D62]"
                  />
                  <span>
                    <span className="block text-sm font-extrabold text-[#0F172A]">
                      <span className="mr-1.5" aria-hidden="true">{topic.icon}</span>
                      {topic.label}
                    </span>
                    <span className="tamil mt-0.5 block text-xs font-semibold text-[#B0041B]" lang="ta">{topic.tamilLabel}</span>
                    <span className="mt-1.5 block text-xs leading-5 text-[#64748B]">{topic.description}</span>
                  </span>
                </label>
              );
            })}
          </div>
          {errors.topics && <p id="alert-topics-error" className="mt-2 text-xs font-bold text-[#B0041B]">{errors.topics}</p>}
        </fieldset>

        <fieldset aria-describedby={errors.language ? "alert-language-error" : undefined}>
          <legend className="text-sm font-extrabold text-[#0F172A]">Language</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {ALERT_LANGUAGES.map((option) => (
              <label
                key={option.id}
                className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-bold transition focus-within:ring-2 focus-within:ring-[#002D62] ${
                  language === option.id ? "border-[#002D62] bg-[#F0F7FF] text-[#002D62]" : "border-[#CBD5E1] text-[#475569]"
                }`}
              >
                <input
                  type="radio"
                  name="language"
                  value={option.id}
                  checked={language === option.id}
                  onChange={() => {
                    setLanguage(option.id);
                    setErrors((current) => ({ ...current, language: undefined, form: undefined }));
                  }}
                  className="h-4 w-4 accent-[#002D62]"
                />
                <span lang={option.id === "ta" ? "ta" : undefined}>{option.label}</span>
              </label>
            ))}
          </div>
          {errors.language && <p id="alert-language-error" className="mt-2 text-xs font-bold text-[#B0041B]">{errors.language}</p>}
        </fieldset>

        <fieldset aria-describedby={errors.frequency ? "alert-frequency-error" : undefined}>
          <legend className="text-sm font-extrabold text-[#0F172A]">How often?</legend>
          <div className="mt-3 space-y-2">
            {ALERT_FREQUENCIES.map((option) => (
              <label
                key={option.id}
                className={`flex min-h-14 cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition focus-within:ring-2 focus-within:ring-[#002D62] ${
                  frequency === option.id ? "border-[#002D62] bg-[#F0F7FF]" : "border-[#CBD5E1]"
                }`}
              >
                <input
                  type="radio"
                  name="frequency"
                  value={option.id}
                  checked={frequency === option.id}
                  onChange={() => {
                    setFrequency(option.id);
                    setErrors((current) => ({ ...current, frequency: undefined, form: undefined }));
                  }}
                  className="mt-0.5 h-4 w-4 accent-[#002D62]"
                />
                <span>
                  <span className="block text-sm font-extrabold text-[#0F172A]">{option.label}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-[#64748B]">{option.description}</span>
                </span>
              </label>
            ))}
          </div>
          {errors.frequency && <p id="alert-frequency-error" className="mt-2 text-xs font-bold text-[#B0041B]">{errors.frequency}</p>}
        </fieldset>

        <div className="rounded-2xl border border-[#CCE3F8] bg-[#F0F7FF] p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#002D62] text-white" aria-hidden="true">✉</span>
            <div>
              <p className="text-sm font-extrabold text-[#0F172A]">Email only for this MVP</p>
              <p className="mt-1 text-xs leading-5 text-[#475569]">Browser notifications and WhatsApp are not enabled and are not included in this consent.</p>
            </div>
          </div>
        </div>

        <div>
          <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 ${errors.consent ? "border-red-300 bg-red-50" : "border-[#CBD5E1] bg-[#F8FAFC]"}`}>
            <input
              type="checkbox"
              name="consent"
              checked={consent}
              onChange={(event) => {
                setConsent(event.target.checked);
                setErrors((current) => ({ ...current, consent: undefined, form: undefined }));
              }}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "alert-consent-error" : "alert-consent-help"}
              className="mt-0.5 h-5 w-5 shrink-0 accent-[#002D62]"
            />
            <span className="text-xs leading-5 text-[#334155]">
              {ALERT_CONSENT_TEXT} Read our <Link href="/privacy" className="font-bold text-[#002D62] underline underline-offset-2">Privacy Policy</Link> and <Link href="/terms" className="font-bold text-[#002D62] underline underline-offset-2">Terms</Link>.
            </span>
          </label>
          <p id="alert-consent-help" className="sr-only">Consent is required before a confirmation email can be sent.</p>
          {errors.consent && <p id="alert-consent-error" className="mt-2 text-xs font-bold text-[#B0041B]">{errors.consent}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary flex min-h-12 w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-black disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
              Sending secure link…
            </>
          ) : (
            "Email my confirmation link →"
          )}
        </button>

        <p className="text-center text-xs leading-5 text-[#64748B]">
          Your preferences are stored only after email confirmation. We do not treat directory contact details as consent.
        </p>
      </div>
    </form>
  );
}
