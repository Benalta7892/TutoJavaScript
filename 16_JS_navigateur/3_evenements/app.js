document.querySelectorAll(".spoiler").forEach((spoiler) => {
  spoiler.addEventListener("click", (e) => {
    e.currentTarget.classList.remove("spoiler");
  });
});
