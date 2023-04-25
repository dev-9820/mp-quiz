import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSEKqpfwWiRq39zais5cL27zJCWdz0k8c",
  authDomain: "miniproject-4de08.firebaseapp.com",
  databaseURL: "https://miniproject-4de08-default-rtdb.firebaseio.com",
  projectId: "miniproject-4de08",
  storageBucket: "miniproject-4de08.appspot.com",
  messagingSenderId: "518018982760",
  appId: "1:518018982760:web:0d1c4c9e63212c82f8acdd",
  measurementId: "G-FNZYW13WG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()