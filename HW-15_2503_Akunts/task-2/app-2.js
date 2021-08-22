//Возврат века от года

let year = +prompt("Please, insert the year.");

function getCentury(year) {
  let century = 0;
  if (year % 100 === 0) {
    century = year / 100;
    return century;
  } else {
    x = year % 100;
    century = (year + 100 - x) / 100;
  }

  return century;
}
alert(`It is the ${getCentury(year)} century`);
