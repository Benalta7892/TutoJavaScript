// Les boucles

// // La boucle tant que (while) est utilisée pour répéter une action tant qu'une condition est vraie
// let i = 0;
// while (i < 10) {
//   console.log("Bonjour" + i);
//   i = i + 1;
// }

// //La boucle pour (for), pour executer une itération certain nombre de fois
// for (let i = 0; i < 10; i++) {
//   console.log("Bonjour");
// }

// // La boucle for, peu être utilisée pour itérer et parcourir les éléments d'un tableaux
// const notes = [12, 13, 16, 8];
// for (let i = 0; i < notes.length; i++) {
//   console.log(notes[i]);
// }

// // La boucle for ... in, pour parcourir par les index des éléments d'un tableau
// const notes = [12, 13, 16, 8];
// for (let i in notes) {
//   console.log(notes[i]);
// }

// // La boucle for ... of, pour parcourir les valeurs d'un tableau
const notes = [12, 13, 16, 8];
const person = {
  firsname: "John",
  lastname: "Doe",
};
for (let note of notes) {
  console.log(note);
} // 12 13 16 8
for (let note of person) {
  console.log(note);
} // Il y aura une erreur car on ne peut pas utiliser for ... of sur un objet (person)
// mais sur un tableau (notes) ou une chaine de caractères (string), ce n'est pas itérable
// le for ... in est utilisé pour les objets itérables (tableaux, chaines de caractères)
