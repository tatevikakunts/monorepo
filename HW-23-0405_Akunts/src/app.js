import { getUsers, getStoredUser } from "./user";

document.querySelector("#closeBtn").addEventListener("click", () => {
  document.querySelector("#closeBtn").parentNode.classList.add("hide");
});

getUsers();
getStoredUser();
