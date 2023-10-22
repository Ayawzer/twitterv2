// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXC4UN81cRx1Lu34c5es142ok7682lBgw",
  authDomain: "project-sm-3dae5.firebaseapp.com",
  projectId: "project-sm-3dae5",
  storageBucket: "project-sm-3dae5.appspot.com",
  messagingSenderId: "321183350634",
  appId: "1:321183350634:web:ee52d1a7904ba87ce06f13",
  measurementId: "G-LVQ1CJ9LTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);