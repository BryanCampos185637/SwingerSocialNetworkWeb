import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const configuration = {
  apiKey: "AIzaSyDBXqIf1UHmcIl_eyZnKh5QluG2nPeAFdE",
  authDomain: "swingr-f26b8.firebaseapp.com",
  projectId: "swingr-f26b8",
  storageBucket: "swingr-f26b8.appspot.com",
  messagingSenderId: "392086250742",
  appId: "1:392086250742:web:971de96b2755eb624578d7",
};

export const FirebaseConfig = initializeApp(configuration);
export const FirebaseAuth = getAuth(FirebaseConfig);
export const FirebaseDB = getFirestore(FirebaseConfig);
