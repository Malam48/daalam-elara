import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
getFirestore,
collection,
addDoc,
getDocs,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "XXXX",
appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
db, auth,
collection, addDoc, getDocs, doc, updateDoc,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged
};
