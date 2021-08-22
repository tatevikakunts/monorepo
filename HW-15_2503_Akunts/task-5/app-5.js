//Возврат массива счета до 0 переданного числа

let number = +prompt("Enter a number, please");
let countdown = [];

function createCountdown(input, array) {
  for (i = input; i > 0; i--) {
    input = input - 1;
    array.push(input);
  }
  return array;
}
console.log(createCountdown(number, countdown));


