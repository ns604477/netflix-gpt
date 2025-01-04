// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjgzNneOPVMFKxHZX1rfHs_4eSM2dvpUA",
  authDomain: "netflixgpt-6ca0e.firebaseapp.com",
  projectId: "netflixgpt-6ca0e",
  storageBucket: "netflixgpt-6ca0e.appspot.com",
  messagingSenderId: "952314564526",
  appId: "1:952314564526:web:1c624993c406894e6c823f",
  measurementId: "G-G3EE6M1EYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
