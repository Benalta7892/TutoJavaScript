import { createServer } from "http";

createServer((req, res) => {
  res.write("Bonsoir");
  console.log("Bonsoir");
  res.end();
}).listen("80");
