// at
const notes = [12, 17, 18];
console.log(notes.at(-1));

// concat
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

// filter
const notes1 = [12, 17, 18, 9, 7];
const goodNotes = notes1.filter((note) => note < 10);
console.log(goodNotes);
