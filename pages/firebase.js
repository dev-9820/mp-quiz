// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlQAeCXAusKnJUqcPoL8MOt1sbXGWNWR4",
  authDomain: "miniproject-e1673.firebaseapp.com",
  projectId: "miniproject-e1673",
  storageBucket: "miniproject-e1673.appspot.com",
  messagingSenderId: "494605839200",
  appId: "1:494605839200:web:6b7aeeb8c59ba1f1ad8c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
