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

// // La boucle for ... in, pour parcourir par les index / clefs d'un objet ou d'un tableau
// const notes = [12, 13, 16, 8];
// for (let i in notes) {
//   console.log(notes[i]);
// }

// // La boucle for ... of, pour parcourir (itérable) les valeurs d'un tableau
// const notes = [12, 13, 16, 8];
// const person = {
//   firsname: "John",
//   lastname: "Doe",
// };
// for (let note of notes) {
//   console.log(note);
// } // 12 13 16 8
// for (let note of person) {
//   console.log(note);
// } // Il y aura une erreur car on ne peut pas utiliser for ... of sur un objet (person)
// // mais sur un tableau (notes) ou une chaine de caractères (string), ce n'est pas itérable
// // le for ... in est utilisé pour les objets itérables (tableaux, chaines de caractères)
// const greeting = "Bonjour";
// for (let letter of greeting) {
//   console.log(letter);
// } // B o n j o u r

// const greeting = "Bonjour";
// for (let letter in greeting) {
//   console.log(letter);
// } // 0 1 2 3 4 5 6

// Exercices : Boucles
// Creer un algo qui va demander a l'utilisateur de rentrer un nombre entre 1 et 10,
// verifier que le nombre est bien entre 1 et 10,
// si ce n'est pas le cas, indiquer au'il y a une erreur et redemander a l'utilisateur de rentrer un nombre,
// si le nombre est bien entre 1 et 10, afficher tous en dessous de ce nombre jusqu'a 0 (decrementer).

// En utlisant la boucle while
// Demander à l'utilisateur de rentrer un nombre entre 1 et 10
let chiffre = prompt("Entrez un nombre entre 1 et 10");
// Tant que le nombre n'est pas entre 1 et 10
if (chiffre > 10 || chiffre < 0) {
  // Afficher une erreur
  console.log("Le nombre doit être compris entre 1 et 10");
} else {
  // Afficher les nombres en dessous de ce nombre jusqu'à
  while (chiffre >= 0) {
    console.log(chiffre);
    chiffre--;
  }
}
