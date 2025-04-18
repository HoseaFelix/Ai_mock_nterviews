
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ40HSAc6kLo-pPne2SWfChQht5L1n_M0",
  authDomain: "promptprep-d962d.firebaseapp.com",
  projectId: "promptprep-d962d",
  storageBucket: "promptprep-d962d.firebasestorage.app",
  messagingSenderId: "731920581440",
  appId: "1:731920581440:web:0d255c0ad429a5e2e5b0a5",
  measurementId: "G-F0SSHJ9E9K"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)