class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        "Impossible d'avoir une forme geometrique avec des dimensions negatives"
      );
    }
    this.width = width;
    this.height = height;
  }

  get perimeter() {
    return (this.width + this.height) * 2;
  }

  get isValid() {
    return this.width > 0 && this.height > 0;
  }

  isBiggerThan(shape) {
    return this.perimeter > shape.perimeter;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}

class PromptError extends Error {}

function promptRectangle() {
  /* try { */
  const width = parseInt(prompt("Entrez la largeur du rectangle"), 10);
  const height = parseInt(prompt("Entrez la hauteur du rectangle"), 10);
  const r = new Rectangle(width, height);
  return r;
} /*catch (e) {
    throw new PromptError(
      "Entrée utilisateur invalide" , {
      cause: { code: 404, url: "https://grafikart.fr" },
    }
    );
  }
}*/

try {
  promptRectangle();
} catch (e) {
  if (e instanceof PromptError) {
    console.log("Prompt error");
  } else {
    console.log("Erreur classique");
  }
}

// const r = new Rectangle(10, 20);
// console.log(r.perimeter); // 60
// console.log(r.isValid); // true
// const r2 = new Rectangle(-10, 20);
// console.log(r2.isValid); // false
// const c = new Square(10);
// console.log(c.perimeter); // 40
// console.log(r.isBiggerThan(c)); // true

// try {
//   const r = new Rectangle(-10, 20);
// } catch (e) {
//   console.error(e.message);
// }

// const r = new Rectangle(-10, 20);
// console.log("hello");
