const a = new AbortController();

Promise.race([
  fetch("https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=2000", {
    signal: a.signal,
  }),

  fetch("https://jsonplaceholder.typicode.com/users/?_limit=3", {
    signal: a.signal,
  }),
])
  .then((r) => r.json())
  .then((body) => {
    a.abort();
    console.log(body);
  });

// fetch("https://jsonplaceholder.typicode.com/ussssers")
//   .then((r) => r.json())
//   .then((body) => console.log(body));
