const expr = /\w{5,}/gmu;
const description = `
Je suis capturé
`;

for (const match of description.matchAll(expr)) {
  console.log(match);
}
