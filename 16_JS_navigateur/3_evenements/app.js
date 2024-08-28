/**
 *
 * @param {PointerEvent} event
 */
function onButtonClick(event) {
  console.log("button click");
}

document.querySelectorAll("button, a").forEach((btn) => {
  btn.addEventListener("click", onButtonClick, { once: true });
});

document.querySelector("div").addEventListener(
  "click",
  (e) => {
    console.log("click div");
    e.stopPropagation();
  },
  { capture: true }
);
