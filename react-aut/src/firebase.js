// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALUBIYEgn6xK3DPF-Vk7rbe2a8m7pD3Ys",
  authDomain: "react-auth-firebase-51966.firebaseapp.com",
  projectId: "react-auth-firebase-51966",
  storageBucket: "react-auth-firebase-51966.firebasestorage.app",
  messagingSenderId: "929205831202",
  appId: "1:929205831202:web:95fcaa880d594241296c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Export auth instance
export const auth = getAuth(app);