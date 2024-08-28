document.querySelector("form").addEventListener("submit", (e) => {
  const form = e.currentTarget;
  const data = new FormData(form);
  const firstname = data.get("firstname");
  if (firstname.length < 2) {
    e.preventDefault();
  }
});
