// Implement a function maxBy(array, iteratee) that finds the element inside array with the maximum value after going through iteratee. The iteratee is invoked with one argument: (value).

// Arguments
// array (Array): The array to iterate over.
// iteratee (Function): The iteratee invoked per element.
// Returns
// (*): Returns the maximum value.

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
function maxBy(array, iteratee) {
  return array.reduce((a, b) => (iteratee(a) > iteratee(b) ? a : b));
}

maxBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 2 }

maxBy([1, 2], (o) => -o); // => 1
