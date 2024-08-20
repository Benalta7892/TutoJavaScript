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

const a = {
  firstname: "John",
  lastname: "Doe",
  fullname: function () {
    console.log(`${this.firstname} ${this.lastname}`);
  },
};

const maFonction = (param1, param2) => {
  console.log(param1, param2);
};

// a.fullname(); // {firstname: "John", lastname: "Doe", fullname: ƒ}
// console.log("hello".toUpperCase());

maFonction(1, 2); // 1 2
