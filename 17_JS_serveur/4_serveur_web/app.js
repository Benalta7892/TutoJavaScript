// npm init -y , pour créer le fichier package.json, et rajouter "type": "module" pour activer les modules ES6
import { createReadStream } from "node:fs";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(req.headers.accept);
  const file = createReadStream("index.html");
  res.writeHead(404, {
    "Content-Type": "text/html",
  });
  file.pipe(res, { end: false });
  file.on("end", () => {
    res.end();
  });
});
server.listen("80");
