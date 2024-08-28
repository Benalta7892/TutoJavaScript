document.addEventListener("keydown", (e) => {
  if (e.ctrlKey === true && e.key === "k") {
    e.preventDefault();
    console.log("Raccourci");
  }
});
