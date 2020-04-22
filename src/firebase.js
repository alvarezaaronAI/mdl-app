import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT5fXs-7c7ZtB2ERkXgLn4C-W7YCuAh88",
  authDomain: "damion-gillespi-dsp.firebaseapp.com",
  databaseURL: "https://damion-gillespi-dsp.firebaseio.com",
  projectId: "damion-gillespi-dsp",
  storageBucket: "damion-gillespi-dsp.appspot.com",
  messagingSenderId: "649705445235",
  appId: "1:649705445235:web:02869e1abc364cff7e9706",
  measurementId: "G-Q7FJN72NR7",
};
// Initialize Firebase
// firebase.analytics();
firebase.initializeApp(firebaseConfig);

export default firebase;
