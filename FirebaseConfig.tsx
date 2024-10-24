// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYIPnQbYILK6GXBVVKtYTVn7x_dycqYBQ",
  authDomain: "rn-auth-2.firebaseapp.com",
  projectId: "rn-auth-2",
  storageBucket: "rn-auth-2.appspot.com",
  messagingSenderId: "388110646136",
  appId: "1:388110646136:web:d9de8388870e6231a1a68d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);