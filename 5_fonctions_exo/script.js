// function isPalindrome(word) {
//   const reversedWord = word.split("").reverse().join("");
//   return word.toUpperCase() === reversedWord.toUpperCase();
// }

// const words = {
//   kayak: true,
//   SOS: true,
//   Kayak: true,
//   Bonjour: false,
// };

// for (let word in words) {
//   if (isPalindrome(word) !== words[word]) {
//     console.error(`isPalindrome(${word}) aurait du renvoyer ${words[word]}`);
//   }
// }

const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
];

// Calculer la moyenne

const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};

const compareStudent = (a, b) => {
  return b.moyenne - a.moyenne;
};

for (let student of students) {
  student.moyenne = moyenne(student.notes);
  student.worst = Math.min(...student.notes);
  student.best = Math.max(...student.notes);
}

students.sort(compareStudent);

const formatStudent = (student) => {
  return `${student.name} a une moyenne de ${student.moyenne}, meilleur note (${student.best}), pire note (${student.worst})`;
};

console.log(`Top 3 etudiant
  1: ${formatStudent(students[0])}
  2: ${formatStudent(students[1])}
  3: ${formatStudent(students[2])}`);
