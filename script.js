//your code here
let grandTotal = 0;

function addItem() {
	const nameInput = document.getElementById("item-name-input");
	const priceInput = document.getElementById("item-price-input");

	const itemName = nameInput.value.trim();
	const itemPrice = parseFloat(priceInput.value);

	if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
		alert("Please enter valid item name and price");
		return;
	}

	const tr = document.createElement("tr");

	const tdName = document.createElement("td");
	tdName.setAttribute("data-ns-test", "item-name");
	tdName.innerText = itemName;

	const tdPrice = document.createElement("td");
	tdPrice.setAttribute("data-ns-test", "item-name");
	tdPrice.innerText = itemPrice;

	tr.appendChild(tdName);
	tr.appendChild(tdPrice);

	document.getElementById("table-body").appendChild(tr);

	grandTotal += itemPrice;
	document.querySelector("[data-ns-test='grandTotal']").innerText = grandTotal;

	nameInput.value = "";
	priceInput.value = "";
}