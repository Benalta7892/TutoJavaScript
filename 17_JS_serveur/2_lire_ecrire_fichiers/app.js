import { open } from "node:fs/promises";

const file = await open("demo.txt", "a");
file.write("Hello World");
file.close();
