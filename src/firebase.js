// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArG9CBXAxv8N4MC8cAQoMECiyM3k8_oms",
  authDomain: "weconnect-4ec54.firebaseapp.com",
  projectId: "weconnect-4ec54",
  storageBucket: "weconnect-4ec54.appspot.com",
  messagingSenderId: "983466865499",
  appId: "1:983466865499:web:58463a1b9687b9e5cee07e",
  measurementId: "G-CN8F0F32LD",
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
