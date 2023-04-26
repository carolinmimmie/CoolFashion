import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ0uJpUmIsQ7hOyaOtKTBVmFUdlxDgiZQ",
  authDomain: "cool-fashion-9db88.firebaseapp.com",
  projectId: "cool-fashion-9db88",
  storageBucket: "cool-fashion-9db88.appspot.com",
  messagingSenderId: "1064747975196",
  appId: "1:1064747975196:web:85600a783dc43649cc15d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
