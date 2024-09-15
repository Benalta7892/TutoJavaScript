// const a = {
//   b: 3,
// };

// const p = new Proxy(a, {
//   get(target, prop, receiver) {
//     console.log("Accès a une propriété", prop);
//     return Reflect.get(...arguments);
//   },
//   set(target, prop, value, receiver) {
//     console.log("Ecriture dans la propriete", prop, value);
//     return Reflect.set(...arguments);
//   },
// });

// p.b = 2;
// console.log(a);

const Jhon = {
  name: "Jhon Doe",
  age: 20,
};

function updateUser(person) {
  person.age = 3;
}

const johnMajeur = new Proxy(Jhon, {
  set(target, prop, value, receiver) {
    if (prop === "age" && value < 18) {
      throw new Error("La personne ne peut pas devenir mineur");
    }
    return Reflect.set(...arguments);
  },
});

// Mon code
updateUser(johnMajeur);
console.log(johnMajeur);
