// Function that get the div#content and append some element in it

function pageLoad(item) {
    const content = document.querySelector("#content");

    content.appendChild(item);
}

export { pageLoad };