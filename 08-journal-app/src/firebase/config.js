// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers/getEnvironments";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvN2ZVoqFYVDVyoT6HG_ot4k7L1mEKws0",
  authDomain: "react-cursos-e4066.firebaseapp.com",
  projectId: "react-cursos-e4066",
  storageBucket: "react-cursos-e4066.appspot.com",
  messagingSenderId: "391258196392",
  appId: "1:391258196392:web:b38aaf8140a153f751b59d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB    = getFirestore( FirebaseApp );

const env = getEnvironments();

console.log(env)