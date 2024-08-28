const ul = document.querySelector("ul li:first-child");

setInterval(() => {
  ul.classList.add("red");
}, 1000);
