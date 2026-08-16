"use client";

import { useEffect } from "react";
import { getFirebaseAnalytics } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    getFirebaseAnalytics().catch((err) => {
      console.warn("Firebase Analytics could not be initialized:", err);
    });
  }, []);

  return null;
}
