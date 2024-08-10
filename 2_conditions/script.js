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

// Opérateurs inversions
const age = 13;
const pays = "US";
// if ((pays === "FR" && age >= 18) || (pays === "US" && age >= 16)) {
//   console.log("Vous avez le droit de conduire");
// } // "Vous avez le droit de conduire"
const peutConduireFrance = pays === "FR" && age >= 18;
const peutConduireUS = pays === "US" && age >= 16;

// a || b => !a && !b
// a && b => !a || !b

// if (!peutConduireFrance || !peutConduireUS) {
//   console.log("Vous n'avez pas le droit de conduire");
// }

// if (!(pays === "FR" && age >= 18) && !(pays === "US" && age >= 16)) {
//   console.log("Vous n'avez pas le droit de conduire");
// } // "Vous n'avez pas le droit de conduire"

if ((pays !== "FR" || age < 18) && (pays !== "US" || age < 16)) {
  console.log("Vous n'avez pas le droit de conduire");
} // "Vous n'avez pas le droit de conduire"
