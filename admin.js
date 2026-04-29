import { db, collection, addDoc, getDocs } from "./firebase.js";

window.addProduct = async function () {
let name = document.getElementById("name").value;
let price = document.getElementById("price").value;
let image = document.getElementById("image").value;

await addDoc(collection(db, "products"), {
name,
price,
image
});

alert("Product Added!");
load();
};

async function load() {
const snap = await getDocs(collection(db, "products"));

let html = "";

snap.forEach(doc => {
const p = doc.data();
html += `<p>${p.name} - ${p.price}</p>`;
});

document.getElementById("list").innerHTML = html;
}

load();
