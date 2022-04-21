import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAa676OeIGYAxiFODvJgrAFD-TjQmF7zo",
  authDomain: "login-app-5aef8.firebaseapp.com",
  projectId: "login-app-5aef8",
  storageBucket: "login-app-5aef8.appspot.com",
  messagingSenderId: "19603033983",
  appId: "1:19603033983:web:e0afabea45cb78e48c544a",
  measurementId: "G-001VQ9PK52"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
