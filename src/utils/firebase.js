// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7DSgYcS6VYo_bHfOuuLrh4Mnn3KhtWII",
  authDomain: "netflixgpt-b730e.firebaseapp.com",
  projectId: "netflixgpt-b730e",
  storageBucket: "netflixgpt-b730e.firebasestorage.app",
  messagingSenderId: "243947158247",
  appId: "1:243947158247:web:6751f6e3f9a0478f704042",
  measurementId: "G-B3H42Q1B5S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
