// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Z3cWXH4e2Xj1mPpCRmLJz2CQl-0S474",
  authDomain: "singaporetourism-24ad4.firebaseapp.com",
  projectId: "singaporetourism-24ad4",
  storageBucket: "singaporetourism-24ad4.appspot.com",
  messagingSenderId: "41748035513",
  appId: "1:41748035513:web:44a8fb4a451758de65a868",
  measurementId: "G-XKYELPN1DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export {  db };
