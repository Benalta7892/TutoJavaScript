const p = new Promise((resolve, reject) => {
  reject(4);
});

p.then((n) => {
  console.log("Le nombre", n);
}).catch((e) => {
  console.log("Erreur", e);
});
