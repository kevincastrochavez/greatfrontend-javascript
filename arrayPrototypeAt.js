// Array.prototype.at takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// Implement Array.prototype.at. To avoid overwriting the actual Array.prototype.at, we shall instead implement it as Array.prototype.myAt.

// Examples
// const arr = [42, 79];
// arr.myAt(0); // 42
// arr.myAt(1); // 79
// arr.myAt(2); // undefined

// arr.myAt(-1); // 79
// arr.myAt(-2); // 42
// arr.myAt(-3); // undefined

/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
  if (index < 0) {
    index = this.length + index;
  }
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  return this[index];
};
