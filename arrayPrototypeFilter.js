// Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

// For sparse arrays (e.g. [1, 2, , 4]), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

// Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.

// Examples
// [1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
// [1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]

/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  return this.filter(callbackFn, thisArg);
};
