// Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.

// fromPairs(pairs);
// Arguments
// pairs (Array): An array of key-value pairs.

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */
function fromPairs(pairs) {
  return Object.fromEntries(pairs);
}

const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

fromPairs(pairs); // => { a: 1, b: 2, c: 3 }
