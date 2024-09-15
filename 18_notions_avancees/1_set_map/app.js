const persons = [
  { name: "John Doe", age: 18, id: 1 },
  { name: "Jane Doe", age: 28, id: 2 },
  { name: "Henry Doe", age: 32, id: 2 },
];

class UniqueSet {
  #map = new Map();

  constructor(cb, items) {
    for (const item of items) {
      const key = cb(item);
      if (!this.#map.has(key)) {
        this.#map.set(key, item);
      }
    }
  }

  delete(key) {
    this.#map.delete(key);
  }

  values() {
    return this.#map.values();
  }
}

const p = new UniqueSet((p) => p.id, persons);
p.delete(2);
console.log(Array.from(p.values()));
