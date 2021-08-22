class Club {
  constructor() {
    this.name = "Real Madrid";
    this.players = [];
    this.sect = document.querySelector("section");
    this.header = document.querySelector("header");
    const h2 = document.createElement("h2");
    h2.innerText = "Real Madrid";
    this.header.appendChild(h2);
  }
  addPlayers(player) {
    this.players.push(player);
    this.renderPlayer(player);
  }
  renderPlayer(player) {
    let result = this.renderP(player);
    this.sect.innerHTML += result;
  }
  renderP(player) {
    return `
    <p>${player.fName} ${player.lName} - ${player.position}</p>`;
  }
}

class Player {
  constructor(fName, lName, position) {
    this.fName = fName;
    this.lName = lName;
    this.position = position;
  }
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
