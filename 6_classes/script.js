const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = note + sum;
  }
  return sum / notes.length;
};

class Student {
  ecole = "Jules Ferry";
  _notes = [];

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  set notes(v) {
    if (Array.isArray(v)) {
      this._notes = v;
    }
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  canPass() {
    return moyenne(this._notes) >= 10;
  }
}

const John = new Student("John", "Doe");
const Jane = new Student("Jane", "Doe");
John.notes = [19];
Jane.notes = [15, 18, 19];
console.log(John.name);
