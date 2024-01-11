// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIqoujeWaf0q_SakP7V7X7fcUFM0VTPcE",
    authDomain: "react-curso-1be10.firebaseapp.com",
    projectId: "react-curso-1be10",
    storageBucket: "react-curso-1be10.appspot.com",
    messagingSenderId: "385528733411",
    appId: "1:385528733411:web:4739c7e7660a0c080d2fd6",
    measurementId: "G-1BE8W7LWK9"
  };

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
// export const analytics = getAnalytics(app);