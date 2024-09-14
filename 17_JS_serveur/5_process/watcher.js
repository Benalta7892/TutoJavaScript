import { exec } from "node:child_process";

const [node, _, file] = process.argv;
exec("ls", (error, out, err) => {
  console.log({ error, out, err });
});
