const button = document.querySelector("button");

const mediaQuery = window.matchMedia("(min-height: 300px)");

mediaQuery.addEventListener("change", (e) => {
  console.log(mediaQuery.matches);
});
