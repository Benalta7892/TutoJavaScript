class Student {
  ecole = "Jules Ferry";

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const John = new Student("John", "Doe");
const Jane = new Student("Jane", "Doe");

console.log(John, Jane);
