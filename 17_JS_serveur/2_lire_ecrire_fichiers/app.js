import fs from "node:fs";

const content = fs.readFile("demo.txt", { encoding: "utf8" }, function (err, content) {
  console.log(content);
});
console.log("Hello");
