// function wait(duration) {
//   const t = Date.now();
//   while (Date.now() - t < duration) {}
// } // Bloque le programme pendant la durée duration

// console.log("Bonjour");
// // wait(1000); // Bloque le programme pendant 1 seconde
// setTimeout(() => {
//   console.log("Au revoir"); // Sera exécuté après 1 seconde
// }, 1000);
// console.log("Fin du programme"); // Sera exécuté avant "Au revoir"

// const p = prompt("Entrez un nombre");

// function wait2(duration) {
//   const t2 = Date.now();
//   while (Date.now() - t < duration) {}
// }
// console.log("Bonjour");
// // wait(1000); // Bloque le programme pendant 1 seconde
// const t2 = setInterval(() => {
//   console.log("Au revoir"); // Sera exécuté après 1 seconde
// }, 1000);
// console.log(t2); // Sera exécuté avant "Au revoir"

//Exercice
// let i = 0;
// const t = setInterval(() => {
//   i++;
//   console.log("Bonjour");
//   if (i >= 5) {
//     clearInterval(t);
//   }
// }, 1000);

function decompte(n) {
  console.log(n);
  const t = setInterval(() => {
    n--;
    console.log(n);
    if (n === 0) {
      clearInterval(t);
    }
  }, 1000);
}

decompte(3);
decompte(5);
