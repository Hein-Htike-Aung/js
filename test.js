/* Communating across Promise */
console.log('Start...');

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

console.log('End...');
