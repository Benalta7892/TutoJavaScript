async function fetchUsers() {
  const r = await fetch("https://jsonplaceholder.typicode.com/ussssers");
  if (r.ok === true) {
    const data = await r.json();
    return r.json();
  }
  throw new Error("Impossible de contacter le serveur");
}

// fetch("https://jsonplaceholder.typicode.com/ussssers")
//   .then((r) => r.json())
//   .then((body) => console.log(body));

fetchUsers().then((users) => console.log(users)); // Erreur : Impossible de contacter le serveur
