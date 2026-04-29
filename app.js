import { db, collection, getDocs } from "./firebase.js";

async function loadProducts() {
const snap = await getDocs(collection(db, "products"));

let html = "";

snap.forEach(doc => {
const p = doc.data();

html += `
<div class="card">
<h3>${p.name}</h3>
<p>PKR ${p.price}</p>
<button onclick="addToCart('${p.name}', ${p.price})">
Add to Cart
</button>
</div>
`;
});

document.getElementById("products").innerHTML = html;
}

loadProducts();
