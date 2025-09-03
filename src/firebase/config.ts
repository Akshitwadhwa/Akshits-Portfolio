import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDSFWHzZX0tUZU7FFxOT4SgiworMStcli0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "portfolio-1b7e1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "portfolio-1b7e1",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "portfolio-1b7e1.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "382598038130",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:382598038130:web:8a2061f90293ac4cb238eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);
export default app;