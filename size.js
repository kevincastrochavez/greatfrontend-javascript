// Implement a function size(collection) that takes a collection (an array, object, string, Map, Set) and returns its size, which represents the number of elements in the collection.

// size(collection);
// Return 0 if the collection type is not one of the supported types.

// Arguments
// collection (Array|Object): The collection to inspect.
// Returns
// (number): Returns the collection size.

// Examples
// // Arrays.
// size([1, 2, 3, 4, 5]); // => 5
// // Object.
// size({ a: 1, b: 2 }); // => 2
// // Strings.
// size('peanut'); // => 6
// // Sets.
// size(new Set([1, 2, 3])); // => 3
// // Maps.
// size(
//   new Map([
//     [1, 2],
//     [3, 4],
//   ]),
// ); // => 2

/**
 * Gets the size of `collection` by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
 *
 * @param {Array | Object | Map | Set | string | null | undefined} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 */
export default function size(collection) {
  if (!collection) {
    return 0;
  }

  if (Array.isArray(collection)) {
    return collection.length;
  }

  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  if (typeof collection === 'string') {
    return collection.length;
  }

  return Object.keys(collection).length;
}
