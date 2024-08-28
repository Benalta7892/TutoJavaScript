/**
 *
 * @param {PointerEvent} event
 */
function onButtonClick(event) {
  event.preventDefault();
}

document.querySelectorAll("button, a").forEach((btn) => {
  btn.addEventListener("click", onButtonClick);
});
