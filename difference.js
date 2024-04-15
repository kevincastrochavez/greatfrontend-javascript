// Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
  return array.filter((value) => !values.includes(value));
}

// Examples
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]
