const persons = [
  { name: "John Doe", age: 18 },
  { name: "Jane Doe", age: 28 },
  { name: "Henry Doe", age: 32 },
];

const ul = document.createElement("ul");

const liMap = new Map();

persons.forEach((person) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${person.name}</strong>: ${person.age}`;
  ul.appendChild(li);
  liMap.set(person, li);
});

// Je veux le li correspondant à la personne
console.log(liMap.get(persons[1])); // <li><strong>Jane Doe</strong>: 28</li>
