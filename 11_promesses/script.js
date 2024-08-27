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
  const duration = await wait(2000);
  console.log(`J'ai attendu ${duration} ms`);
  return 5;
}
Promise.any([waitAndFail(1000), wait(2000)])
  .then(console.log)
  .catch(console.error);
