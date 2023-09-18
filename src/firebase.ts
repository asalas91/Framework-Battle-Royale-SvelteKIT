import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfpVnftfB1sJkw-UVndTaeZNSZD5t8Ufw",
  authDomain: "battle-royal-sveltekit.firebaseapp.com",
  projectId: "battle-royal-sveltekit",
  storageBucket: "battle-royal-sveltekit.appspot.com",
  messagingSenderId: "959966364836",
  appId: "1:959966364836:web:a701fbc58a32bfd59d9231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app );