// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsVzIwnoEinGNYvqJDosLXydfK3iueN80",
  authDomain: "private-context.firebaseapp.com",
  projectId: "private-context",
  storageBucket: "private-context.appspot.com",
  messagingSenderId: "488439889156",
  appId: "1:488439889156:web:1f97958cca831e9b9a6451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;