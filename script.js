let balance = 100000000; // 100 Crore
let assets = {}; // Object to store purchased items

function buyItem(cost, itemName, element) {
    if (balance >= cost) {
        balance -= cost;
        document.getElementById("balance").textContent = balance.toLocaleString();
        
        // Flash red animation on balance
        let balanceElement = document.getElementById("balance");
        balanceElement.classList.add("flash");
        setTimeout(() => {
            balanceElement.classList.remove("flash");
        }, 400);

        // Add item to assets
        if (assets[itemName]) {
            assets[itemName]++; // Increase quantity if already purchased
        } else {
            assets[itemName] = 1;
        }
        
        updateAssetsList();
        
        // Fade out effect on button
        element.classList.add("fade-out");
        setTimeout(() => {
            element.classList.remove("fade-out");
        }, 500);
    } else {
        alert("Not enough money!");
    }
}

function updateAssetsList() {
    let assetList = document.getElementById("assets");
    assetList.innerHTML = ""; // Clear list before updating

    for (let item in assets) {
        let listItem = document.createElement("li");
        listItem.textContent = `${item} x${assets[item]}`;
        assetList.appendChild(listItem);
    }
}

function resetBalance() {
    balance = 1000000000;
    assets = {}; // Clear assets
    document.getElementById("balance").textContent = balance.toLocaleString();
    document.getElementById("assets").innerHTML = ""; // Clear asset list
}
