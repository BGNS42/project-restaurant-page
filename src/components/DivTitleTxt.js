// Create a "div" element with the structure of Div > Title + Txt
// Inform desired div class name, title that will appear on DOM and the text that will also appear on DOM

class DivTitleTxt {
    constructor(divClass, title, text) {
        this.divClass = divClass;
        this.title = title;
        this.text = text;
    }

    createDiv() {
        const newDiv = document.createElement("div");
        newDiv.classList = this.divClass;

        return newDiv;
    }

    createTitle() {
        const newTitle = document.createElement("h2");
        newTitle.innerText = this.title;
        return newTitle;
    }

    createTxt() {
        const newText = document.createElement("p");
        newText.innerText = this.text;
        return newText;
    }

    create() {
        const contentDiv = this.createDiv();

        contentDiv.appendChild(this.createTitle());
        contentDiv.appendChild(this.createTxt());

        return contentDiv;
    }
}


// Same as class above, just added an Image

class DivImgTitleTxt extends DivTitleTxt {
    constructor(divClass, title, text, img) {
        super(divClass, title, text);
        this.img = img;
    }

    createImg() {
        const newImg = document.createElement("img");
        newImg.src = this.img;
        return newImg;
    }

    create() {
        const contentDiv = this.createDiv();

        contentDiv.appendChild(this.createImg());
        contentDiv.appendChild(super.createTitle());
        contentDiv.appendChild(super.createTxt());

        return contentDiv;
    }
}

export { DivTitleTxt, DivImgTitleTxt };