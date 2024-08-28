/**
 *
 * @param {PointerEvent} event
 */
function onButtonClick(event) {
  console.log("button click");
  event.preventDefault();
  event.stopPropagation();
}

document.querySelectorAll("button, a").forEach((btn) => {
  btn.addEventListener("click", onButtonClick);
});

document.querySelector("div").addEventListener("click", () => {
  console.log("click div");
});
