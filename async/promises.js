import fetch from 'node-fetch';

const posts = [
  { title: 'Post One', body: 'This is post One' },
  { title: 'Post Tow', body: 'This is post two' },
];

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post);
    });
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; // true
      if (!error) {
        resolve('Successfully Added');
      } else {
        reject('Error: Something went wrong');
      }
    }, 1000);
  });
};

/* Handle with Promise */
createPost({ title: 'Post Three', body: 'This is post Three' })
  .then((res) => {
    console.log(res);
    getPosts();
  })
  .catch((erorr) => console.log(erorr));

/* Async / Await */
const init = async () => {
  await createPost({ title: 'Post Three', body: 'This is post Three' });
  getPosts();
};

init();

/* Async / Await / Fetch */
const fetchUser = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);

  const data = await response.json();

  console.log(data);
};

fetchUser();
