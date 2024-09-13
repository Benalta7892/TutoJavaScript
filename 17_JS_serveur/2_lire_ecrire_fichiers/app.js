import fs from "node:fs";

const content = fs.readFileSync("demo.txt", { encoding: "utf8" });
console.log(content);
