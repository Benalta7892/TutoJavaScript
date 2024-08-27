const p = new Promise((resolve, reject) => {
  resolve(4);
});

p.then((n) => {
  console.log("Le nombre est", n);
});
