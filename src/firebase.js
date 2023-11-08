// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4yAxSqsQUQPE53N4ulR7LrTl0efX2i38",
  authDomain: "netflix-react-3e4d2.firebaseapp.com",
  projectId: "netflix-react-3e4d2",
  storageBucket: "netflix-react-3e4d2.appspot.com",
  messagingSenderId: "853948960791",
  appId: "1:853948960791:web:a6021b64a12176f0290c52",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
