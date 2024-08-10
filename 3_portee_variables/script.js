// let age = 18;
// if (age >= 18) {
//   let suffix = "hello";
//   console.log("Vous êtes majeur"); // "Vous êtes majeur"
// }
// console.log(suffix); // "suffix is not defined"

// let age = 18;
// if (age >= 18) {
//   var suffix = 4;
// }
// console.log(suffix); // 4
// // On utilise pas trop var, on prefere let et const

let age = 18;
let suffix = 18;
if (age >= 18) {
  let suffix = 4;
  console.log(suffix); // 4
}
console.log(suffix); // 18
// On a deux variables suffix, une globale et une locale
