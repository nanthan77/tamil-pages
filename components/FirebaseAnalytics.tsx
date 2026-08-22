"use client";

import { useEffect } from "react";
import { getFirebaseAnalytics } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const init = () => {
      getFirebaseAnalytics().catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(init, { timeout: 3000 });
    } else {
      setTimeout(init, 2000);
    }
  }, []);

  return null;
}
