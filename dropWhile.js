// Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

// Arguments
// array (Array): The array to query.
// predicate (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array).

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
function dropWhile(array, predicate) {
  return array.filter((value, index, array) => !predicate(value, index, array));
}

dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []
