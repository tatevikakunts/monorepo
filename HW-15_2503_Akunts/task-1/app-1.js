//Возврат суммы двух массивов (число)

const arr1 = [25, 56, -30, 48, 3];
const arr2 = [78, 64, 25, 7, -65];
function summarize(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    let add = arr1[i] + arr2[i];
    sum += add;
  }
  return sum;
}
console.log(summarize(arr1, arr2));
