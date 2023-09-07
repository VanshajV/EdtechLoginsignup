// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKRZIwwZV7Qgv7aq_7XEfA8Kf_Xe8PDcg",
  authDomain: "landingpageedtech.firebaseapp.com",
  projectId: "landingpageedtech",
  storageBucket: "landingpageedtech.appspot.com",
  messagingSenderId: "523719740907",
  appId: "1:523719740907:web:5108ef93145b1213a81dae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
export {app,auth}; 