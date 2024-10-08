// // Les fonctions

// function canDrive(age, pays) {
//   if ((age >= 18 && pays === "FR") || (age >= 16 && pays === "US")) {
//     return true;
//   }
//   return false;
// }

// console.log(canDrive(17, "US")); // true

// let i = 0;
// function greeting(name) {
//   i++;
//   console.log(`Bonjour ${name}`);
// }

// console.log(i); // 0
// greeting("Alice"); // Bonjour Alice
// console.log(i); // 1
// greeting("Bob"); // Bonjour Bob
// console.log(i); // 2

// function maFonction() {
//   console.log(this);
// }

// maFonction.call(3); // window

// const a = {
//   firstname: "John",
//   lastname: "Doe",
//   fullname: function () {
//     console.log(`${this.firstname} ${this.lastname}`);
//   },
// };

// const maFonction = (param1, param2) => {
//   console.log(param1, param2);
// };

// // a.fullname(); // {firstname: "John", lastname: "Doe", fullname: ƒ}
// // console.log("hello".toUpperCase());

// maFonction(1, 2); // 1 2

// const somme = (a, b) => {
//   return a + b;
// };

// console.log(somme(1, 2)); // 3

// const somme = (a, b) => a + b;
// console.log(somme(1, 2)); // 3

// const isPair = function (a, cb) {
//   // cb = callback
//   if (a % 2 === 0) {
//     cb(a);
//   }
// };

// isPair(4, function (n) {
//   console.log("Mon nombre est pair " + n);
// });

// Exercices

// On creer un nombre aleatoire entre 0 et 10
// 3 essaie pour trouver le mot
// isRight(n)
// guess()

// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// const solution = getRandomInt(10);
// console.log(solution);

// function isRight(n) {
//   return solution === n;
// }

// function guess() {
//   const number = prompt("Entrez un chiffre") * 1;
//   return isRight(number);
// }

// for (i = 0; i < 3; i++) {
//   if (guess()) {
//     console.log("Bravo");
//     break;
//   } else if (i === 2) {
//     console.log("Perdu");
//   }
// }

function isPremier(n) {
  if (n < 2) {
    return false;
  }
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("0", isPremier(0));
console.log("1", isPremier(1));
console.log("2", isPremier(2));
console.log("3", isPremier(3));
console.log("11", isPremier(11));
console.log("12", isPremier(12));
