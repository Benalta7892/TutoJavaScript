document.querySelector("select").addEventListener("change", (e) => {
  console.log(Array.from(e.currentTarget.selectedOptions).map((o) => o.value));
});
