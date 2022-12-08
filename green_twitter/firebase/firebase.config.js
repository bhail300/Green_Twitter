import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyBzi0qzVORqYrNrwVwjsrJ-9MaBZO76dI8",

  authDomain: "assesment-login-auth.firebaseapp.com",

  projectId: "assesment-login-auth",

  storageBucket: "assesment-login-auth.appspot.com",

  messagingSenderId: "1083557940236",

  appId: "1:1083557940236:web:8e1b8439e56b2520227229"

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);