const r = new Rectangle(10, 20);
console.log(r.perimeter); // 60
console.log(r.isValid); // true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid); // false
const c = new Square(10);
console.log(c.perimeter); // 40
console.log(r.isBiggerThan(c)); // true
