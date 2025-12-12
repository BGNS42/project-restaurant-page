export class MenuItem {
    constructor(name, price, text) {
    this.name = name;
    this.price = price;
    this.text = text;
    };

    createItemDiv() {
        const itemDiv = document.createElement("div");
        itemDiv.classList = "itemDiv";
        return itemDiv;
    }
    
    createItemName() {
        const itemName = document.createElement("h2");
        itemName.innerText = `${this.name}`;
        return itemName;
    }

    createItemPrice() {
        const itemPrice = document.createElement("h3");
        itemPrice.innerText = `$${this.price}`;
        return itemPrice;
    }

    createItemTxt() {
        const itemTxt = document.createElement("p");
        itemTxt.innerText = this.text;
        return itemTxt;
    }

    createMenuItem() {
        const itemDiv = this.createItemDiv();
        
        itemDiv.appendChild(this.createItemName());
        itemDiv.appendChild(this.createItemPrice());
        itemDiv.appendChild(this.createItemTxt());

        return itemDiv;
    }
}