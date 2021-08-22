const clubs = ["Заря", "Буревестник", "Вымпел", "Ураган"];
const table = [];
for (let i = 0; i < clubs.length; i++) {
  table[i] = []; //new Array (clubs.length);
}
for (let str = 0; str < clubs.length; str++) {
  for (let col = str; col < clubs.length; col++) {
    if (str === col) {
      table[str][col] = "X";
      continue;
    }
    let result = Math.floor(Math.random() * Math.floor(3));
    table[str][col] = result;
    if (result === 1) {
      result = 2;
    } else if (result === 2) {
      result = 1;
    }
    table[col][str] = result;
  }
}
console.table(table);
