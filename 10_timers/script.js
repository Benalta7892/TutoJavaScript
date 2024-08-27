function wait(duration) {
  const t = Date.now();
  while (Date.now() - t < duration) {}
}
console.log("Bonjour");
// wait(1000); // Bloque le programme pendant 1 seconde
setTimeout(() => {
  console.log("Au revoir"); // Sera exécuté après 1 seconde
}, 1000);
console.log("Fin du programme"); // Sera exécuté avant "Au revoir"
