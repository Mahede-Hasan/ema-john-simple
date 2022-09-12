// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxpEJ8eaNT8dCH_tj8XEd6B8dDuES3cSs",
  authDomain: "ema-john-simple-70991.firebaseapp.com",
  projectId: "ema-john-simple-70991",
  storageBucket: "ema-john-simple-70991.appspot.com",
  messagingSenderId: "492005420699",
  appId: "1:492005420699:web:8f2b3e7cea2d973a51a03e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;