const renderUsers = (userList) => {
  userList.forEach((user) => {
    document.querySelector(
      "#userList"
    ).innerHTML += `<li id ="user_${user.id}">${user.name}</li>`;
  });
};

const usersListener = () => {
  const list = document.querySelectorAll("#userList li");
  for (element of list) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.target.id.split("_");
      getAlbums(id);
    });
  }
};
const getAlbums = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderAlbums(data);
      albumsListener();
    });
};
const albumsListener = () => {
  const list = document.querySelectorAll("#albumList li");
  for (element of list) {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.target.id.split("_");
      getPics(id);
    });
  }
};
const getPics = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderPics(data);
    });
};
const renderPics = (picsList) => {
  const pics = document.querySelector("#picsList");
  pics.innerHTML = "";
  picsList.forEach((pic) => {
    document.querySelector(
      "#picsList"
    ).innerHTML += `<img src="${pic.thumbnailUrl}">`;
  });
};

const renderAlbums = (albumsList) => {
  const albums = document.querySelector("#albumList");
  albums.innerHTML = "";
  albumsList.forEach((album) => {
    document.querySelector(
      "#albumList"
    ).innerHTML += `<li id ="album_${album.id}">${album.title}</li>`;
  });
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    renderUsers(data);
    usersListener();
  });
