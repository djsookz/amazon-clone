// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-67ac5.firebaseapp.com",
  projectId: "clone-67ac5",
  storageBucket: "clone-67ac5.appspot.com",
  messagingSenderId: "360938930798",
  appId: "1:360938930798:web:8340a21564ba8500725c7f",
  measurementId: "G-TEL6NDT8SW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
