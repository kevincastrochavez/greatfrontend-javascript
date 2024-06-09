// Implement a function range([start=0], end, [step=1]) that creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.

// Arguments
// start (Number): The start of the range.
// end (Number): The end of the range.
// step (Number): The value to increment or decrement by.
// Returns
// (Array): Returns the range of numbers.

/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
function range(start = 0, end, step = 1) {
  // Handle case where only 'end' is provided
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Set default step if not provided
  if (step === undefined) {
    step = start < end ? 1 : -1;
  }

  // Initialize the result array
  let result = [];

  // Handle step = 0 by repeating the start value
  if (step === 0) {
    if (start < end) {
      while (result.length < end - start) {
        result.push(start);
      }
    } else if (start > end) {
      result.push(start); // Only one element since loop won't run
    }
    return result;
  }

  // Generate the range based on positive or negative step
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }

  return result;
}

// range(4); // => [0, 1, 2, 3]

range(-4); // => [0, -1, -2, -3]

// range(1, 5); // => [1, 2, 3, 4]

// range(0, 20, 5); // => [0, 5, 10, 15]

// range(0, -4, -1); // => [0, -1, -2, -3]

// range(1, 4, 0); // => [1, 1, 1]
