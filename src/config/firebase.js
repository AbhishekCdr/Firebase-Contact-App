// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEiBa_FjCSsi_k2Typ17cwekxVz-mVjjc",
  authDomain: "react-contact-ebecb.firebaseapp.com",
  projectId: "react-contact-ebecb",
  storageBucket: "react-contact-ebecb.appspot.com",
  messagingSenderId: "305972645811",
  appId: "1:305972645811:web:c9da5ad7db9aab4cc2c5c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);