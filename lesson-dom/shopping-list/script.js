const list = document.querySelector("ul");
const inElem = document.querySelector("input");
const but = document.querySelector("button");

function buttonPressed(){
    let inputValue = inElem.value();
    inElem.value() = "";

    const listElem = document.createElement("li");
    const text = document.createElement("span");
    const delBut = document.createElement("button");

    listElem.appendChild(text);
    listElem.appendChild(delBut);

    text.textContent(inputValue);
    delBut.textContent("Delete");

    list.appendChild(listElem);
}

but.addEventListener("click", buttonPressed());