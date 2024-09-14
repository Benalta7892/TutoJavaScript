import { exec, spawn } from "node:child_process";

const [node, _, file] = process.argv;

const pr = spawn(node, [file]);
pr.stdout.on("data", (data) => {
  console.log(data.toString("utf8"));
});

pr.stderr.on("data", (data) => {
  console.error(data.toString("utf8"));
});

pr.on("close", (code) => {
  console.log("Process exited: " + code);
});
