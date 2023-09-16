// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSb-3PErvK21_o-z98XF2wxQ9fC9BwctU",
  authDomain: "beinsync-1802a.firebaseapp.com",
  projectId: "beinsync-1802a",
  storageBucket: "beinsync-1802a.appspot.com",
  messagingSenderId: "226855728299",
  appId: "1:226855728299:web:bdab321e4db06a0822f3ee",
  measurementId: "G-V382GJZQ2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;