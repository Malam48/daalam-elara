import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import {
getAuth,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "XXXX",
appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, deleteDoc, doc, signInWithEmailAndPassword };
