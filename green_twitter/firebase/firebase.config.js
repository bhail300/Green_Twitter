import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDF8qHFzY1eecYGJ30maob0fF6yABbhtBc",
  authDomain: "green-aecb9.firebaseapp.com",
  projectId: "green-aecb9",
  storageBucket: "green-aecb9.appspot.com",
  messagingSenderId: "120896384878",
  appId: "1:120896384878:web:13f7fadb8a557e7bfbdb7f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);