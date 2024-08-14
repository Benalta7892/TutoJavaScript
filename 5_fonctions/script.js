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

let notes = [12, 13, 14];

function upNotes(notes) {
  notes[0]++;
}

upNotes(notes);
console.log(notes); // [13, 13, 14]
