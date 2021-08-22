//Поиск кол-ва вхождений символа в переменной

let string = prompt("Please enter a word");
let letter = prompt("Please enter a letter to count");

function countLetter(string, letter) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter += 1;
    }
  }
  return counter;
}
alert(`The letter occured ${countLetter(string, letter)} times`);
