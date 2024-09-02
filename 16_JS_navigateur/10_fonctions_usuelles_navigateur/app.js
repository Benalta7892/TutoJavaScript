const img = document.querySelector("img");
img.addEventListener("load", () => {
  console.log(img.width);
  console.log(img.height);
  console.log(img.naturalWidth);
  console.log(img.naturalHeight);
});
