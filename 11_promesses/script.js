// const p = new Promise((resolve, reject) => {
//   resolve(4);
// });

function waitSync(duration) {
  const t = Date.now();
  while (Date.now() - t < duration) {}
}

function wait(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

function waitAndFail(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
}

async function main() {
  const duration = await wait(2000);
  console.log(`J'ai attendu ${duration} ms`);
  return 5;
}

const p = new Promise((r) => {
  console.log("hello");
  r(2);
});
p.then(() => console.log("then")); // ne s'exécute pas immédiatement
waitSync(2000);
console.log("Fin du programme");
