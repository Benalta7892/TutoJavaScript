// Description: Sucre syntaxique en JavaScript, les raccourcis pour écrire du code plus rapidement.

// Pour les nombres
let i = 0;
// i = i +1
// i++;

// console.log(++i); // Affiche 1

console.log(i++); // Affiche 0
console.log(i); // Affiche 1

let e = 3;
e += 3; // *=, /=, -=
console.log(e); // Affiche 6

// Pour les fonction fléchées
const double = (n) => n * 2;
console.log(double(3)); // Affiche 6
