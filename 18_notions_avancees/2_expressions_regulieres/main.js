const expr = /^(\d{2}):(\d{2}) (.*)$/gm;
const description = `
00:00 Introduction
01:00 Les symboles
02:00 Les expressions régulières
03:00 Les fonctions
04:00 Les objets
05:00 Les tableaux
06:00 Les boucles
07:00 Les conditions
08:00 Les classes
09:00 Les modules
10:00 Conclusion
`;

for (const match of description.matchAll(expr)) {
  const [_, min, seconds, title] = match;
  console.table({ min, seconds, title });
}
