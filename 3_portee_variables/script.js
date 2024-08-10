// if (true) {
//   console.log("Bonjour");
// } // "Bonjour"

// if (false) {
//   console.log("Bonjour");
// } // N'affiche rien

// const age = 20;
// if (age > 18) {
//   console.log("Vous êtes majeur");
// } // "Vous êtes majeur"

// if (age >= 18) {
//   console.log("Vous êtes majeur");
// } // "Vous êtes majeur"

// if (age < 18) {
//   console.log("Vous êtes mineur");
// } // N'affiche rien

// if (age == 18) {
//   console.log("Vous avez 18 ans");
// } // N'affiche rien

// if (age != 18) {
//   console.log("Vous n'avez pas 18 ans");
// } // "Vous n'avez pas 18 ans"

// Opérateurs logiques
// const age = 20;
// const pays = "FR";
// // if ((pays === "FR" && age >= 18) || (pays === "US" && age >= 16)) {
// //   console.log("Vous avez le droit de conduire");
// // } // "Vous avez le droit de conduire"
// const peutConduireFrance = pays === "FR" && age >= 18;
// const peutConduireUS = pays === "US" && age >= 16;
// if (peutConduireFrance || peutConduireUS) {
//   console.log("Vous avez le droit de conduire en France");
// } else if (peutConduireUS) {
//   console.log("Vous avez le droit de conduire aux US");
// } else {
//   console.log("Vous n'avez pas le droit de conduire");
// }

// // Opérateurs inversions
// const age = 17;
// const pays = "FR";
// // if ((pays === "FR" && age >= 18) || (pays === "US" && age >= 16)) {
// //   console.log("Vous avez le droit de conduire");
// // } // "Vous avez le droit de conduire"
// const peutConduireFrance = pays === "FR" && age >= 18;
// const peutConduireUS = pays === "US" && age >= 16;

// // a || b => !a && !b
// // a && b => !a || !b

// // if (!peutConduireFrance || !peutConduireUS) {
// //   console.log("Vous n'avez pas le droit de conduire");
// // }

// // if (!(pays === "FR" && age >= 18) && !(pays === "US" && age >= 16)) {
// //   console.log("Vous n'avez pas le droit de conduire");
// // } // "Vous n'avez pas le droit de conduire"

// if ((pays !== "FR" || age < 18) && (pays !== "US" || age < 16)) {
//   console.log("Vous n'avez pas le droit de conduire");
// } // "Vous n'avez pas le droit de conduire"

// // Conditions sur variables
// const age = 17;
// const pays = "FR";
// const peutConduireFrance = pays === "FR" && age >= 18;
// const peutConduireUS = pays === "US" && age >= 16;

// switch (pays) {
//   case "FR":
//     console.log("Vous êtes en France");
//     break;
//   case "US":
//     console.log("Vous êtes aux US");
//     break;
//   default:
//     console.log("Vous êtes dans un autre pays");
//     break;
// } // "Vous êtes en France"

// Exercices : Proposer un film en fonction de l'âge

// // Demander l'année de naissance de l'utilisateur
// const year = 2024;
// const birthyear = prompt("Quel est votre année de naissance ?");
// // Calculer l'âge de l'utilisateur
// const age = year - birthyear;

// if (age <= 13) {
//   // Si l'âge est inférieur ou égal à 13 ans alors afficher "Lilo et Stitch"
//   console.log("Lilo et Stitch");
// } else if (age <= 18) {
//   // Sinon si l'âge est inférieur ou égal à 18 ans alors afficher "Matrix"
//   console.log("Matrix");
// } else {
//   // Sinon afficher "Evil Dead"
//   console.log("Evil Dead");
// }

// Exercice : Calculer 2 nombre et dire si valeur positive ou valeur négative
// "A X B = E est positif/négatif"

// Demander à l'utilisateur de rentrer 2 nombres
const number1 = prompt("Entrez un nombre");
const number2 = prompt("Entrez un autre nombre");
// Calculer le produit des 2 nombres
const result = number1 * number2;
let signe;
// Vérifier si le produit est positif ou négatif
if (isNaN(result)) {
  console.log(`Opération impossible : ${number1} X ${number2} `);
} else {
  if (result >= 0) {
    signe = "positif";
  } else {
    signe = "negatif";
  }
  console.log(`${number1} X ${number2} = ${result} est ${signe}`);
}
