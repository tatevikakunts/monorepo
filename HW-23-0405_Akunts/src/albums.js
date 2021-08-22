import { openTab } from "./libs";
import { getPhotos } from "./photos";
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
  for (let item of albums) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.currentTarget.id.split("_");
      getPhotos(id);
    });
  }
};
export { getAlbums };
