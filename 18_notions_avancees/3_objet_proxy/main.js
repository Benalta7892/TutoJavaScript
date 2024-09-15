const a = {
  b: 3,
};

const p = new Proxy(a, {
  get(target, prop, receiver) {
    console.log("Accès a une propriété", prop);
    return Reflect.get(...arguments);
  },
  set(target, prop, value, receiver) {
    console.log("Ecriture dans la propriete", prop, value);
    return Reflect.set(...arguments);
  },
});

p.b = 2;
console.log(a);
