// Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

// Arguments
// array (Array): Array of numbers.
// Returns
// (Number): Returns the mean of the values in array.

// Examples
// mean([4, 2, 8, 6]); // => 5
// mean([1, 2, 3, 4]); // => 2.5
// mean([1, 2, 2]); // => 1.6666666666666667

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  const mean = array.reduce((curr, acc) => curr + acc, 0) / array.length;
  return mean;
}
