function power(num, pow) {
  // returns num * pow

  // base case
  if (pow === 0) return 1;

  return num * power(num, pow - 1);
}

function factorial(num) {
  // 3! = 3 x 2 x 1
  if (num === 0) return 1;

  return num * factorial(num - 1);
}

function makeList(num) {
  if (num === 1) return [1];

  return [num, ...makeList(num - 1)];
}

function sumList(arr, length) {
  if (length === 1) return arr[0];

  return arr[0] + sumList(arr.slice(1), length - 1);
}
