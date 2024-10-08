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
// const distribution = objWithDefault({}, []);

// function objWithDefault(obj, initial) {
//   return new Proxy(obj, {
//     get(target, prop) {
//       if (!(prop in target)) {
//         Reflect.set(target, prop, structuredClone(initial));
//       }
//       return Reflect.get(...arguments);
//     },
//   });
// }

// distribution["John"].push("a");
// distribution["John"].push("b");
// distribution["Jane"].push("c");

// console.log(distribution);

// Autre exemple

// const input = document.querySelector("input");

// const state = new Proxy(
//   {
//     count: 0,
//   },
//   {
//     set(target, prop, value) {
//       if (prop === "count") {
//         input.value = value;
//       }
//       return Reflect.set(...arguments);
//     },
//   }
// );

// document.getElementById("increment").addEventListener("click", () => {
//   state.count++;
// });
// document.getElementById("decrement").addEventListener("click", () => {
//   state.count--;
// });
// document.getElementById("reset").addEventListener("click", () => {
//   state.count = 0;
// });

// input.value = "0";

// window.state = state;

// Autre exemple
// class Person {}

// const p = new Proxy(new Person(), {
//   get() {},
// });

// console.log(p instanceof Person); // true

// Autre exemple
const a = {
  hello() {
    console.log(this);
  },
};

const b = new Proxy(a, {
  get(target, prop) {
    if (typeof target[prop] === "function") {
      return Reflect.get(...arguments).bind(target);
    }
    return Reflect.get(...arguments);
  },
});

b.hello(); // Proxy { hello: [Function: hello] }

// Ca peut causé des problèmes dans certains cas car on ne peut pas savoir si on
// a affaire à un proxy ou à un objet normal mais dans ce cas précis,
// on a bindé la fonction hello à l'objet target donc on a bien le bon this qui fait
// référence à l'objet target (a) et non au proxy (b)
