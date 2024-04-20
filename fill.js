// Implement a function fill(array, value, [start=0], [end=array.length]) that fills an array with values from start up to, but not including, end.

// Note: This method mutates array.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.

/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  return array.fill(value, start, end);
}

fill([1, 2, 3], 'a'); // ['a', 'a', 'a']
fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
fill([4, 6, 8, 10, 12], '*', -3, -1); // [4, 6, '*', '*', 12]
