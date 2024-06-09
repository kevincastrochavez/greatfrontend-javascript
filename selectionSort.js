// Implement a function that performs a selection sort. The function should take in an array of integers and return an array with the integers sorted in ascending order.

// Selection Sort expected input and output

// Examples
// selectionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
// selectionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
  // If the result is negative (a - b < 0), a is placed before b.
  // If the result is positive (a - b > 0), b is placed before a.
  // If the result is zero (a - b === 0), the order of a and b remains unchanged.
  return arr ? arr.sort((a, b) => a - b) : [];
}
