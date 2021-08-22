const renderTabs = () => {
  document.querySelector(
    "#tabs"
  ).innerHTML = `<button id = "infoBtn" class="tablinks defaultOpen">Info</button>
      <button id = "todoBtn" class="tablinks">ToDo</button>
      <button id = "postsBtn" class="tablinks">Posts</button>
      <button id = "albumsBtn" class="tablinks">Albums</button>`;
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
export { renderTabs, openTab };
