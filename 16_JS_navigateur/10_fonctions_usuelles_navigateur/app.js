const button = document.querySelector("button");
button.animate([{ transform: "translateY(100px)", rotate: "180deg" }], {
  duration: 1000,
  iterations: 2,
  fill: "both",
});
