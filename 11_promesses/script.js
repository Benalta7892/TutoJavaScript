const p = new Promise((resolve, reject) => {
  resolve(4);
});

p.then((n) => {
  console.log("Le nombre", n);
  return 2;
})
  .then((n) => console.log("Le nombre 2", n))
  .catch((e) => {
    console.log("Erreur", e);
    return 2;
  })
  .then((n) => console.log(2))
  .finally(() => console.log("Fin")); // Sera exécuté dans tous les cas
