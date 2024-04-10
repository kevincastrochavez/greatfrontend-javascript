// Implement a custom Array function, Array.prototype.square() which creates a new array with the results of squaring every element within the array the .square() method is called on.

// Examples

// [-2].square(); // [4]
// [1, 2, 3, 4].square(); // [1, 4, 9, 16]

/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  return this.map((num) => num * num);
};

const singleItemArray = [-2];
const multiItemArray = [1, 2, 3, 4];

console.log(singleItemArray.square());
console.log(multiItemArray.square());
