function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word.toUpperCase() === reversedWord.toUpperCase();
}

const words = {
  kayak: true,
  SOS: true,
  Kayak: true,
  Bonjour: false,
};

for (let word in words) {
  if (isPalindrome(word) !== words[word]) {
    console.error(`isPalindrome(${word}) aurait du renvoyer ${words[word]}`);
  }
}
