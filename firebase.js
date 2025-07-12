// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // ✅ add this line

const firebaseConfig = {
  apiKey: "AIzaSyCD0FChqYv5qbXMWX7rvNmOFrfrH8HySZ0",
  authDomain: "vite-project-1605e.firebaseapp.com",
  projectId: "vite-project-1605e",
  storageBucket: "vite-project-1605e.appspot.com", // ✅ correct
  messagingSenderId: "229746415977",
  appId: "1:229746415977:web:1c63db5abf03c8023185f8",
  measurementId: "G-TC2D8W6GQS",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app); // ✅ optional if needed elsewhere

export { app, storage, db };
