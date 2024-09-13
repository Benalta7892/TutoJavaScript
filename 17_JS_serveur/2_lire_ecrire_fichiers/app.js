import { writeFile } from "node:fs/promises";

await writeFile("demo.txt", "Bonjour les gens", {
  flag: "a",
});
