// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSUrqfJ_r7l46s_N4fgMXapyQvBS1aqGo",
  authDomain: "latihan1-7df7d.firebaseapp.com",
  projectId: "latihan1-7df7d",
  storageBucket: "latihan1-7df7d.appspot.com",
  messagingSenderId: "899964041141",
  appId: "1:899964041141:web:76acf30bde5ad6cdc60bfc",
  measurementId: "G-0605D3MHDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth};