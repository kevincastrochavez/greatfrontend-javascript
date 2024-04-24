// Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

// function getFirstName(user) {
//   return user.profile.name.firstName;
// }
// Doing getFirstName(john) works but getFirstName(jane) will error because the name property doesn't exist for jane.profile.

/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  let value = objectParam;

  for (let i = 0; i < path.length; i++) {
    if (value === undefined) return defaultValue;
    value = value[path[i]];
  }

  return value;
}

get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined
get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
