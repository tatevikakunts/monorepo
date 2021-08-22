const newarray = [i, j];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    newarray[i][j] = i * j;

    console.log(newarray[i][j]);
  }
}
