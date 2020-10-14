// Ones and Zeros 

// Given an array of ones and zeroes, convert the equivalent binary value to an integer. Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Solution 1 

function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
  }

// Solution 2 

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);