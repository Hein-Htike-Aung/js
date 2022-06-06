import fetch from 'node-fetch';

/* Promises & Fetch API */
const getRandomUsers = (n) => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  
    fetchRandomUsers
      .then((data) => {
        data.json().then((randomUser) => {
          randomUser.results.forEach((user) => {
            const { gender, email } = user;
            console.log(`${gender} - ${email}`);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  getRandomUsers(10);
  