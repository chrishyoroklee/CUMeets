import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase config for CU Meets (loaded from environment)
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Ensure the app initializes only once (hot reload safe)
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Analytics is web-only; guard so native builds don't break
export let analytics: ReturnType<typeof getAnalytics> | undefined;
void isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(firebaseApp);
    }
  })
  .catch(() => {
    // No-op: analytics not supported in this environment
  });

export default firebaseApp;
