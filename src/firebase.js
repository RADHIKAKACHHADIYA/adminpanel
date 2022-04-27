// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore}  from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD82e7QKu4EZiRKIIBpXabilqabJhyXr8A",
  authDomain: "cmultihospital.firebaseapp.com",
  projectId: "cmultihospital",
  storageBucket: "cmultihospital.appspot.com",
  messagingSenderId: "782585019916",
  appId: "1:782585019916:web:e1347a7545e18efd623829",
  measurementId: "G-KVWD40VGVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage1 = getStorage(app);