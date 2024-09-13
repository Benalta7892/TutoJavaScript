import { readFile } from "node:fs/promises";

const content = await Promise.all([
  readFile("demo.txt", { encoding: "utf8" }),
  readFile("app.js", { encoding: "utf8" }),
]);
console.log(content);
