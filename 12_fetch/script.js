fetch("https://jsonplaceholder.typicode.com/users")
  .then((r) => r.json())
  .then((body) => console.log(body));
