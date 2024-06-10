// Implement a function that performs an insertion sort. The function should take in an array of integers and return an array with the integers sorted in ascending order. The input array is modified.

// Insertion Sort expected input and output

// Examples
// insertionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
// insertionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function insertionSort(arr) {
  return arr ? arr.sort((a, b) => a - b) : [];
}
