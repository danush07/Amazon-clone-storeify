import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW5pBP1mJSwtmHeyeeHMuJ6hs3PRkqqOw",
  authDomain: "storeify-23426.firebaseapp.com",
  projectId: "storeify-23426",
  storageBucket: "storeify-23426.appspot.com",
  messagingSenderId: "567112651784",
  appId: "1:567112651784:web:6113794d8224b607a16dbd",
  measurementId: "G-PX6VEBJ9CJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };