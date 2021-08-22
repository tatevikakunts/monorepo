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
  for (item of names) {
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
const renderTabs = () => {
  document.querySelector(
    "#tabs"
  ).innerHTML = `<button id = "infoBtn" class="tablinks defaultOpen">Info</button>
    <button id = "todoBtn" class="tablinks">ToDo</button>
    <button id = "postsBtn" class="tablinks">Posts</button>
    <button id = "albumsBtn" class="tablinks">Albums</button>`;
};

const getInfo = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const output = await result.json();
  renderInfo(output);
  openTab("#infoBtn", "#infoTab");
};
const renderInfo = (user) => {
  document.querySelector("#infoTab").innerHTML = `<h3>${user.name}</h3>
<p><span>Username: </span>${user.username}</p>
<p><span>Email: </span>${user.email}</p>
<p><span>Address: </span>${user.address.street} ${user.address.suite} ${user.address.city}</p>
<p><span>Phone: </span>${user.phone}</p>
<p><span>Company: </span>${user.company.name}</p>`;
};
const getTodos = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  const output = await result.json();
  renderTodos(output);
  openTab("#todoBtn", "#todosTab");
};
const renderTodos = (todos) => {
  document.querySelector("#todosTab").innerHTML = "";
  todos.forEach((todo) => {
    document.querySelector("#todosTab").innerHTML += `<div>${todo.title}
  </div>`;
  });
};
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

const getAlbums = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );
  const output = await result.json();
  renderAlbums(output);
  openTab("#albumsBtn", "#albumsTab");
  albumListener();
};
const renderAlbums = (albums) => {
  document.querySelector("#albumsTab").innerHTML = "";
  albums.forEach((album) => {
    document.querySelector(
      "#albumsTab"
    ).innerHTML += `<div id = "album_${album.id}">${album.title}</div>`;
  });
};

const albumListener = () => {
  const albums = document.querySelectorAll("#albumsTab > div");
  for (item of albums) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.currentTarget.id.split("_");
      getPhotos(id);
    });
  }
};
const openTab = (tabId, tabContent) => {
  document.querySelector(tabId).addEventListener("click", (event) => {
    event.preventDefault();
    const tabcontent = document.querySelectorAll(".tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.querySelector(tabContent).style.display = "block";
    document.querySelector(tabId).style.display = "block";
    return tabId, tabContent;
  });
  document.querySelector(".defaultOpen").click();
};
const getPhotos = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const output = await result.json();
  renderPhotos(output);
};
const renderPhotos = (photos) => {
  document.querySelector("#photos").innerHTML = "";
  photos.forEach((photo) => {
    document.querySelector(
      "#photos"
    ).innerHTML += `<img src = "${photo.thumbnailUrl}">`;
  });
  document.querySelector("#photos").parentNode.classList.remove("hide");
};

document.querySelector("#closeBtn").addEventListener("click", () => {
  document.querySelector("#closeBtn").parentNode.classList.add("hide");
});

getUsers();
getStoredUser();
