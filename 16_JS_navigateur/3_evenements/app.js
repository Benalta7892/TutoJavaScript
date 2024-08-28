/**
 *
 * @param {PointerEvent} event
 */
function onButtonClick(event) {
  console.log("button click");
  event.preventDefault();
  event.stopPropagation();
  console.log(event);
}

document.querySelectorAll("button, a").forEach((btn) => {
  btn.addEventListener("click", onButtonClick, { once: true });
});

document.querySelector("div").addEventListener("click", () => {
  console.log("click div");
});

document.addEventListener(
  "scroll",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);
