import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:  "AIzaSyCRcZ8WZyG9jrsjHAGgzaCBAC7wdPBV6EA",
  authDomain: "aapdi-marketplace.firebaseapp.com",
  projectId: "aapdi-marketplace",
  storageBucket: "aapdi-marketplace.firebasestorage.app",
  messagingSenderId: "709676738568",
  appId: "1:709676738568:web:2fa3318623abc736ef49bd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
