import { db, collection, getDocs } from "./firebase.js";

window.loadOrders = async function () {
const snap = await getDocs(collection(db, "orders"));

let html = "";

snap.forEach(d => {
let o = d.data();

html += `
<div class="card">
<p>Items: ${JSON.stringify(o.items)}</p>
<p>Status: ${o.status}</p>
</div>
`;
});

document.getElementById("orders").innerHTML = html;
};

loadOrders();
