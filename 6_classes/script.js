const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = note + sum;
  }
  return sum / notes.length;
};

class Student {
  ecole = "Jules Ferry";

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  canPass() {
    return moyenne(this.notes) >= 10;
  }
}

const John = new Student("John", "Doe");
const Jane = new Student("Jane", "Doe");
John.setNotes([10, 10, 9]);
Jane.setNotes([15, 18, 19]);
console.log(John.canPass(), Jane.canPass());
