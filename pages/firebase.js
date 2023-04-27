// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 