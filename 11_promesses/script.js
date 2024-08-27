const p = new Promise((resolve, reject) => {
  reject(4);
});

p.catch((e) => {
  console.log("Echec", e);
});
