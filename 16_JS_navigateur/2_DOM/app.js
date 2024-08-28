const li = document.querySelector("ul li:first-child");
const newLi = document.createElement("li");
newLi.innerHTML = "Ceci est un nouvel élément";
document.querySelector("ul").appendChild(newLi);
