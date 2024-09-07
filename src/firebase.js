// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTrQz4NrZIR4gPHq8ZoSuF6JLy11qMsG4",
  authDomain: "chat-5373e.firebaseapp.com",
  databaseURL: "https://chat-5373e-default-rtdb.firebaseio.com",
  projectId: "chat-5373e",
  storageBucket: "chat-5373e.appspot.com",
  messagingSenderId: "366393039973",
  appId: "1:366393039973:web:3497a4c430da2500963a8c",
  measurementId: "G-03MEDHVD53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialiseer auth

// Voeg Firestore toe en exporteer de `db`-instantie
const db = getFirestore(app); // Initialiseer Firestore

// Exporteer zowel `db` als `auth`
export { db, auth };
