import {
auth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "./firebase.js";

window.signup = async function () {
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;

await createUserWithEmailAndPassword(auth, email, pass);
alert("Account Created");
};

window.login = async function () {
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;

await signInWithEmailAndPassword(auth, email, pass);
alert("Logged In");
window.location.href = "shop.html";
};
