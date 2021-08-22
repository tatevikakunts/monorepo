const multimatrix = [];
let x = 9,
  y = 9;
for (let i = 0; i <= x; i++) {
  multimatrix[i] = [];
}
for (let i = 0; i <= x; i++) {
  for (let k = 0; k < y; k++) {
    multimatrix[i][k] = i * k;
  }
}
console.table(multimatrix);
