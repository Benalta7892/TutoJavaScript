const ul = document.querySelector("ul li:first-child");

setInterval(() => {
  ul.classList.toggle("red");
}, 1000);
