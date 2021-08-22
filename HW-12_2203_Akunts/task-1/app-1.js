let x = 6;
let y;
while (true) {
  y = prompt("Enter a number, please!");
  if (y < x) {
    alert("The num is small");
  } else if (y > x) {
    alert("The num is big");
  } else {

    break;
  }
}alert("Congratulations!");
