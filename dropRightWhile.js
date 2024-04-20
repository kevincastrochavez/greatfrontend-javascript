// Implement a function dropRightWhile(array, predicate) that creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

// Arguments
// array (Array): The array to query.
// predicate (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array). Note that the array passed in is the original array.

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
function dropRightWhile(array, predicate) {
  return array.filter((value, index, array) => !predicate(value, index, array));
}

dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3); // => [1, 2, 3]
dropRightWhile([1, 2, 3], (value) => value < 6); // => []
dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6); // => [1, 2, 3, 4, 5]
dropRightWhile([1, 2, 3, 4, 5], (_, index) => index >= 3);
