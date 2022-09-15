import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCZzODpIKc30m7U7T4gUGP0TtfVwyfOo3o",
  authDomain: "chat-975f1.firebaseapp.com",
  projectId: "chat-975f1",
  storageBucket: "chat-975f1.appspot.com",
  messagingSenderId: "346412156653",
  appId: "1:346412156653:web:5cd25ac5fba74e2bb6aee4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()