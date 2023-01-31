/**
 * Recursively performs a merge sort on an array 
 * of numbers.
 * 
 * @param {Array} arr - Array of numbers
 * @returns - Sorted array of number
 */
function mergeSort(arr) {
  // Array is size 1? Consider it sorted
  if (arr.length == 1) {
    return arr;
  }

  // Get middle of array
  let mid = Math.floor(arr.length / 2);

  // Get left side of array
  let leftArr = arr.slice(0, mid);

  // Get right side of array, default second parameter is last element in array
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  // Index pointer for left array
  let i = 0;
  // Index pointer for right array
  let n = 0;

  let sortedArray = [];

  /**
   * Compare elements in arrays, take the lowest value and append to
   * sorted array.
   * */
  while (i < leftArr.length && n < rightArr.length) {
    //If the two elements are equal, append element in left array
    if (leftArr[i] <= rightArr[n]) {
      sortedArray.push(leftArr[i++]);
    } else if (rightArr[n] < leftArr[i]) {
      sortedArray.push(rightArr[n++]);
    }
  }

  /**
   * If there are leftover elements in one of the arrays,
   * append the array starting with the last checked element
   * to the sorted array.
   */
  if (i < leftArr.length) {
    sortedArray = sortedArray.concat(leftArr.slice(i));
  }

  if (n < rightArr.length) {
    sortedArray = sortedArray.concat(rightArr.slice(n));
  }

  return sortedArray;
}

let arr = [3, 2, 1, 4, 5, 9, 6, 7, 8];

console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
