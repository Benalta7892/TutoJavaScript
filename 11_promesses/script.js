const p = new Promise((resolve, reject) => {
  resolve(4);
});

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
  await wait(2000);
  console.log("Bonjour");
  await wait(1000);
  console.log("Au revoir");
}

main();
