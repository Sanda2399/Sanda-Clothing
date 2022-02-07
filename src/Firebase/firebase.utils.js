// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr6sNUq35l3-9s0jjD7ho19qpfj0tMkCo", // safe to expose
  authDomain: "sandaclothing-25e66.firebaseapp.com",
  projectId: "sandaclothing-25e66",
  storageBucket: "sandaclothing-25e66.appspot.com",
  messagingSenderId: "403697889264",
  appId: "1:403697889264:web:e75bd59eaecb7f4dae3735",
  measurementId: "G-Z0YT01LC39",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Used for when something needs authetication.
export const auth = firebase.auth();

// Used for when we need to access the DB.
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;