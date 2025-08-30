import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDSFWHzZX0tUZU7FFxOT4SgiworMStcli0",
  authDomain: "portfolio-1b7e1.firebaseapp.com",
  projectId: "portfolio-1b7e1",
  storageBucket: "portfolio-1b7e1.firebasestorage.app",
  messagingSenderId: "382598038130",
  appId: "1:382598038130:web:8a2061f90293ac4cb238eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);
export default app;