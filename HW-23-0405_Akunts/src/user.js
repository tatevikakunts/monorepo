import { getInfo } from "./info";
import { renderTabs } from "./libs";
import { getTodos } from "./todo";
import { getPosts } from "./posts";
import { getAlbums } from "./albums";
const getStoredUser = () => {
  if (localStorage.userId) {
    let currentUserId = JSON.parse(localStorage.getItem("userId"));
    window.addEventListener("load", (event) => {
      renderTabs();
      getInfo(currentUserId);
      getTodos(currentUserId);
      getPosts(currentUserId);
      getAlbums(currentUserId);
    });
  }
};
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  renderUsers(data);
  usersListener();
};
const renderUsers = (userList) => {
  userList.forEach((user) => {
    document.querySelector(
      "#users"
    ).innerHTML += `<div id = "user_${user.id}">${user.username}</div>`;
  });
};
const usersListener = () => {
  const names = document.querySelectorAll("#users div");
  for (let item of names) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.target.id.split("_");
      storeUser(id);
      renderTabs();
      getInfo(id);
      getTodos(id);
      getPosts(id);
      getAlbums(id);
    });
  }
};
const storeUser = (id) => {
  localStorage.setItem("userId", JSON.stringify(id));
};
export { getUsers, getStoredUser };
