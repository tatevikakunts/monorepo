import { openTab } from "./libs";
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
export { getInfo };
