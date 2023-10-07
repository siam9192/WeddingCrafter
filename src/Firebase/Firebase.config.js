// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqe-oGCk6cASaSGPPiW793xUQA0M0Q-iA",
  authDomain: "weeding-crafter.firebaseapp.com",
  projectId: "weeding-crafter",
  storageBucket: "weeding-crafter.appspot.com",
  messagingSenderId: "1186494545",
  appId: "1:1186494545:web:405b973cb9837b1530e070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;