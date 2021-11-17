// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm6zfezx6CNQoa4GQbYvF551ujcakQ_EI",
  authDomain: "skinsweep-27a5b.firebaseapp.com",
  projectId: "skinsweep-27a5b",
  storageBucket: "skinsweep-27a5b.appspot.com",
  messagingSenderId: "913369889919",
  appId: "1:913369889919:web:bbe4fbbd2b36c44add534a",
  measurementId: "G-P2NHW5XW2T",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
