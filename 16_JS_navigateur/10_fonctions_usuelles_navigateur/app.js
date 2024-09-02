const button = document.querySelector("button");
let i = 0;
const listener = () => {
  i++;
  console.log(button.dataset.name);
  if (i >= 3) {
    button.removeEventListener("click", listener);
  }
};
button.addEventListener("click", listener);
