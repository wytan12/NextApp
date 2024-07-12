// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFnrCrP7rEC1I6QPr_g6kM2cq50RdxN38",
  authDomain: "next-app-77ef1.firebaseapp.com",
  projectId: "next-app-77ef1",
  storageBucket: "next-app-77ef1.appspot.com",
  messagingSenderId: "716175626263",
  appId: "1:716175626263:web:83195d9d5a741cf8484c52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);