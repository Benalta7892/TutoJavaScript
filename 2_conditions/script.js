if (true) {
  console.log("Bonjour");
} // "Bonjour"

if (false) {
  console.log("Bonjour");
} // N'affiche rien

const age = 20;
if (age > 18) {
  console.log("Vous êtes majeur");
} // "Vous êtes majeur"

if (age >= 18) {
  console.log("Vous êtes majeur");
} // "Vous êtes majeur"

if (age < 18) {
  console.log("Vous êtes mineur");
} // N'affiche rien

if (age == 18) {
  console.log("Vous avez 18 ans");
} // N'affiche rien

if (age != 18) {
  console.log("Vous n'avez pas 18 ans");
} // "Vous n'avez pas 18 ans"

// git add .
// git commit -m "Conditions et opérateurs de comparaison"
// git push origin master
