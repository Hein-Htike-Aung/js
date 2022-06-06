
/* Async Process using callback */
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

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback(); // getPosts function invokes
  }, 2000);
};

createPost({ title: 'Post Three', body: 'This is post Three' },
getPosts);
