// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSb-3PErvK21_o-z98XF2wxQ9fC9BwctU",
  authDomain: "beinsync-1802a.firebaseapp.com",
  projectId: "beinsync-1802a",
  storageBucket: "beinsync-1802a.appspot.com",
  messagingSenderId: "226855728299",
  appId: "1:226855728299:web:bdab321e4db06a0822f3ee",
  measurementId: "G-V382GJZQ2B"
};


// export const auth = getAuth();


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;