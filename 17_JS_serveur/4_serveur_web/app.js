// npm init -y , pour créer le fichier package.json, et rajouter "type": "module" pour activer les modules ES6
import { createReadStream } from "node:fs";
import { createServer } from "node:http";
import { text, json } from "node:stream/consumers";

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.write(`Bonjour ${(await json(req)).name}`);
  res.end();
  // res.write(`Bonjour ${url.searchParams.get("name")}`);
});
server.listen("80");
