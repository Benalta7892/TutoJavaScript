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

// Autre exemple
// const Jhon = {
//   name: "Jhon Doe",
//   age: 20,
// };

// function updateUser(person) {
//   person.age = 29;
// }

// const majeurProxyHandler = {
//   set(target, prop, value, receiver) {
//     if (prop === "age" && value < 18) {
//       throw new Error("La personne ne peut pas devenir mineur");
//     }
//     return Reflect.set(...arguments);
//   },
// };

// const aliveProxyHandler = {
//   set(target, prop, value, receiver) {
//     if (prop === "age" && value > 150) {
//       throw new Error("La personne est trop vieille");
//     }
//     return Reflect.set(...arguments);
//   },
// };

// const johnMajeur = new Proxy(new Proxy(Jhon, majeurProxyHandler), aliveProxyHandler);

// // Mon code
// updateUser(johnMajeur);
// console.log(johnMajeur);

// Autre exemple
const distribution = objWithDefault({}, []);

function objWithDefault(obj, initial) {
  return new Proxy(obj, {
    get(target, prop) {
      if (!(prop in target)) {
        Reflect.set(target, prop, structuredClone(initial));
      }
      return Reflect.get(...arguments);
    },
  });
}

distribution["John"].push("a");
distribution["John"].push("b");
distribution["Jane"].push("c");

console.log(distribution);
