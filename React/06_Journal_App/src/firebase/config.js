// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoPtFhOskrHWaFJHdu0GhVeqY73VMKqig",
    authDomain: "react-curso-67eeb.firebaseapp.com",
    projectId: "react-curso-67eeb",
    storageBucket: "react-curso-67eeb.appspot.com",
    messagingSenderId: "817865200006",
    appId: "1:817865200006:web:f2fe9d55761b9f62791c07"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
