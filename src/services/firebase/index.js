// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO3zd2N0sX6iwx_obWbH3fcVDnMuBYOTI",
  authDomain: "bochinchereact-88c3d.firebaseapp.com",
  projectId: "bochinchereact-88c3d",
  storageBucket: "bochinchereact-88c3d.appspot.com",
  messagingSenderId: "120485238234",
  appId: "1:120485238234:web:fbea587899144350711ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)