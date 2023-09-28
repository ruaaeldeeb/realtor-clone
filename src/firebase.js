// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkfJmLrXRrS2PFgYUhywP1pvhNRlay2vw",
  authDomain: "realtor-clone-react-6161e.firebaseapp.com",
  projectId: "realtor-clone-react-6161e",
  storageBucket: "realtor-clone-react-6161e.appspot.com",
  messagingSenderId: "1019917164363",
  appId: "1:1019917164363:web:3c65f0b75adbd5965cd2ce"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();