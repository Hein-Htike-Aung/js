/* Pending, Fulfilled, Rejected */

const namesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Anna', 'Jones']);
  }, 3000);

  setTimeout(() => {
    reject('no data back from server.');
  }, 5000);
});

const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Willians', 'Bravo']);
  }, 3000);

  setTimeout(() => {
    reject('no data back from server.');
  }, 5000);
});

// Single Promise
namesPromise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// Multi Promises, if one promise fail, we don't get anything
Promise.all([namesPromise, surnamesPromise])
  .then((data) => {
    const [names, surnames] = data;
    const fullNames = [];
    for (let i = 0; i < names.length; i++) {
      fullNames.push(`${names[i]} ${surnames[i]}`);
    }
    console.log(fullNames);
  })
  .catch((error) => {
    console.log(error);
  });

/* Simple Promise (use Promise instead of callback) */
const userLeft = false;
const watchMeme = true;

const watch = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({ message: 'User Left' });
    } else if (watchMeme) {
      reject({ message: 'Watch Meme' });
    } else {
      resolve({ message: 'Complete' });
    }
  });
};

watch()
  .then((response) => console.log(response.message))
  .catch((error) => console.log(error.message));


/* All Promise call at the same time */
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video One recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video Two recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video Three recorded');
});

// Promise.race (return completed first One instead of waiting everything to complete)
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (response) => console.log(response)
);

/* Call Back Hell */
const loginUser = (email, password, callback) => {
  setTimeout(() => {
    callback(email);
  }, 2000);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    return callback(['video 1', 'video 2']);
  }, 1000);
};

const videoDetails = (video, callback) => {
  setTimeout(() => {
    callback('Video Title');
  }, 2000);
};

loginUser('Xiao@gmail.com', 12345, (userEmail) => {
  console.log(userEmail);
  getUserVideos(userEmail, (videos) => {
    console.log(userEmail, videos);
    videoDetails(videos, (title) => {
      console.log(title);
    });
  });
});

/* Communating across Promise */
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email);
    }, 2000);
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Email from login User -> ', email);
      resolve(['video 1', 'video 2']);
    }, 1000);
  });
};

const videoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('video from getUserVideos -> ', video);
      resolve('Video Title');
    }, 2000);
  });
};

// Dot then syntax
loginUser('xiaoting@gmail.com', '12345').then((user) => {
  getUserVideos(user).then((videos) => {
    videoDetails(videos).then((detail) => {
      console.log(detail);
    });
  });
});

// async await syntax
async function displayUser() {
  // catch Error from All Promises
  try {
    const loginUserEmail = await loginUser('karina@gmail.com', '98492384');
    const videos = await getUserVideos(loginUserEmail);
    const title = await videoDetails(videos);
    console.log(typeof title);
  } catch (error) {
    console.log(error);
  }
}

