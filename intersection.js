// Implement a JavaScript function intersection(arrays) that takes multiple arrays as input and returns a new array containing the unique values that are present in all given arrays SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

// intersection(...arrays);
// Arguments
// [arrays] (...Array): The arrays to perform the intersection on.
// Returns
// (Array): Returns a new array containing the unique values present in all given arrays.

/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
function intersection(...arrays) {
  if (arrays.length === 0) return [];
  return arrays.reduce(
    (acc, arr) => acc.filter((value) => arr.includes(value)),
    arrays[0]
  );
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

intersection(arr1, arr2, arr3); // => [3]
