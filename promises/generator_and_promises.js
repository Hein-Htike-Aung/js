import bluebird from 'bluebird';
import fetch from 'node-fetch';

/* promise with generator using bluebird */

const getRandomUsers = bluebird.coroutine(function* (n) {
  // yield the promise
  const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandomUsers(10)
  .then((randomUser) => {
    randomUser.results.forEach((user) => {
      const { gender, email } = user;
      console.log(`${gender} - ${email}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
