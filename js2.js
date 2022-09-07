const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  let odd = [];
  let even = [];
  for (i = 0; i < number.length; i++) {
    if (number[i] % 2 != 1) {
      even.push(number[i]);
    } else {
      odd.push(number[i]);
    }
  }
  return { odd, even };
}

console.log(result(number));