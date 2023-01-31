/**
 * Recursively get n numbers in the fibonacci sequence
 * 
 * @param {Number} n - Amount of numbers to be generated 
 * @param {Array} arr - Default param, first two numbers of sequence
 * @returns - Array of n numbers in fibonacci sequence
 */
function fibsRec(n, arr = [0, 1]) {
  //Base cases
  if (n === 1) {
    return [arr[0]];
  } else if (n === 2) {
    return arr;
  }

  //Append the sum of the last two numbers to the array passed as parameter
  return fibsRec(
    n - 1,
    arr.concat([arr[arr.length - 1] + arr[arr.length - 2]])
  );
}

console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(3)); // [ 0, 1, 1 ]
console.log(fibsRec(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13]
