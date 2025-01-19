// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMsPPPx_Jhlo3B7XncKUuJJexJ5bS47fY",
  authDomain: "task-management-83c24.firebaseapp.com",
  projectId: "task-management-83c24",
  storageBucket: "task-management-83c24.firebasestorage.app",
  messagingSenderId: "657576169715",
  appId: "1:657576169715:web:ec2158830203d4ee8fa786",
  measurementId: "G-BQLDHW5D43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
