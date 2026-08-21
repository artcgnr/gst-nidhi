import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDoc, getDocs, query, where, orderBy, doc, setDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
    //---nidhi
    apiKey: "AIzaSyBccHBwl_wcr80w96lkiUyeieBzmd2uKGs",
    authDomain: "nidhi-gst.firebaseapp.com",
    projectId: "nidhi-gst",
    storageBucket: "nidhi-gst.firebasestorage.app",
    messagingSenderId: "503817715778",
    appId: "1:503817715778:web:395213b4faab86d56d2ddb"
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDoc, getDocs, query, where, orderBy, doc, setDoc, updateDoc, deleteDoc };