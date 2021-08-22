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
export { getPhotos };
