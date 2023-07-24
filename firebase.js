import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFbAGmC0ZYOrHvhrRtBdT0gMKDIFaJnxI",
  authDomain: "cs-go-hub-dde88.firebaseapp.com",
  projectId: "cs-go-hub-dde88",
  storageBucket: "cs-go-hub-dde88.appspot.com",
  messagingSenderId: "523763395788",
  appId: "1:523763395788:web:d8dc78abe1dda4cf6a2669",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
