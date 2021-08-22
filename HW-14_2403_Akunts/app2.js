const numbers = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, 37];

for (let j = 0; j < numbers.length; j++) {
  for (let i = 0; i < numbers.length - j - 1; i++) {
    if (numbers[i] < numbers[i + 1]) {
      let tmp = numbers[i + 1];
      numbers[i + 1] = numbers[i];
      numbers[i] = tmp;
    }
  }
}
