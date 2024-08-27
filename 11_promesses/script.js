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

wait(2000)
  .then(() => {
    console.log("Attente 2s");
    return wait(1000);
  })
  .then(() => {
    console.log("Attente 1s");
  });
