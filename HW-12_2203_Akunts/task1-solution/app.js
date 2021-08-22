let computer = 7;
let human;
do {
  human = +prompt("Guess the number");
  if (computer > human) {
    alert("The input is bigger");
  }
  if (computer < human) {
    alert("Your input is smaller");
  }
} while (computer !== human);
alert("Congartulations!");
