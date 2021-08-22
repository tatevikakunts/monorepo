function Club() {
  this.name = "Real Madrid";
  this.city = "Madrid, Spain";
  this.players = [];
  this.sect = document.querySelector("section");
  this.header = document.querySelector("header");
  const h2 = document.createElement("h2");
  h2.innerText = this.name;
  this.header.appendChild(h2);
  this.addPlayers = function (player) {
    this.players.push(player);
    this.renderPlayer(player);
  };
  this.renderPlayer = function (player) {
    let result = this.renderP(player);

    this.sect.innerHTML += result;
  };
  this.renderP = function (player) {
    return `
      <p>${player.fName} ${player.lName} - ${player.position}</p>`;
  };
}

function Player(fName, lName, position) {
  this.fName = fName;
  this.lName = lName;
  this.position = position;
}

let players = new Club();
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const newPlayer = new Player(
    document.querySelector("#fName").value,
    document.querySelector("#lName").value,
    document.querySelector("#position").value
  );
  document.querySelector("#fName").value = "";
  document.querySelector("#lName").value = "";
  document.querySelector("#position").value = "";
  players.addPlayers(newPlayer);
});
