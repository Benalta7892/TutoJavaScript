const spoilers = document.querySelectorAll(".spoiler");

function revealSpoiler() {
  spoilers.forEach((spoiler) => spoiler.classList.remove("spoiler"));
}

spoilers.forEach((spoiler) => {
  spoiler.addEventListener("click", revealSpoiler);
});
