// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjgzNneOPVMFKxHZX1rfHs_4eSM2dvpUA",
  authDomain: "netflixgpt-6ca0e.firebaseapp.com",
  projectId: "netflixgpt-6ca0e",
  storageBucket: "netflixgpt-6ca0e.firebasestorage.app",
  messagingSenderId: "952314564526",
  appId: "1:952314564526:web:1c624993c406894e6c823f",
  measurementId: "G-G3EE6M1EYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);