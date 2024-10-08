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

// Pour les conditions
// const a = 3;
// const b = a || 5; // ??
// console.log(b); // Affiche 3
let a;
a ||= 3;
console.log(a); // Affiche 3

const person = { firstname: "John", age: 18 };
console.log(person?.age?.toString()); // Affiche 18 si age existe sinon undefined

// La destructuration, une manière de décomposer un objet ou un tableau en plusieurs variables.

//const notes = [12, 17, 18]
// const premier = notes[0];
// const deuxieme = notes[1];
// const troisieme = notes[2];
// const [premier, deuxieme, troisieme] = [12, 17, 18];
const [premier, ...reste] = [12, 17, 18, 20];
console.log(premier, reste); // Affiche 12 [17, 18, 20]

// const person1 = { firstname: "John", lastname: "Doe", age: 18 };
// const firstname = person1.firstname; // Pas tres pratique

// const { firstname, lastname } = { firstname: "John", lastname: "Doe", age: 18 };
// console.log(firstname, lastname); // Affiche John Doe

const { firstname, ...reste1 } = {
  firstname: "John",
  lastname: "Doe",
  age: 18,
};
console.log(firstname, reste1); // Affiche John { lastname: 'Doe', age: 18 }

// function canDrive(age, pays) {

// }

function canDrive({ age, pays, region = "Paris" }) {
  // if (region === undefined) {
  //   region = "Paris";
  // }
  console.log(region); // Affiche Paris
  return true;
}
console.log(canDrive({ age: 18, pays: "FR" })); // true

function pow(n, power = 2) {}
pow(3); // 9

// Les tableaux et les objets
const notes = [1, 2];
// dans la console
// [...notes, 3, 4] // [1, 2, 3, 4] // notes n'est pas modifié notes reste [1, 2] donc ça ne modifie pas l'original
// on peut auusi mettre les éléments a la fin
// [3, 4, ...notes] // [3, 4, 1, 2]
// [...notes].reverse() // [2, 1] // notes n'est pas modifié notes reste [1, 2] donc ça ne modifie pas l'original

const person1 = { firstname: "John", lastname: "Doe" };
// dans la console
// { ...person1, age: 18 } // { firstname: 'John', lastname: 'Doe', age: 18 } // person1 n'est pas modifié person1 reste { firstname: 'John', lastname: 'Doe' } donc ça ne modifie pas l'original

// les conditions
const age = 18;
// let message;
// if (age >= 18) {
//   message = "Majeur";
// } else {
//   message = "Mineur";
// }
// console.log(message); // Affiche Majeur

// const message = age >= 18 ? "Majeur" : "Mineur";
// console.log(message); // Affiche Majeur
console.log(age >= 18 ? "Majeur" : "Mineur"); // Affiche Majeur
