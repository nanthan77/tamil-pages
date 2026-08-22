import { CITIES } from "@/lib/cities";

export const ALERT_SUBSCRIPTIONS_COLLECTION = "alertSubscriptions";
export const ALERT_DRAFT_STORAGE_KEY = "tamilpages.alerts.email-link-draft.v1";
export const ALERT_DRAFT_TTL_MS = 24 * 60 * 60 * 1000;

export const ALERT_CONSENT_VERSION = "2026-08-22-v1";
export const ALERT_CONSENT_TEXT =
  "I agree to receive Tamil Movie and Weekend Alert emails from TamilCanadianPages.ca based on my preferences. I can unsubscribe at any time.";
export const ALERT_SOURCE = "alerts_page" as const;
export const ALERT_CHANNELS = ["email"] as const;

export const ALERT_TOPICS = [
  {
    id: "movies",
    icon: "🎬",
    label: "Tamil movie alerts",
    tamilLabel: "தமிழ் திரைப்பட அறிவிப்புகள்",
    description: "Source-linked Canadian releases and schedule changes when the pilot begins.",
  },
  {
    id: "weekend",
    icon: "📅",
    label: "Weekend digest",
    tamilLabel: "வார இறுதி தொகுப்பு",
    description: "A Friday guide to source-checked things to do near your city.",
  },
  {
    id: "events",
    icon: "🎪",
    label: "Community events",
    tamilLabel: "சமூக நிகழ்வுகள்",
    description: "Concerts, family activities and community gatherings.",
  },
  {
    id: "temples",
    icon: "🛕",
    label: "Temple festivals",
    tamilLabel: "கோவில் திருவிழாக்கள்",
    description: "Source-checked poojas, festivals and Thiruvizha reminders.",
  },
] as const;

export const ALERT_LANGUAGES = [
  { id: "en", label: "English" },
  { id: "ta", label: "தமிழ்" },
  { id: "bilingual", label: "Tamil + English" },
] as const;

export const ALERT_FREQUENCIES = [
  {
    id: "friday",
    label: "Friday digest",
    description: "One useful weekend email each Friday.",
  },
  {
    id: "daily",
    label: "Daily summary",
    description: "One summary on days with a relevant source-checked update.",
  },
  {
    id: "instant",
    label: "Important updates",
    description: "Time-sensitive movie or schedule changes as they happen.",
  },
] as const;

export type AlertTopic = (typeof ALERT_TOPICS)[number]["id"];
export type AlertLanguage = (typeof ALERT_LANGUAGES)[number]["id"];
export type AlertFrequency = (typeof ALERT_FREQUENCIES)[number]["id"];
export type AlertChannel = (typeof ALERT_CHANNELS)[number];
export type AlertSource = typeof ALERT_SOURCE;
export type AlertStatus = "active";

export type AlertPreferences = {
  city: string;
  topics: AlertTopic[];
  language: AlertLanguage;
  frequency: AlertFrequency;
};

export type AlertDraft = AlertPreferences & {
  email: string;
  consentVersion: typeof ALERT_CONSENT_VERSION;
  consentText: typeof ALERT_CONSENT_TEXT;
  source: AlertSource;
  expiresAt: number;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CITY_SLUGS = new Set(CITIES.map((city) => city.slug));
const TOPIC_IDS = new Set<string>(ALERT_TOPICS.map((topic) => topic.id));
const LANGUAGE_IDS = new Set<string>(ALERT_LANGUAGES.map((language) => language.id));
const FREQUENCY_IDS = new Set<string>(ALERT_FREQUENCIES.map((frequency) => frequency.id));

export function normalizeAlertEmail(value: string) {
  return value.trim().toLowerCase();
}

export function isValidAlertEmail(value: string) {
  const email = normalizeAlertEmail(value);
  return email.length <= 254 && EMAIL_PATTERN.test(email);
}

export function isAlertCity(value: unknown): value is string {
  return typeof value === "string" && CITY_SLUGS.has(value);
}

export function isAlertTopic(value: unknown): value is AlertTopic {
  return typeof value === "string" && TOPIC_IDS.has(value);
}

export function isAlertLanguage(value: unknown): value is AlertLanguage {
  return typeof value === "string" && LANGUAGE_IDS.has(value);
}

export function isAlertFrequency(value: unknown): value is AlertFrequency {
  return typeof value === "string" && FREQUENCY_IDS.has(value);
}

export function normalizeAlertTopics(values: readonly AlertTopic[]) {
  const selected = new Set(values);
  return ALERT_TOPICS.map((topic) => topic.id).filter((topic) => selected.has(topic));
}

export function validateAlertPreferences(preferences: AlertPreferences) {
  const errors: Partial<Record<"city" | "topics" | "language" | "frequency", string>> = {};

  if (!isAlertCity(preferences.city)) {
    errors.city = "Choose a Canadian city.";
  }
  if (preferences.topics.length === 0 || !preferences.topics.every(isAlertTopic)) {
    errors.topics = "Choose at least one alert topic.";
  }
  if (!isAlertLanguage(preferences.language)) {
    errors.language = "Choose a language.";
  }
  if (!isAlertFrequency(preferences.frequency)) {
    errors.frequency = "Choose how often you want alerts.";
  }

  return errors;
}

export function createAlertDraft(input: AlertPreferences & { email: string }): AlertDraft {
  return {
    email: normalizeAlertEmail(input.email),
    city: input.city,
    topics: normalizeAlertTopics(input.topics),
    language: input.language,
    frequency: input.frequency,
    consentVersion: ALERT_CONSENT_VERSION,
    consentText: ALERT_CONSENT_TEXT,
    source: ALERT_SOURCE,
    expiresAt: Date.now() + ALERT_DRAFT_TTL_MS,
  };
}

export function parseAlertDraft(value: string | null): AlertDraft | null {
  if (!value) return null;

  try {
    const draft = JSON.parse(value) as Partial<AlertDraft>;
    const topics = Array.isArray(draft.topics) ? draft.topics.filter(isAlertTopic) : [];

    if (
      typeof draft.email !== "string" ||
      !isValidAlertEmail(draft.email) ||
      !isAlertCity(draft.city) ||
      topics.length === 0 ||
      topics.length !== draft.topics?.length ||
      !isAlertLanguage(draft.language) ||
      !isAlertFrequency(draft.frequency) ||
      draft.consentVersion !== ALERT_CONSENT_VERSION ||
      draft.consentText !== ALERT_CONSENT_TEXT ||
      draft.source !== ALERT_SOURCE ||
      typeof draft.expiresAt !== "number" ||
      !Number.isFinite(draft.expiresAt) ||
      draft.expiresAt <= Date.now() ||
      draft.expiresAt > Date.now() + ALERT_DRAFT_TTL_MS
    ) {
      return null;
    }

    return {
      email: normalizeAlertEmail(draft.email),
      city: draft.city,
      topics: normalizeAlertTopics(topics),
      language: draft.language,
      frequency: draft.frequency,
      consentVersion: ALERT_CONSENT_VERSION,
      consentText: ALERT_CONSENT_TEXT,
      source: ALERT_SOURCE,
      expiresAt: draft.expiresAt,
    };
  } catch {
    return null;
  }
}
