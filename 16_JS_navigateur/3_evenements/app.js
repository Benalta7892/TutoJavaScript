/**
 *
 * @param {PointerEvent} event
 */
function onButtonClick(event) {
  console.log(event.currentTarget);
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", onButtonClick);
});
