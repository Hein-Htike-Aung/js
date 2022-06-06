import fetch from 'node-fetch';

const getRandomUsers = async (n) => {
  try {
    const fetchRandomUsers = await fetch(
      `https://randomuser.me/api/?results=${n}`
    //   `httpsrandomuser.me/api/?results=${n}`
    );
    const data = await fetchRandomUsers.json();

    data.results.forEach((user) => {
      const { gender, email } = user;
      console.log(`${gender} - ${email}`);
    });
    
    return data;

  } catch (error) {
      // Handling error
    console.log(error);
  }
};

getRandomUsers(5);
console.log('<==============>');