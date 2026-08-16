import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyD7Gahln6tdHoglJGzEyQpHs-QUQhrVa2k",
  authDomain: "tamil-pages-961fd.firebaseapp.com",
  projectId: "tamil-pages-961fd",
  storageBucket: "tamil-pages-961fd.firebasestorage.app",
  messagingSenderId: "339502599049",
  appId: "1:339502599049:web:0a4b8523471063ce8e6f58",
  measurementId: "G-L7QKLPXMNW",
};

// Initialize Firebase singleton
export const app: FirebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

// Analytics runs exclusively on the browser (client-side)
let analyticsInstance: Analytics | null = null;
export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported && !analyticsInstance) {
      analyticsInstance = getAnalytics(app);
    }
  }
  return analyticsInstance;
}
