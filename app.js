import { db, collection, getDocs, addDoc } from "./firebase.js";

let cart = [];

window.loadProducts = async function () {
const snap = await getDocs(collection(db, "products"));

let html = "";

snap.forEach(d => {
let p = d.data();

html += `
<div class="card">
<h3>${p.name}</h3>
<p>PKR ${p.price}</p>
<button onclick='addToCart("${p.name}",${p.price})'>
Add to Cart
</button>
</div>
`;
});

document.getElementById("products").innerHTML = html;
};

window.addToCart = function (name, price) {
cart.push({ name, price });
alert("Added to cart");
};

window.checkout = async function () {
await addDoc(collection(db, "orders"), {
items: cart,
status: "pending",
createdAt: Date.now()
});

window.location.href = "checkout.html";
};

loadProducts();
