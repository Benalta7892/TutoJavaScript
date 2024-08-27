function wait(duration) {
  const t = Date.now();
  while (Date.now() - t < duration) {}
}
console.log("Bonjour");
wait(1000);
console.log("Au revoir");
