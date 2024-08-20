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
    return moyenne(this._notes) >= Student.moyenne;
  }

  static moyenne = 10;
}

class SuperStudent extends Student {
  constructor(firstname, lastname, notes) {
    super(firstname, lastname);
    this._notes = notes;
  }

  get name() {
    return "Super " + super.name;
  }
  canPass() {
    return super.canPass();
  }
}

const John = new SuperStudent("John", "Doe", [0, 10, 8]);
const Jane = new Student("Jane", "Doe");
Jane.notes = [15, 18, 19];
console.log(John.canPass());
