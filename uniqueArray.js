// Implement a function uniqueArray that takes in an array and returns a duplicate-free version of the array where only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

/**
 * @param {Array} array
 * @return {Array}
 */
function uniqueArray(array) {
  return [...new Set(array)];
}

console.log(uniqueArray([2, 1, 2]));
