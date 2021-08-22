import { openTab } from "./libs";
const getPosts = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const posts = await result.json();
  renderPosts(posts);
  openTab("#postsBtn", "#postsTab");
};
const getComments = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const output = await result.json();
  return countComments(output);
};

const countComments = (comments) => {
  return comments.length;
};
const renderPosts = (posts) => {
  document.querySelector("#postsTab").innerHTML = "";
  posts.forEach(async (post) => {
    let addComments = await getComments(post.id);

    document.querySelector(
      "#postsTab"
    ).innerHTML += `<p id = "post_${post.id}">${post.title} (${addComments})</p>`;
  });
};
export { getPosts };
