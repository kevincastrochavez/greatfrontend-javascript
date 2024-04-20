// Implement a function findIndex(array, predicate, [fromIndex=0]) that takes an array of values, a function predicate, and an optional fromIndex number argument, and returns the index of the first element in the array that satisfies the provided testing function predicate.

// findIndex(array, predicate, [(fromIndex = 0)]);
// Arguments
// array (Array): The array to inspect.
// predicate (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array).
// [fromIndex=0] (number): The index to search from.

/**
 * This function returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
function findIndex(array, predicate, fromIndex = 0) {
  return array.findIndex(
    (value, index, array) => predicate(value, index, array),
    fromIndex
  );
}

const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
findIndex(arr, (num) => num > 3); // => 3

// Start searching from index 4 (inclusive).
findIndex(arr, (num) => num > 3, 4); // => 4

// No such element exists.
findIndex(arr, (num) => num > 10, 3); // => -1
