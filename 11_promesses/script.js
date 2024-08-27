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
  try {
    await waitAndFail(2000);
    console.log("Bonjour");
    await wait(1000);
    console.log("Au revoir");
  } catch (e) {
    console.log("Error");
  }
}

main();
