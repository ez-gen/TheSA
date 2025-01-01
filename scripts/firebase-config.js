import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeQlNoFs9oMFWS-oDvPYOAu86OYe4GfhQ",
  authDomain: "capturedeep-126bf.firebaseapp.com",
  databaseURL: "https://capturedeep-126bf-default-rtdb.firebaseio.com",
  projectId: "capturedeep-126bf",
  storageBucket: "capturedeep-126bf.appspot.com",
  messagingSenderId: "527347157327",
  appId: "1:527347157327:web:a9df4fb9085b49cf47dd3a",
  measurementId: "G-TRY1CSCXF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth, signInWithEmailAndPassword, collection, doc, setDoc, getDoc, getDocs, addDoc, ref, uploadBytes, getDownloadURL };
