const li = document.querySelector("ul li:first-child");
const ul = document.querySelector("ul");
const div = document.createElement("div");
div.innerHTML = "Je suis un div";
ul.insertAdjacentElement("afterbegin", div);
