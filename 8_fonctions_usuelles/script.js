// at pour accéder à un élément d'un tableau en partant de la fin
const notes = [12, 17, 18];
console.log(notes.at(-1));

// concat pour concaténer deux tableaux
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

// filter pour filtrer les éléments d'un tableau en fonction d'une condition
const notes1 = [12, 17, 18, 9, 7];
const goodNotes = notes1.filter((note) => note < 10);
console.log(goodNotes);

// forEach pour parcourir un tableau
const notes2 = [12, 17, 18, 9, 7];
notes2.forEach((note, index) => {
  console.log(note, index);
});

// map pour transformer un tableau en un autre tableau de même taille
const persons = [
  { firstname: "John", lastname: "Doe" },
  { firstname: "Jane", lastname: "Doe" },
  { firstname: "Marc", lastname: "Doe" },
  { firstname: "Manon", lastname: "Doe" },
];
console.log(
  persons.map((person) => person.firstname + " " + person.lastname).join("\n")
);

// reduce pour additionner les valeurs d'un tableau
const notes3 = [12, 18, 19];
console.log(notes3.reduce((acc, note) => acc + note, 0));

// reverse pour inverser un tableau (modifie le tableau)
// slice pour extraire une partie d'un tableau sans le modifier
const notes4 = [12, 18, 19];
console.log(notes4.slice().reverse());
