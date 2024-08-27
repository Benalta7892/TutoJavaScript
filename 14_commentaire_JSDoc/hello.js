/**
 * Permet de savoir si l'utilisateur peut conduire
 *
 * @param {number} age
 * @param {string} country Code pays sur 2 caractères
 * @returns {boolean}
 */
function canDrive(age, country) {
  if (age >= 18) {
    return true;
    // La loi au US est que l'on peut conduire à partir de 16 ans
  } else if (country === "US" && age >= 16) {
    return true;
  }
  return false;
}

function isMajeur(age) {
  return age >= 18;
}

/**
 * @property {string} firstname
 */
class A {
  constructor () {
    this.firstname = [];
  }

}
const b = new A();
b.

/**
 * @typedef {((str: string, age: number) => Post)} Post
 * @property {number} id
 * @property {string} title Titre de l'article
 * @property {string} body
 */
/**
 * @returns {}
 */
async function fetchPosts() {}

fetchPosts()('FR', 18).
