// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get perimeter() {
//     return (this.width + this.height) * 2;
//   }

//   get isValid() {
//     return this.width > 0 && this.height > 0;
//   }

//   isBiggerThan(shape) {
//     return this.perimeter > shape.perimeter;
//   }
// }

// class Square extends Rectangle {
//   constructor(width) {
//     super(width, width);
//   }
// }

// const r = new Rectangle(10, 20);
// console.log(r.perimeter); // 60
// console.log(r.isValid); // true
// const r2 = new Rectangle(-10, 20);
// console.log(r2.isValid); // false
// const c = new Square(10);
// console.log(c.perimeter); // 40
// console.log(r.isBiggerThan(c)); // true

// Exercices Bibliothècaire

class Book {
  #page = 1;

  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  get page() {
    return this.#page;
  }

  nextPage() {
    if (this.#page < this.pages) {
      this.#page++;
    }
  }

  close() {
    this.#page = 1;
  }
}

class Library {
  #books = [];

  addBook(book) {
    this.#books.push(book);
  }

  addBooks(books) {
    books.forEach(this.addBook, this);
    // for (let book of books) {
    //   this.addBook(book);
    // }
  }

  findBooksByLetter(letter) {
    //   const found = [];
    //   for (let book of this.#books) {
    //     if (book.title[0].toLowerCase() === letter.toLowerCase()) {
    //       found.push(book);
    //     }
    //   }
    //   return found;
    // }

    return this.#books.filter(
      (book) => book.title[0].toLowerCase() === letter.toLowerCase()
    );
  }
}

const b = new Book("Seigneur des anneaux", 200);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new Library();
l.addBook(b);
l.addBooks([
  new Book("Ready player one", 100),
  new Book("Oui-oui", 10),
  new Book("Sillage", 50),
]);
console.log(l.findBooksByLetter("S"));
