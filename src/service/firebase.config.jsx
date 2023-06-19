// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8sKPpeXa4xusqKJEjnwkSTkoi35aoSkw",
  authDomain: "bigstore-tienda.firebaseapp.com",
  databaseURL: "https://bigstore-tienda-default-rtdb.firebaseio.com",
  projectId: "bigstore-tienda",
  storageBucket: "bigstore-tienda.appspot.com",
  messagingSenderId: "1309853528",
  appId: "1:1309853528:web:734d72c9c04e8d6548c72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)