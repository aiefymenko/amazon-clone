/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMptsI63ovrKSNLGq-WDkHMmiouRynp8g",
  authDomain: "clone-6115a.firebaseapp.com",
  projectId: "clone-6115a",
  storageBucket: "clone-6115a.appspot.com",
  messagingSenderId: "238003366361",
  appId: "1:238003366361:web:e1efb03fc8968773c951c8",
  measurementId: "G-9DSDBSPL3K"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider };
