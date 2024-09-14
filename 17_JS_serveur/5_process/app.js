import { createServer } from "http";

createServer((req, res) => {
  res.write("Bonsoir");
  console.log("Bonjour");
  res.end();
}).listen("80");
