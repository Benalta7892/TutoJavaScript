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
 * @type {string[]}
 */
const b = [];

/**
 * Les commentaires doivent être placés avant la déclaration de la fonction ou de la variable leur but est de documenter le code
 * et de permettre à un autre développeur de comprendre le code sans avoir à le lire en entier, l'auto-complétion des IDE (VSCode, WebStorm, etc.)
 * qui sont des éditeurs de code, permettent de voir les commentaires directement dans le code sans avoir à ouvrir le fichier. La JSdoc permet d'avoir
 * un peu plus de precision sur le type des variables, des paramètres et des retours de fonctions.
 *
 */
