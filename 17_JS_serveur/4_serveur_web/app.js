// npm init -y , pour créer le fichier package.json, et rajouter "type": "module" pour activer les modules ES6
import { createReadStream } from "node:fs";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("close", () => {
    console.log(body);
    res.end();
  });
  // res.write(`Bonjour ${url.searchParams.get("name")}`);
});
server.listen("80");
