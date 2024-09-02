const h1 = document.querySelector("h1");
console.log("Position par rapport au haut", window.scrollY + h1.getBoundingClientRect().y, recursiveOffsetTop(h1));

document.querySelector("div").addEventListener("mousemove", (e) => {
  console.log(e.offsetX, e.pageX);
});

function recursiveOffsetTop(element) {
  if (element.offsetParent) {
    return element.offsetTop + recursiveOffsetTop(element.offsetParent);
  } else {
    return element.offsetTop;
  }
}
