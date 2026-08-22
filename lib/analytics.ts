import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "@/lib/firebase";
import type { AlertFrequency, AlertLanguage, AlertTopic } from "@/lib/alerts";

async function logSafeAlertEvent(
  name: "alert_signup_view" | "alert_topic_selected" | "alert_confirmation_link_sent" | "alert_signup_complete",
  parameters: Record<string, string | number>,
) {
  try {
    const analytics = await getFirebaseAnalytics();
    if (analytics) logEvent(analytics, name, parameters);
  } catch {
    // Analytics must never interrupt signup or confirmation.
  }
}

export function trackAlertSignupView() {
  return logSafeAlertEvent("alert_signup_view", { source: "alerts_page" });
}

export function trackAlertTopicSelected(topic: AlertTopic, selected: boolean) {
  return logSafeAlertEvent("alert_topic_selected", {
    topic,
    selected: selected ? 1 : 0,
  });
}

export function trackAlertConfirmationLinkSent(
  topicCount: number,
  language: AlertLanguage,
  frequency: AlertFrequency,
) {
  return logSafeAlertEvent("alert_confirmation_link_sent", {
    topic_count: topicCount,
    language,
    frequency,
  });
}

export function trackAlertSignupComplete(
  topicCount: number,
  language: AlertLanguage,
  frequency: AlertFrequency,
) {
  return logSafeAlertEvent("alert_signup_complete", {
    topic_count: topicCount,
    language,
    frequency,
  });
}
