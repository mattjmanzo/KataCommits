// Alternate Case

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// Solution 1

function alternateCase(s) {
  return s
    .split("")
    .map(function (el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    })
    .join("");
}

// Solution 2

alternateCase = (s) =>
  s
    .split("")
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
