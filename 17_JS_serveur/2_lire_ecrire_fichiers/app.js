import { readFile } from "node:fs/promises";

const content = await readFile("demo.txt", { encoding: "utf8" });
console.log(content);
