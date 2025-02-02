// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb4npsmV_Q1lBNFLXtjWkNcfALEuWMl2U",
  authDomain: "ecommerceapp-96706.firebaseapp.com",
  projectId: "ecommerceapp-96706",
  storageBucket: "ecommerceapp-96706.firebasestorage.app",
  messagingSenderId: "481774675816",
  appId: "1:481774675816:web:1d47bcf5e565854af258dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth};