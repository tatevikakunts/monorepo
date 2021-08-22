// Висилица.

const word = "hello";
let answer = [];

for (let i = 0; i < word.length; i++) {
  answer[i] = "_";
}
let letters = word.length;

while (letters > 0) {
  alert("Guess a letter >>>  " + answer.join(" "));

  let guess = prompt("Guess a letter");

  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answer[j] = guess;
      letters--;
    }
  }
}
alert(answer.join(" "));
alert(`You won! The word is ${word}`);
