// Pluck

// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For Example:

// pluck([{a:1}, {a:2}], 'a') -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') -> [3, undefined]

// Solution 1

function pluck(objs, name) {
  return objs.map(function (o) {
    return o[name];
  });
}

// Solution 2

function pluck(objs, name) {
  return objs.map(function (obj) {
    return obj[name];
  });
}

// Solution 3

const pluck = (objs, name) => objs.map((obj) => obj[name]);
