import fetch from 'node-fetch';

/* Async Process using only Promises */

const promise1 = Promise.resolve('Hello');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});
const promise4 = fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(
  (data) => data.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
